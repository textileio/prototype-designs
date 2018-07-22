import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

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
          <View styles={styles.cardLeft}>
            <View style={{ backgroundColor: '#FAFCFE', paddingBottom: 17 }}>
              <Text style={styles.month}>JULY</Text>
              <Text style={styles.day}>17</Text>
            </View>
            <View style={{ height: '100%', width: 1, top: 25, position: 'absolute', left: '50%', zIndex: -10, paddingBottom: 25, backgroundColor:'#979797' }} />
          </View>
          <View styles={styles.cardRight}>
            <Text style={styles.cardAction}><Text style={styles.cardActionName}>Harold</Text> added a photo</Text>
            <Image style={styles.cardImage} source={require('./statics/photo2.png')} />
            <SmallIconTag text='12' image={require('./statics/icon-comment.png')} />
          </View>
        </View>
        <View style={styles.card}>
          <View styles={styles.cardLeft}>
            <View style={{ backgroundColor: '#FAFCFE', paddingBottom: 17 }}>
              <Text style={styles.month}>JULY</Text>
              <Text style={styles.day}>17</Text>
            </View>
            <View style={{ height: '100%', width: 1, top: 40, position: 'absolute', left: '50%', zIndex: -10, paddingBottom: 25, backgroundColor:'#979797' }} />
          </View>
          <View styles={styles.cardRight}>
            <Text style={styles.cardAction}><Text style={styles.cardActionName}>You added</Text> 3 more contacts</Text>
            <View style={{ flexDirection: 'row',  marginBottom: 8 }}>
              <Image style={styles.toolbarIconPhoto} source={require('./statics/icon-photo1.png')} />
              <Image style={styles.toolbarIconPhoto} source={require('./statics/icon-photo2.png')} />
              <Image style={styles.toolbarIconPhoto} source={require('./statics/icon-photo3.png')} />
            </View>
            <SmallIconTag text='12' image={require('./statics/icon-comment.png')} />
          </View>
        </View>
        <View style={styles.card}>
          <View styles={styles.cardLeft}>
            <View style={{ backgroundColor: '#FAFCFE', paddingBottom: 17 }}>
              <Text style={styles.month}>JULY</Text>
              <Text style={styles.day}>17</Text>
            </View>
            <View style={{ height: '100%', width: 1, top: 25, position: 'absolute', left: '50%', zIndex: -10, paddingBottom: 25, backgroundColor:'#979797' }} />
          </View>
          <View styles={styles.cardRight}>
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