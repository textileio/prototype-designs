import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Text, Image, View} from 'react-native'
import {find} from 'lodash'

import TextStrong from '../TextStrong'
import Footer from './Footer'
import pagePropType from '../../../util/pagePropType'
import styles from './styles'

export default class OnBoarding extends Component {
    static propTypes = {
      pages: PropTypes.arrayOf(pagePropType).isRequired
    };

    constructor (props) {
      super(props)
      this.state = {
        step: 0
      }
    }

    onNext = () => {
      this.setState({
        step: this.state.step + 1
      })
    }

    render () {
      const { step } = this.state
      const { pages, onSubmit } = this.props

      return (
        <Fragment>
          <View style={styles.onBoardingContainer}>
            {pages.map(page => (
              <Fragment key={page.image}>
                {page.order === step &&
                  <Fragment>
                    <View style={styles.imageContainer}>
                      <Image source={page.image}/>
                    </View>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>{page.title}</Text>
                    </View>
                    <Text style={styles.subtitle}>{page.subTitle}</Text>
                  </Fragment>}
              </Fragment>
            ))}
          </View>
          <Footer
            currentPageIndex={step}
            pages={pages}
            onNext={this.onNext}
            onSkip={onSubmit}
            onSubmit={onSubmit}
          />
        </Fragment>
      )
    }
}
