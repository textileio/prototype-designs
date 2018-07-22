import React from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import RadioButton from '../../components/RadioButton'

import styles from './statics/styles'

const ThreadsEdit = () => {
  return (
    <View style={styles.container}>
      <Toolbar
        left={<Image style={styles.toolbarLeft} source={require('./statics/icon-arrow-left.png')} />}
        right={
          <View style={styles.toolBarRight}>
            <Text style={styles.link}>Save</Text>
          </View>
        } />
      <ScrollView style={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>Add contacts</Text>
            <Text style={[styles.link, styles.small]}>Invite new users</Text>
          </View>
          <Text style={styles.subtitle}>Suggestion contacts</Text>
          <View style={styles.selectedContactList}>
            <View style={styles.selectedContact}>
              <Image style={styles.contactIcon} source={require('./statics/icon-photo1.png')} />
              <Image style={styles.selectedContactIcon} source={require('./statics/icon-select.png')} />
            </View>
            <View style={styles.selectedContact}>
              <Image style={styles.contactIcon} source={require('./statics/icon-photo1.png')} />
            </View>
            <View style={styles.selectedContact}>
              <Image style={styles.contactIcon} source={require('./statics/icon-photo1.png')} />
            </View>
            <View style={styles.selectedContact}>
              <Image style={styles.contactIcon} source={require('./statics/icon-photo1.png')} />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.searchBoxContainer}>
            <Image style={styles.searchBoxIcon} source={require('./statics/icon-search.png')} />
            <TextInput style={styles.searchBoxInput} placeholder='Search' />
          </View>
          <View style={styles.contactList}>
            <View style={styles.contactItem}>
              <Image style={styles.selectedContact} source={require('./statics/icon-photo1.png')} />
              <Text style={styles.contactName}>John Malkovich</Text>
              <View style={styles.contactSelectRadio}>
                <RadioButton selected={true} />
              </View>
            </View>
            <View style={styles.contactItem}>
              <Image style={styles.selectedContact} source={require('./statics/icon-photo1.png')} />
              <Text style={styles.contactName}>John Malkovich</Text>
              <View style={styles.contactSelectRadio}>
                <RadioButton selected={false} />
              </View>            </View>
            <View style={styles.contactItem}>
              <Image style={styles.selectedContact} source={require('./statics/icon-photo1.png')} />
              <Text style={styles.contactName}>John Malkovich</Text>
              <View style={styles.contactSelectRadio}>
                <RadioButton selected={false} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomBar active='threads' />
    </View>
  )
}

export default ThreadsEdit