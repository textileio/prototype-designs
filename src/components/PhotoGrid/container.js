import React from 'react'

import PhotoGrid from './index'

class PhotoGridContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <PhotoGrid
        {...this.props}
      />
    )
  }
}

export default PhotoGridContainer