import React, {Component} from 'react'
import {Text, View} from 'react-native'
import LottieView from 'lottie-react-native'

import Footer from './Footer'
import styles from './statics/styles'

import { pages, animations } from './constants'

export default class OnBoarding extends Component {
  constructor (props) {
    super(props)

    this.state = {
      step: 0,
      anim: animations[0]
    }
  }

    onNext = () => {
      this.setState({
        step: this.state.step + 1
      })

      this.animation.play()

      setTimeout(() => {
        this.setState({
          anim: animations[1]
        })
      }, 3000)
    }

    render () {
      const { step, anim } = this.state
      const { onSubmit } = this.props

      return (
        <View style={styles.container}>
          <View style={styles.onBoardingContainer}>
            <LottieView 
              style={{ height: 300, marginBottom: 24, marginLeft: -10 }}  
              source={anim} 
              loop={false}
              ref={animation => { this.animation = animation }}
            />   
            {pages.map((page, i) => (
              <View key={i}>
                {page.order === step &&
                  <View>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>{page.title}</Text>
                    </View>
                    <Text style={styles.subtitle}>{page.subTitle}</Text>
                  </View>
                }
              </View>
            ))}
          </View>
          <Footer
            currentPageIndex={step}
            pages={pages}
            onNext={this.onNext}
            onSkip={onSubmit}
            onSubmit={onSubmit}
          />
        </View>
      )
    }
}
