const connection = require('./connection');

const getNewEmployeer = ({employeeId, firstName, lastName}) => {
  const fullName = [firstName, lastName].filter((name) => name).join(' ');
  return {
    employeeId,
    firstName,
    lastName,
    fullName,
  }
}

const serialize = (employeeData) => {
  return {
    employeeId: employeeData.employee_id,
    firstName: employeeData.first_name,
    lastName: employeeData.last_name
  }
}

const getAll = async () => {
  const [employees] = await connection.execute(
    'SELECT employee_id, first_name, last_name FROM employees'
  )
  return employees.map(serialize).map(getNewEmployeer);
}

module.exports = {
  getAll,
}