import React from 'react'
import PropTypes from 'prop-types'

function Employee5(props) {
    console.log(props)
  return (
    <div>Employee5</div>
  )
}

Employee5.propTypes = {
    id:PropTypes.number.isRequired,
    desg: PropTypes.string.isRequired
    
}
Employee5.defaultProps={
    name:"Alex"
}

export default Employee5
