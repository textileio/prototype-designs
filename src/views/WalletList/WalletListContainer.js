import React from 'react'
import { Animated } from 'react-native'

import WalletList from './WalletList'

class WalletListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scaleAnim: new Animated.Value(1),
      gridType: 'grid'
    }
  }

  onUnmount = () => {
    const { scaleAnim } = this.state

    const scaleAnimValues = {
      toValue: 0.9,
      duration: 1000,
    }

    Animated.parallel([
      Animated.timing(
        scaleAnim,
        scaleAnimValues
      ),
    ]).start()
  }

  onToggleGrid = () => {
    const { gridType } = this.state

    this.setState({
      gridType: gridType === 'grid' ? 'list' : 'grid'
    })
  }

  render () {
    const { scaleAnim, gridType } = this.state

    return (
      <WalletList
        {...this.props}
        onUnmount={this.onUnmount}
        onToggleGrid={this.onToggleGrid}
        gridType={gridType}
        scaleAnim={scaleAnim}
      />
    )
  }
}

export default WalletListContainer