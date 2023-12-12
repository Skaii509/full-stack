// GET
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id
    }).populate('user')
    res.json(tasks)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// GET ONE
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('user')
    if (!task) return res.status(404).json({ message: 'Task not found' })
    res.json(task)
  } catch (error) {
    return res.status(404).json({ message: 'Task not found' })
  }
}
