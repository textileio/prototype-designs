import React, { Fragment } from 'react'
import {Text, View} from 'react-native'
import { Link } from 'react-router-native'

import Input from '../../components/Input'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

import commonStyles from '../commonStyles'
import styles from './statics/styles'

const Step1 = props => {
  const { name, email, onChange, onNextStep } = props

  return (
    <Fragment>
      <View style={commonStyles.container}>
        <Logo>
          <Text style={styles.headerText}>Welcome! Who is there?</Text>
        </Logo>
        <View style={styles.formContainer}>
          <Input
            value={name}
            label="Name"
            onChangeText={value => onChange({ name: 'name', value })}
          />
          <Input
            value={email}
            label="Email"
            secureTextEntry
            onChangeText={value => onChange({ name: 'email', value })}
          />
          <View style={styles.bottomLine}>
            <Button
              text="Continue  "
              disabled={!name || !email}
              onPress={onNextStep}
            />
          </View>
        </View>
      </View>
      <Footer>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <Link to={{ pathname: '/signUp' }}>
          <Text style={[styles.footerLink, styles.link, styles.strong]}>Sign Up</Text>
        </Link>
      </Footer>
    </Fragment>
  )
}

export default Step1