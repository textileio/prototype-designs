import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import ThreadDetailCard from '../../components/ThreadDetailCard'

import styles from './statics/styles'
import list from './constants'

const ThreadsEdit = () => {
  return (
    <View style={styles.container}>
      <Toolbar
        left={<Image style={styles.toolbarLeft} source={require('./statics/icon-arrow-left.png')} />}
        right={
          <View style={styles.toolBarRight}>
            <Image style={styles.toolbarIconPhoto} source={require('./statics/icon-photo.png')} />
            <Image style={styles.toolbarIconMore} source={require('./statics/icon-more.png')} />
          </View>
        }>
        <Text style={styles.toolbarTitle}>Summer</Text>
        <View style={styles.toolbarUserContainer}>
          <Image style={styles.toolbarUserIcon} source={require('./statics/icon-photo1.png')} />
          <Image style={styles.toolbarUserIcon} source={require('./statics/icon-photo2.png')} />
          <Image style={styles.toolbarUserIcon} source={require('./statics/icon-photo3.png')} />
          <Image style={styles.toolbarUserIcon} source={require('./statics/icon-user-more.png')} />
        </View>
      </Toolbar>
      <ScrollView style={styles.contentContainer}>
        { list.map((item, i) => <ThreadDetailCard key={i} last={i === list.length - 1} {...item} />) }
      </ScrollView>
      <BottomBar active='threads' />
    </View>
  )
}

export default ThreadsEdit