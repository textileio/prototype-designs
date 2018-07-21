import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './statics/styles'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import Button from '../../components/Button'

const ThreadsList = () => {
  return (
    <View style={styles.container}>
      <Toolbar />
      <View style={styles.contentContainer}>
        <Image style={styles.emptyStateImage} source={require('./statics/thread-empty-state.png')} />
        <Text style={styles.emptyStateText}>
          Start sharing your memories with
          friends and family with threads.
        </Text>
        <Button primary title='Create new thread' />
      </View>
      <BottomBar active='threads' />
    </View>
  )
}

export default ThreadsList