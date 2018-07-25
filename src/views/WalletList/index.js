import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import PhotoGrid from '../../components/PhotoGrid'

import styles from './statics/styles'
import list from './constants'

const WalletList = () => {
  return (
    <View style={styles.container}>
      <Toolbar
        style={styles.toolbar}
        left={<Image style={styles.toolbarIconUser} source={require('./statics/icon-photo1.png')} />}
        right={<Image style={styles.toolbarIconList} source={require('./statics/icon-list.png')} />}
      >
        <Text style={styles.toolbarTitle}>Hello, Michael</Text>
      </Toolbar>
      <Text style={styles.fixedDate}><Text style={styles.bold}>Today</Text> 14 photos</Text>
      <ScrollView style={styles.contentContainer}>
        <PhotoGrid photos={list} />
      </ScrollView>
      <BottomBar active='wallet' />
    </View>
  )
}

export default WalletList