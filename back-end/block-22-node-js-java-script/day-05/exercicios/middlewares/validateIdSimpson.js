const { readFile } = require("../services/middlewareFiles");

module.exports = (req, res, next) => {
  const { id } = req.body;
  const simpsons = readFile("./simpsons.json");
  const existSimpsons = simpsons.some((simpson) => simpson.id === id);
  if (existSimpsons)
    return res
      .status(500)
      .json({ message: "Não é possível cadastrar esse simpson!" });
  next();
};
