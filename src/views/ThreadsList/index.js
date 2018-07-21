import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './statics/styles'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import Button from '../../components/Button'

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
        <View style={styles.contentContainer}>
          <View style={styles.threadCard}>
            <View style={styles.threadCardHeader}>
              <View style={styles.threadCardHeaderLeft}>
                <Text style={styles.threadCardTitle}>
                  Summer
                </Text>
                <View style={styles.threadCardHeaderLeftDetail}>
                  <Text style={styles.detailUpdateTime}>2 hours ago</Text>
                  <View style={styles.detail}>
                    <Image style={styles.detailImage} source={require('./statics/icon-user.png')} />
                    <Text style={styles.detailText}>12</Text>
                  </View>
                  <View style={styles.detail}>
                    <Image style={styles.detailImage} source={require('./statics/icon-comment.png')} />
                    <Text style={styles.detailText}>56</Text>
                  </View>
                </View>
              </View>
              <View style={styles.threadCardHeaderRight}>
                <Image source={require('./statics/photo.png')} />
              </View>
            </View>
          </View>
          <Text>Holi</Text>
        </View>
      )}
      <BottomBar active='threads' />
    </View>
  )
}

export default ThreadsList