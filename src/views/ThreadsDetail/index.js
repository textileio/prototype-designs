import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Dash from 'react-native-dash'

import styles from './statics/styles'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import SmallIconTag from '../../components/SmallIconTag'

const ThreadsEdit = () => {
  return (
    <View style={styles.container}>
      <Toolbar
        left={<Image style={styles.toolbarLeft} source={require('./statics/icon-arrow-left.png')} />}
        right={
          <View style={styles.toolBarRight}>
            <Image style={styles.toolbarIconPhoto} source={require('./statics/icon-photo.png')} />
            <Image style={styles.toolbarIconMore} source={require('./statics/icon-more.png')} />
          </View>
        }>
        <Text style={styles.toolbarTitle}>Summer</Text>
        <View style={styles.toolbarUserContainer}>
          <Image style={styles.toolbarUserIcon} source={require('./statics/icon-photo1.png')} />
          <Image style={styles.toolbarUserIcon} source={require('./statics/icon-photo2.png')} />
          <Image style={styles.toolbarUserIcon} source={require('./statics/icon-photo3.png')} />
          <Image style={styles.toolbarUserIcon} source={require('./statics/icon-user-more.png')} />
        </View>
      </Toolbar>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.card}>
          <View style={styles.cardLeft}>
            <View style={styles.dateContainer}>
              <Text style={styles.month}>JULY</Text>
              <Text style={styles.day}>17</Text>
            </View>
            <Dash style={styles.carLeftLine} dashLength={4} dashGap={3} dashColor='#979797' />
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.cardAction}><Text style={styles.cardActionName}>Harold</Text> added a photo</Text>
            <Image style={styles.cardImage} source={require('./statics/photo2.png')} />
            <SmallIconTag text='12' image={require('./statics/icon-comment.png')} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardLeft}>
            <View style={styles.dateContainer}>
              <Text style={styles.month}>JULY</Text>
              <Text style={styles.day}>17</Text>
            </View>
            <Dash style={styles.carLeftLine} dashLength={4} dashGap={3} dashColor='#979797' />
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.cardAction}><Text style={styles.cardActionName}>You added</Text> 3 more contacts</Text>
            <View style={styles.userPhotosContainer}>
              <Image style={styles.toolbarUserIcon} source={require('./statics/icon-photo1.png')} />
              <Image style={styles.toolbarUserIcon} source={require('./statics/icon-photo2.png')} />
              <Image style={styles.toolbarUserIcon} source={require('./statics/icon-photo3.png')} />
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardLeft}>
            <View style={styles.dateContainer}>
              <Text style={styles.month}>JULY</Text>
              <Text style={styles.day}>17</Text>
            </View>
            <Dash style={styles.carLeftLine} dashLength={4} dashGap={3} dashColor='#979797' />
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.cardAction}><Text style={styles.cardActionName}>Harold</Text> added a photo</Text>
            <Image style={styles.cardImage} source={require('./statics/photo2.png')} />
            <SmallIconTag text='12' image={require('./statics/icon-comment.png')} />
          </View>
        </View>
      </ScrollView>
      <BottomBar active='threads' />
    </View>
  )
}

export default ThreadsEdit