import React from 'react'
import PropTypes from 'prop-types'

function Employee7(info) {
    console.log(info);
  return (
    <div>Employee</div>
  )
}

Employee7.propTypes = {
  info:PropTypes.exact({id:PropTypes.number.isRequired,name:PropTypes.string,desg:PropTypes.string})
}

export default Employee7
