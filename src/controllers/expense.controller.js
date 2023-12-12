import Expense from '../models/expense.model.js'

// GET ALL
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user.id
    })
    res.json(expenses)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// GET ONE
export const getExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id)
    if (!expense) return res.status(404).json({ message: 'Expense not found' })
    res.json(expense)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// POST
export const createExpense = async (req, res) => {
  try {
    const { title, amount } = req.body
    const newExpense = new Expense({
      title,
      amount,
      user: req.user.id
    })
    const savedExpense = await newExpense.save()
    res.json(savedExpense)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// PUT
export const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!expense) return res.status(404).json({ message: 'Expense not found' })
    res.json(expense)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// DELETE ONE
export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id)
    if (!expense) return res.status(404).json({ message: 'Expense not found' })
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// DELETE ALL
export const deleteExpenses = async (req, res) => {
  try {
    await Expense.deleteMany()
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
