import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native'

import NavigationService from '../../util/navigationService'

import icons from './constants'
import styles from './statics/styles'

class BottomBarContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      active: this.props.active
    }
  }

  componentDidUpdate (nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        active: nextProps.active
      })
    }
  }

  onPress = active => {
    this[active].play()

    this.setState({
      active
    })

    NavigationService.navigate(icons[active].route)
  }

  render () {
    const { active } = this.state

    return (
      <View style={styles.bottomBar}>
        { Object.keys(icons).map((key, i) => (
          <TouchableOpacity key={i} onPress={() => this.onPress(key)}>
            <View style={[active === key && styles.bottomBarIconActive, styles.bottomBarIcon]}>
              <LottieView 
                style={{ width: 30, height: 30 }} 
                source={icons[key].animation} 
                loop={false} 
                ref={animation => {
                  this[key] = animation
                }}
              />  
            </View>
          </TouchableOpacity>
        )) }
      </View>
    )
  }
}

export default BottomBarContainer