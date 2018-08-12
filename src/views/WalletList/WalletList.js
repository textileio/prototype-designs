import React from 'react'
import { Text, Image, Animated, TouchableOpacity } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import BottomDrawerPhotos from '../../components/BottomDrawerPhotos'
import Alert from '../../components/Alert'
import PhotoGridList from './components/PhotoGridList/PhotoGridListContainer'

import styles from './statics/styles'
import list, { photoList } from './constants'

const WalletList = props => {
  const drawer = false
  const alertDisplay = false

  const { scaleAnim, gridType, onToggleGrid, navigation } = props

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: scaleAnim }] }]}>
      <Toolbar
        style={styles.toolbar}
        left={
          <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
            <Image style={styles.toolbarIconUser} source={require('./statics/icon-photo1.png')} />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity onPress={onToggleGrid}>
            <Image style={styles.toolbarIconList} source={require('./statics/icon-list.png')} />
          </TouchableOpacity>
        }
      >
        <Text style={styles.toolbarTitle}>Hello, Michael</Text>
      </Toolbar>
      <Alert display={alertDisplay} msg='The photo has been deleted' />
      <PhotoGridList {...props} type={gridType} photos={list} />
      <BottomBar active='wallet' />
      { drawer && <BottomDrawerPhotos list={photoList} /> }
    </Animated.View>
  )
}

export default WalletList