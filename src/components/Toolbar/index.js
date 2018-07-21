import React from 'react'
import { View, Image } from 'react-native'

import styles from './statics/styles'

const Toolbar = props => {
  const { children } = props

  return (
    <View style={styles.toolBar}>
      <View style={styles.toolbarTop}>
        <Image style={styles.toolbarIcon} source={require('./statics/photo.png')} />
        <Image style={styles.toolbarLogo} source={require('./statics/logo.png')} />
        <Image style={styles.toolbarIcon} source={require('./statics/plus.png')} />
      </View>
      <View style={styles.toolbarBottom}>
        {children}
      </View>
    </View>
  )
}

export default Toolbar