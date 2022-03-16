const convertForStrings = (num) => {
  if (typeof(num) !== 'number') return 'o parâmetro deve ser um número';
  if (num > 0) return 'positivo';
  if (num < 0) return 'negativo';
  return 'neutro';
};

module.exports = convertForStrings;