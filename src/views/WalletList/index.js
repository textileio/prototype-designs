import React from 'react'
import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import ImageSc from 'react-native-scalable-image'

const { width } = Dimensions.get('window')

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'

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
        <View style={[styles.photoList, { maxHeight: 20 * list.length }]}>
          { list.map((item, i) =>
            <ImageSc key={i} width={(width - 25) / 4} style={[styles.photo]} source={item} />
          )}
        </View>
      </ScrollView>
      <BottomBar active='threads' />
    </View>
  )
}

export default WalletList