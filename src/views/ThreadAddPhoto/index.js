import React from 'react'
import {View, Text, ScrollView, Dimensions} from 'react-native'
import Image from 'react-native-scalable-image'

const { width } = Dimensions.get('window')

import Toolbar from '../../components/Toolbar'

import styles from './statics/styles'
import list from './constants'

const ThreadAddPhoto = () => {
  return (
    <View style={styles.container}>
      <Toolbar
        left={<Image style={styles.toolbarLeft} source={require('./statics/icon-arrow-left.png')} />}
      />
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.title}>Select a photo</Text>
        <View style={[styles.photoList, { maxHeight: 20 * list.length }]}>
          { list.map((item, i) =>
            <Image key={i} width={(width - 25) / 4} style={[styles.photo]} source={item} />
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default ThreadAddPhoto