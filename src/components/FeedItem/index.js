import React from 'react'
import { View, Text } from 'react-native'

import UserProfilePhoto from '../../components/UserProfilePhoto'

import styles from './statics/styles'

const FeedItem = props => {
  const { userPhoto, actionMsg, actionUser, timestamp, photo } = props

  return (
    <View style={styles.itemContainer}>
      <UserProfilePhoto width={29} photo={userPhoto} />
      <View style={styles.textContainer}>
        <Text style={styles.text}><Text style={styles.strong}>{actionUser}</Text> {actionMsg}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
      <UserProfilePhoto width={40} photo={photo} />
    </View>
  )
}

export default FeedItem