import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'
import jwt from 'jsonwebtoken'

// CREATE|REGISTER AN USER.
export const register = async (req, res) => {
  const { email, username, password } = req.body

  try {
    const userFound = await User.findOne({
      email
    })

    if (userFound) return res.status(400).json(['The email already exists'])

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User({
      email,
      username,
      password: passwordHash
    })

    const savedUser = await newUser.save()
    const token = await createAccessToken({ id: savedUser._id })

    res.cookie('token', token)
    res.json({
      id: savedUser._id,
      email: savedUser.email,
      username: savedUser.username,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// LOGIN AN USER.
export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const userFound = await User.findOne({ email })
    if (!userFound) return res.status(400).json({ message: 'User not found' })

    const isMatch = await bcrypt.compare(password, userFound.password)
    if (!isMatch) return res.status(400).json({ message: 'Incorrect password' })

    const token = await createAccessToken({ id: userFound._id })

    res.cookie('token', token)
    res.json({
      id: userFound._id,
      email: userFound.email,
      username: userFound.username,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// GET ALL USERS.
export const allUsers = async (req, res) => {
  const users = await User.find()
  res.json(users)
}

// REMOVE ALL USERS.
export const removeUsers = async (req, res) => {
  await User.deleteMany({})
  res.send('Se eliminaron a todos los usuarios.')
}

// LOGOUT THE USER.
export const logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

// GET A ROUTE ONLY IF THE USER IS AUTHENTICATED
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)

  if (!userFound) return res.status(404).json({ message: 'User not found' })

  return res.json({
    id: userFound._id,
    email: userFound.email,
    username: userFound.username,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  })
}

// VERIFY TOKEN
export const verifyToken = async (req, res) => {
  const { token } = req.cookies

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, process.env.SECRET_KEY, async (err, user) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' })

    const userFound = await User.findById(user.id)
    if (!userFound) return res.status(401).json({ message: 'Unauthorized' })

    return res.json({
      id: userFound._id,
      email: userFound.email,
      username: userFound.username
    })
  })
}
