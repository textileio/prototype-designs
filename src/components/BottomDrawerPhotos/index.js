import React from 'react'
import { View, Text, Image } from 'react-native'

import Drawer from '../../components/BottomDrawer'
import PhotoWithTextBox from '../../components/PhotoWithTextBox'

import styles from './statics/styles'

const BottomDrawerPhotos = props => {
  const { list } = props

  return (
    <Drawer overlay={true} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Share this photo in:</Text>
        <Image style={styles.closeIcon} source={require('./statics/icon-cancel.png')} />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.itemContainer}>
          <View style={styles.itemBox}>
            <Image style={styles.itemBoxPlus} source={require('./statics/icon-big-plus.png')} />
          </View>
          <Text style={styles.itemText}>Create new thread</Text>
        </View>
        { list.map((item, i) => (
          <PhotoWithTextBox style={styles.photoElement} key={i} photo={item.photo} text={item.text} />
        )) }
      </View>
    </Drawer>
  )
}

export default BottomDrawerPhotos