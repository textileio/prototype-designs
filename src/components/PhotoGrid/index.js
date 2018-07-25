import React from 'react'
import { Dimensions, View } from 'react-native'
import ImageSc from 'react-native-scalable-image'

import styles from './statics/styles'
const { width } = Dimensions.get('window')

const PhotoGrid = props => {
  const { photos } = props

  return (
    <View style={[styles.photoList, { maxHeight: 20 * photos.length }]}>
      { photos.map((item, i) =>
        <ImageSc key={i} width={(width - 25) / 4} style={[styles.photo]} source={item} />
      )}
    </View>
  )
}

export default PhotoGrid