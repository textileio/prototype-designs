import React from 'react'
import TextField from '@indec/react-native-md-textinput'

import styles from './styles'

const Input = props => {
  return (
    <TextField
      wrapperStyle={styles.inputWrapper}
      inputStyle={styles.textStyle}
      keyboardType="default"
      {...props}
    />
  )
}

export default Input
