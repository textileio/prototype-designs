import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import PhotoGridList from './components/PhotoGridList/PhotoGridListContainer'

import styles from './statics/styles'
import list from './constants'

const WalletList = () => {
  const type = 'grid' // TODO: change this value to 'list' to display the other arrangement of photos

  return (
    <View style={styles.container}>
      <Toolbar
        style={styles.toolbar}
      >
       <View style={styles.toolbarIconsList}>
         <Image style={styles.toolbarAddIcon} source={require('./statics/icon-add.png')} />
         <Image style={styles.toolbarDownloadIcon} source={require('./statics/icon-download.png')} />
         <Image style={styles.toolbarShareIcon} source={require('./statics/icon-share.png')} />
         <Image style={styles.toolbarRemoveIcon} source={require('./statics/icon-remove.png')} />
       </View>
      </Toolbar>
      <PhotoGridList type={type} photos={list} />
      <View style={styles.bottomBar}>
        <Text style={styles.text}>1 photo selected</Text>
        <Text style={styles.link}>Deselect all</Text>
      </View>
    </View>
  )
}

export default WalletList