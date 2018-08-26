import React, { Fragment } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'

import Input from '../../components/Input'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

import commonStyles from '../commonStyles'
import styles from './statics/styles'

const ForgotPassword = props => {
  const { email, onChange, history } = props

  return (
    <Fragment>
      <ScrollView style={commonStyles.container}>
        <Logo>
          <Text style={styles.headerText}>Forgot your password?</Text>
          <Text style={styles.headerText}>Enter your email to find your account.</Text>
        </Logo>
        <View style={styles.formContainer}>
          <Input
            value={email}
            label="Email"
            onChangeText={value => onChange({ name: 'email', value })}
          />
          <Button
            style={styles.button}
            text="Reset password"
            disabled={!email}
            onPress={() => history.push('/welcome')}
          />
        </View>
      </ScrollView>
      <Footer>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
          <Text style={[styles.footerLink, styles.link]}>Return to log in</Text>
        </TouchableOpacity>
      </Footer>
    </Fragment>
  )
}

export default ForgotPassword