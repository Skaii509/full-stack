import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    trim: true // ELIMINA LOS ESPACIOS INNECESARIOS; '  hola  ' -> 'hola'
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)
