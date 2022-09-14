import React from 'react'
import PropTypes from 'prop-types'

function Employee4(props) {
    console.log(props);
    //console.log(id+":" +name+ ":" +desg)
  return (
    <div>Employee</div>
  )
}

Employee4.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    desg:PropTypes.string.isRequired
}

export default Employee4
