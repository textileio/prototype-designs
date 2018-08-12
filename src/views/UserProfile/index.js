import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import ImageSc from 'react-native-scalable-image'
import { Transition } from 'react-navigation-fluid-transitions'

import Toolbar from '../../components/Toolbar'
import UserProfilePhoto from '../../components/UserProfilePhoto'

import styles from './statics/styles'

const UserProfile = props => {
  const { navigation } = props

  return (
    <View style={styles.container}>
      <Toolbar
        left={
          <Transition appear='top'>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.toolbarLeft} source={require('./statics/icon-arrow-left.png')} />
            </TouchableOpacity>
          </Transition>
        }
      >
        <View style={styles.toolbarBottom}>
          <View style={styles.toolbarTitle}>
            <Text style={styles.toolbarUserName}>Hello, Michael</Text>
            <Transition appear='top'>
              <Text style={styles.toolbarThreadsQty}><Text style={styles.strong}>3,423</Text> Photos</Text>
            </Transition>
          </View>
          <Transition appear='top'>
            <UserProfilePhoto width={59} photo={require('./statics/icon-user.png')} />
          </Transition>
        </View>
      </Toolbar>
      <Transition appear='top'>
        <View style={styles.contentContainer}>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Settings</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Privacy</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Notifications</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Help</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Invite</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={[styles.listText, styles.warning]}>Logout</Text>
          </View>
          <View style={styles.servers}>
            <View style={styles.activeIcon} />
            <Text style={styles.serversText}>Connected to <Text style={styles.strong}>23</Text> servers</Text>
          </View>
          <View style={styles.logoContainer}>
            <ImageSc width={83} source={require('./statics/textile-gray-logo.png')} />
          </View>
        </View>
      </Transition>
    </View>
  )
}

export default UserProfile