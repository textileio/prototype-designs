import React from 'react'
import { Text, Image, Animated } from 'react-native'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import BottomDrawerPhotos from '../../components/BottomDrawerPhotos'
import Alert from '../../components/Alert'
import PhotoGridList from './components/PhotoGridList/PhotoGridListContainer'

import styles from './statics/styles'
import list, { photoList } from './constants'

const WalletList = props => {
  const type = 'grid' // TODO: change this value to 'list' to display the other arrangement of photos
  const drawer = false
  const alertDisplay = false

  const { scaleAnim } = props

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: scaleAnim }] }]}>
      <Toolbar
        style={styles.toolbar}
        left={<Image style={styles.toolbarIconUser} source={require('./statics/icon-photo1.png')} />}
        right={<Image style={styles.toolbarIconList} source={require('./statics/icon-list.png')} />}
      >
        <Text style={styles.toolbarTitle}>Hello, Michael</Text>
      </Toolbar>
      <Alert display={alertDisplay} msg='The photo has been deleted' />
      <PhotoGridList {...props} type={type} photos={list} />
      <BottomBar active='wallet' />
      { drawer && <BottomDrawerPhotos list={photoList} /> }
    </Animated.View>
  )
}

export default WalletList