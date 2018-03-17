import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  const username = props.username;
  let input

  return (
    <section id="new-message">
      <h6>Enter message here:</h6>
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.dispatch(input.value, username, props.channel)
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage