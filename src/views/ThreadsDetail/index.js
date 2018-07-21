import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import styles from './statics/styles'
import list from './constants'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import ThreadCard from '../../components/ThreadListCard'

const ThreadsEdit = () => {
  return (
    <View style={styles.container}>
      <Toolbar
        left={<Image style={{ height: 16, width: 40 }} source={require('./statics/icon-arrow-left.png')} />}
        right={
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <Image style={{ height: 24, width: 27, marginRight: 16 }} source={require('./statics/icon-photo.png')} />
            <Image style={{ height: 4, width: 16 }} source={require('./statics/icon-more.png')} />
          </View>
        }>
        <Text style={{ fontFamily: "BentonSans", fontSize: 30, marginBottom: 10 }}>Summer</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ height: 27, width: 27, marginRight: 10 }} source={require('./statics/icon-photo1.png')} />
          <Image style={{ height: 27, width: 27, marginRight: 10 }} source={require('./statics/icon-photo2.png')} />
          <Image style={{ height: 27, width: 27, marginRight: 10 }} source={require('./statics/icon-photo3.png')} />
          <Image style={{ height: 27, width: 27, marginRight: 10 }} source={require('./statics/icon-user-more.png')} />
        </View>
      </Toolbar>
      <ScrollView style={styles.contentContainer}>
        { list.map((item, i) => (
          <ThreadCard key={i} {...item} />
        )) }
      </ScrollView>
      <BottomBar active='threads' />
    </View>
  )
}

export default ThreadsEdit