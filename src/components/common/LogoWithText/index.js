import React from 'react'
import PropTypes from 'prop-types'
import {Image, Text, View} from 'react-native'

const LogoWithText = ({text}) => (
  <View style={{alignItems: 'center', paddingBottom: 10}}>
    <View style={{paddingTop: 30}}>
      <Image
        source={require('../../../images/logo.png')}
      />
    </View>
    <Text>{text}</Text>
  </View>
)

LogoWithText.propTypes = {
  text: PropTypes.string.isRequired
}

export default LogoWithText
