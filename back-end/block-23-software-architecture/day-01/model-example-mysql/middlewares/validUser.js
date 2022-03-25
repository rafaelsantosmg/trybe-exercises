const validEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
const minPassword = 6;

module.exports = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body
  if (!firstName || typeof firstName !== 'string') {
    return res.status(400).json({ error: true, message: 'First Name invalid'});
  }
  if (!lastName || typeof lastName !== 'string') {
    return res.status(400).json({ error: true, message: 'Last Name invalid'});
  }
  if (!validEmail.test(email) || !email) {
    res.status(400).json({ error: true, message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password || password.length < minPassword) { 
    return res.status(400).json({ error: true, message: 'O campo "password" deve ter pelo menos 6 caracteres' });
  }
  next();
}