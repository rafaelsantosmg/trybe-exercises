const sumMath = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject('Informe apenas números');
    }
    const result = (a + b) * c;
    if (result < 50) {
      return reject('Valor muito baixo');
    }
    resolve(result);
    });
}

const results1 = async () => {
  try {
    const result1 = await sumMath(10, 10, 10);
    console.log(result1);
  } catch (err) {
    console.error(err);
  }
}

const results2 = async () => {
  try {
    const result2 = await sumMath(1, 1, 'a');
    console.log(result2);
  } catch (err) {
    console.error(err);
  }
}

const results3 = async () => {
  try {
    const result3 = await sumMath(1, 1, 1);
    console.log(result3);
  } catch (err) {
    console.error(err);
  }
}

module.exports = sumMath;
