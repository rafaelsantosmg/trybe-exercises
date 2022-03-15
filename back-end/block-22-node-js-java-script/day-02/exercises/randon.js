const sumMath = require('./sumMath.js');

const randonMath = () => {
  return randon = Math.floor(Math.random() * 100 + 1);
}

const results = async () => {
  try {
    const result1 = await sumMath(randonMath(), randonMath(), randonMath());
    console.log(result1);
  } catch (err) {
    console.error(err);
  }
};

results();
