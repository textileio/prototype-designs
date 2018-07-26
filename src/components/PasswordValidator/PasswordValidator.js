import React from 'react'

const PasswordValidator = props => {
  const { display, text } = props

  return (
    <Text style={!display && { display: 'none' }}>{text}</Text>
  )
}

export default PasswordValidator