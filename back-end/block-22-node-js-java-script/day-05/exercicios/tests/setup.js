const resetFileSimpsons = require('./utils/resetFileSimpsons');

before(async () => {
  await resetFileSimpsons();
});


after(async () => {
  await resetFileSimpsons();
});