import React from 'react'
import propTypes from 'prop-types'
import ImageSc from 'react-native-scalable-image'
import { View, Image, TouchableOpacity } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'

import styles, { gridStyles } from './statics/styles'

const PhotoGrid = props => {
  const { type, photos, navigation, onParentUnmount } = props

  return (
    <View style={[styles.photoList, gridStyles(photos)[type].container ]}>
      { photos.map((item, i) =>
        <View key={i} style={styles.photo}>
          { item.selected && [
            <View key='selected-1' style={styles.photoSelected} />,
            <Image key='selected-2' style={styles.photoSelectedIcon} source={require('./statics/icon-ok.png')} />
          ]}
          <TouchableOpacity onPress={() => {
            //onParentUnmount()
            navigation.navigate('PhotoDetail', { id: item.id, sharedProp: `photo-${item.id}` })
          }}>
            <Transition shared={`photo-${item.id}`}>
              <ImageSc width={gridStyles(photos)[type].photo} source={item.photo} />
            </Transition>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

PhotoGrid.propTypes = {
  type: propTypes.oneOf(['grid', 'list'])
}

export default PhotoGrid