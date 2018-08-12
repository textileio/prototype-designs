import React from 'react'
import { Animated } from 'react-native'

import WalletList from './WalletList'

class WalletListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scaleAnim: new Animated.Value(1),
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

  render () {
    const { scaleAnim } = this.state

    return (
      <WalletList
        {...this.props}
        onUnmount={this.onUnmount}
        scaleAnim={scaleAnim}
      />
    )
  }
}

export default WalletListContainer