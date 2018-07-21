import React from 'react'
import { View, Image } from 'react-native'

import styles from './statics/styles'

const BottomBar = props => {
  const { active } = props

  return (
    <View style={styles.bottomBar}>
      <View style={active === 'threads' && styles.bottomBarIconActive}>
        <Image style={styles.bottomBarIcon} source={require('./statics/icon-threads.png')} />
      </View>
      <View style={active === 'wallet' && styles.bottomBarIconActive}>
        <Image style={styles.bottomBarIcon} source={require('./statics/icon-wallet.png')} />
      </View>
      <View style={active === 'feed' && styles.bottomBarIconActive}>
        <Image style={styles.bottomBarIcon} source={require('./statics/icon-feed.png')} />
      </View>
    </View>
  )
}

export default BottomBar