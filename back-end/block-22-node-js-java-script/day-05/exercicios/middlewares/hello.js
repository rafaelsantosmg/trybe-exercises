module.exports = (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!`});
}