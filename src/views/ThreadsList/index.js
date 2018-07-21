import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import styles from './statics/styles'
import list from './constants'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import Button from '../../components/Button'
import ThreadCard from '../../components/ThreadCard'

const ThreadsList = () => {
  const empty = false // TODO: Change to see different states

  return (
    <View style={styles.container}>
      <Toolbar />
      { empty && (
        <View style={styles.emptyStateContainer}>
          <Image style={styles.emptyStateImage} source={require('./statics/thread-empty-state.png')} />
          <Text style={styles.emptyStateText}>
            Start sharing your memories with
            friends and family with threads.
          </Text>
          <Button primary title='Create new thread' />
        </View>
      )}
      { !empty && (
        <ScrollView style={styles.contentContainer}>
          { list.map((item, i) => (
            <ThreadCard key={i} {...item} />
          )) }
        </ScrollView>
      )}
      <BottomBar active='threads' />
    </View>
  )
}

export default ThreadsList