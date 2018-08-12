/** @format */

import {AppRegistry} from 'react-native'
import React, {Component} from 'react'

import App from './src/app/router'

/**
 * Root component for Android bundle.
 * Keep this as a class-component, else HRM does not work.
 */
class Root extends Component {
  render () {
    return (
      <App/>
    )
  }
}

AppRegistry.registerComponent('TextileNew', () => Root)
