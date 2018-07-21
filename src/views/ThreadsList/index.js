import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './statics/styles'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'

const ThreadsList = () => {
  return (
    <View style={styles.container}>
      <Toolbar />
      <BottomBar active='threads' />
    </View>
  )
}

export default ThreadsList