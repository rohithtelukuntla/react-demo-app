import React from 'react'
import PropTypes from 'prop-types'

function Employee2(props) {
    console.log(props);
  return (
    <div>Employee</div>
  )
}

Employee2.propTypes = {
    id:PropTypes.number,
    name:PropTypes.string.isRequired,
    desg:PropTypes.string,
    sal:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    gender:PropTypes.oneOf(['male','female'])
}

export default Employee2
