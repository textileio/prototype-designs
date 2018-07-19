import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import SvgUri from 'react-native-svg-uri'

import styles from './statics/styles'

const LogoWithText = props => {
  const { text } = props

  return (
    <View style={styles.container}>
      <SvgUri width='131' height='40' source={require('./statics/logo.svg')} />
      <Text style={styles.tagline}>{text}</Text>
    </View>
  )
}

LogoWithText.propTypes = {
  text: PropTypes.string.isRequired
}

export default LogoWithText
