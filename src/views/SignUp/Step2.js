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
  const { username, password, onChange, history } = props

  return (
    <Fragment>
      <View style={commonStyles.container}>
        <Logo>
          <Text style={styles.headerText}>Now create your account to finish.</Text>
        </Logo>
        <View style={styles.formContainer}>
          <Input
            value={username}
            label="Username"
            onChangeText={value => onChange({ name: 'username', value })}
          />
          <Input
            value={password}
            label="Password"
            secureTextEntry
            onChangeText={value => onChange({ name: 'password', value })}
          />
          <View style={styles.bottomLine}>
            <Button
              text="Continue  "
              disabled={!username || !password}
              onPress={() => history.push('/welcome')}
            />
          </View>
        </View>
      </View>
      <Footer>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <Link to={{pathname: '/signUp'}}>
          <Text style={[styles.footerLink, styles.link, styles.strong]}>Sign Up</Text>
        </Link>
      </Footer>
    </Fragment>
  )
}

export default Step1