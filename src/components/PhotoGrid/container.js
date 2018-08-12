import React from 'react'
import { Animated, Dimensions } from 'react-native'

import PhotoGrid from './index'

class PhotoGridContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      gridScaleAnim: new Animated.Value(1),
      imageWidthAnim: new Animated.Value(100),
      imageHeightAnim: new Animated.Value(0)
    }
  }

  onImagePress = () => {
    const { gridScaleAnim, imageWidthAnim, imageHeightAnim } = this.state

    const duration = 1000
    const { width } = Dimensions.get('window')

    Animated.parallel([
      Animated.timing(imageWidthAnim, { duration, toValue: width } ),
    ]).start()
  }

  render () {
    const { gridScaleAnim, imageWidthAnim, imageHeightAnim } = this.state

    return (
      <PhotoGrid
        {...this.props}
        imageWidthAnim={imageWidthAnim}
        imageHeightAnim={imageHeightAnim}
        gridScaleAnim={gridScaleAnim}
        onImagePress={this.onImagePress}
      />
    )
  }
}

export default PhotoGridContainer