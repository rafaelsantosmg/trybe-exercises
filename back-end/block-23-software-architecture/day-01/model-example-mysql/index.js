const express = require('express');
const app = express();
const PORT = 3001;

const employeesRouter = require('./router/employees');
const jobsRouter = require('./router/jobs');
const usersRouter = require('./router/users');

app.use(express.json());

app.use('/employees', employeesRouter);
app.use('/jobs', jobsRouter);
app.use('/user', usersRouter)


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));