import React from 'react'
import propTypes from 'prop-types'

import { Text, TouchableOpacity } from 'react-native'

import styles from './statics/styles'

const Button = props => {
  const { onPress, disabled, text, style, textStyle } = props

  return (
    <TouchableOpacity disabled={disabled} style={[styles.button, style, disabled && styles.disabled]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle, disabled && styles.textDisabled]}>{text}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  text: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired
}

export default Button