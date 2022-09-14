import React from 'react'
import PropTypes from 'prop-types'

function Employee6(info) {
    console.log(info);
  return (
    <div>Employee</div>
  )
}

Employee6.propTypes = {
  info:PropTypes.shape({id:PropTypes.number.isRequired,name:PropTypes.string,desg:PropTypes.string})
}

export default Employee6
