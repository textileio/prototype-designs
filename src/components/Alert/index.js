import React from 'react'
import { View, Text } from 'react-native'

import styles from './statics/styles'

const Alert = props => {
  const { display, msg } = props
  return (
    <View style={[styles.container, !display && { display: 'none' }]}>
      <Text style={styles.msg}>{msg}</Text>
    </View>
  )
}

export default Alert