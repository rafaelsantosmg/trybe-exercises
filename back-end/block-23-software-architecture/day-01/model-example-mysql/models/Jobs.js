const connection = require('./connection');

const serialize = (jobData) => {
  return {
    jobTitle: jobData.job_title,
    firstName: jobData.first_name,
  }
}

const getAll = async () => {
  const [jobs] = await connection.execute(
    `SELECT job_title FROM jobs`
  );
  return jobs.map(serialize);
}

const getById = async (id) => {
  const [jobs] = await connection.execute(
    `SELECT e.first_name, j.job_title
    FROM jobs j 
    INNER JOIN employees e 
    ON j.job_id = e.job_id 
    WHERE j.job_id = ?`, [id]
  );
  return jobs.map(serialize);
}

module.exports = {
  getAll,
  getById,
}