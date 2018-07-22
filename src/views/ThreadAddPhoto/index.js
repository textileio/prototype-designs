import React from 'react'
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native'

import Toolbar from '../../components/Toolbar'

import styles from './statics/styles'

const ThreadAddPhoto = () => {
  const list = [
    require('./statics/photo1.png'),
    require('./statics/photo2.png'),
    require('./statics/photo4.png'),
    require('./statics/photo1.png'),
    require('./statics/photo4.png'),
    require('./statics/photo2.png'),
    require('./statics/photo2.png'),
    require('./statics/photo1.png'),
    require('./statics/photo2.png'),
    require('./statics/photo3.png'),
    require('./statics/photo1.png'),
    require('./statics/photo3.png'),
    require('./statics/photo4.png'),
    require('./statics/photo2.png'),
    require('./statics/photo1.png'),
    require('./statics/photo4.png'),
    require('./statics/photo1.png'),
    require('./statics/photo2.png'),
    require('./statics/photo3.png'),
    require('./statics/photo4.png'),
    require('./statics/photo1.png'),
    require('./statics/photo2.png'),
    require('./statics/photo3.png'),
    require('./statics/photo4.png')
  ]

  return (
    <View style={styles.container}>
      <Toolbar
        left={<Image style={styles.toolbarLeft} source={require('./statics/icon-arrow-left.png')} />}
      />
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.title}>Select a photo</Text>
        <View style={[styles.photoList, { maxHeight: 30 * list.length }]}>
          { list.map((item, i) =>
            <Image key={i} style={styles.photo} source={item} />
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default ThreadAddPhoto