import React from 'react'
import { View } from 'react-native'
import ImageSc from 'react-native-scalable-image'

import styles from './statics/styles'

const Logo = props => {
  const { children, style, logoStyle } = props

  return (
    <View style={[styles.container, style]}>
      <ImageSc width={132} style={[styles.image, logoStyle]} source={require('./statics/logo.png')} />
      {children}
    </View>
  )
}

export default Logo
