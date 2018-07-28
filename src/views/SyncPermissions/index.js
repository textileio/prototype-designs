import React  from 'react'
import { View, Text, Switch } from 'react-native'
import ImageSc from 'react-native-scalable-image'

import Button from '../../components/Button'

import styles from './statics/styles'

const SyncPermissions = props => {
  const { } = props

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageSc width={147} source={require('./statics/main-image.png')} />
        <Text style={styles.title}>To make everything run we need a few permissions</Text>
      </View>
      <View style={styles.contentContainer}>

        <View style={styles.listItem}>
          <View>
            <Text style={styles.itemTitle}>Camera Roll</Text>
            <View style={styles.itemTexts}>
              <Text style={styles.itemDescription}>Updates your photos</Text>
              <ImageSc width={15} source={require('./statics/icon-info.png')} />
            </View>
          </View>
          <Switch />
        </View>

        <Button text='Continue' onPress={() => {}} />
      </View>
    </View>
  )
}

export default SyncPermissions