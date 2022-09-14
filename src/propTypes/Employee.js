import React from 'react'
import PropTypes from 'prop-types'

function Employee(props) {
    console.log(props);
  return (
    <div>Employee</div>
  )
}

Employee.propTypes = {
    id:PropTypes.number
}

export default Employee
