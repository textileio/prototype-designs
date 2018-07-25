import React from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'
import ImageSc from 'react-native-scalable-image'

import styles, { gridStyles } from './statics/styles'

const PhotoGrid = props => {
  const { type, photos } = props

  return (
    <View style={[styles.photoList, gridStyles(photos)[type].container ]}>
      { photos.map((item, i) =>
        <ImageSc key={i} width={gridStyles(photos)[type].photo} style={styles.photo} source={item} />
      )}
    </View>
  )
}

PhotoGrid.propTypes = {
  type: propTypes.oneOf(['grid', 'list'])
}

export default PhotoGrid