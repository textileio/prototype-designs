import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './statics/styles'

const PhotoWithTextBox = props => {
  const { photo, text, style } = props

  return (
    <View style={[styles.itemContainer, style]}>
      <Image style={styles.itemPhoto} source={photo} />
      <Text style={styles.itemText}>{text}</Text>
    </View>
  )
}

export default PhotoWithTextBox