import Income from '../models/income.model.js'

// GET ALL
export const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find({
      user: req.user.id
    })
    res.json(incomes)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// GET ONE
export const getIncome = async (req, res) => {
  try {
    const income = await Income.findById(req.params.id)
    if (!income) return res.status(404).json({ message: 'Income not found' })
    res.json(income)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// POST
export const createIncome = async (req, res) => {
  try {
    const { title, amount } = req.body
    const newIncome = new Income({
      title,
      amount,
      user: req.user.id
    })
    const savedIncome = await newIncome.save()
    res.json(savedIncome)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// PUT
export const updateIncome = async (req, res) => {
  try {
    const income = await Income.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!income) return res.status(404).json({ message: 'Income not found' })
    res.json(income)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// DELETE ONE
export const deleteIncome = async (req, res) => {
  try {
    const income = await Income.findByIdAndDelete(req.params.id)
    if (!income) return res.status(404).json({ message: 'Income not found' })
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// DELETE ALL
export const deleteIncomes = async (req, res) => {
  try {
    await Income.deleteMany()
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
