import React from 'react'
import propTypes from 'prop-types'
import { View, Image, TouchableOpacity } from 'react-native'

import NavigationService from '../../util/navigationService'

import styles from './statics/styles'

const BottomBar = props => {
  const { active } = props

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={() => NavigationService.navigate('ThreadsList')}>
        <View style={active === 'threads' && styles.bottomBarIconActive}>
          { active === 'threads' && (
            <Image style={styles.bottomBarIcon} source={require('./statics/icon-threads-active.png')} />
          )}
          { active !== 'threads' && (
            <Image style={styles.bottomBarIcon} source={require('./statics/icon-threads.png')} />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => NavigationService.navigate('WalletList')}>
        <View style={active === 'wallet' && styles.bottomBarIconActive}>
          { active === 'wallet' && (
            <Image style={styles.bottomBarIcon} source={require('./statics/icon-wallet.png')} />
          )}
          { active !== 'wallet' && (
            <Image style={styles.bottomBarIcon} source={require('./statics/icon-wallet.png')} />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => NavigationService.navigate('FeedList')}>
        <View style={active === 'feed' && styles.bottomBarIconActive}>
          { active === 'feed' && (
            <Image style={styles.bottomBarIcon} source={require('./statics/icon-feed.png')} />
          )}
          { active !== 'feed' && (
            <Image style={styles.bottomBarIcon} source={require('./statics/icon-feed.png')} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

BottomBar.propTypes = {
  active: propTypes.oneOf(['threads', 'wallet', 'feed'])
}

export default BottomBar