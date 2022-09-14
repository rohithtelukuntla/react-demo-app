import React from 'react'
import PropTypes from 'prop-types'

function Employee3(info) {
    console.log(info);
  return (
    <div>Employee</div>
  )
}

Employee3.propTypes = {
  info:PropTypes.object.isRequired
}

export default Employee3
