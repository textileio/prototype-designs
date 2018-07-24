import React from 'react'
import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import ImageSc from 'react-native-scalable-image'

import Toolbar from '../../components/Toolbar'
import SmallIconTag from '../../components/SmallIconTag'
import BottomDrawerList from '../../components/BottomDrawerList'

import styles from './statics/styles'
const { width } = Dimensions.get('window')

const ThreadPhotoDetail = () => {
  const showDrawer = false // Should uncomment to display drawer

  return (
    <View style={styles.container}>
      <Toolbar
        left={<Image style={styles.toolbarLeft} source={require('./statics/icon-arrow-left.png')} />}
        right={
          <View style={styles.toolBarRight}>
            <Image style={styles.toolbarIconMore} source={require('./statics/icon-more.png')} />
          </View>
        }>
        <Text style={styles.toolbarTitle}>Summer cheers!!! </Text>
      </Toolbar>
      <ScrollView style={styles.contentContainer}>
        <ImageSc style={styles.mainPhoto} width={width} source={require('./statics/photo2.png')} />
        <View style={styles.commentsContainer}>
          <View style={[styles.comment, styles.withDivider]}>
            <Image style={styles.commentImage} source={require('./statics/icon-photo1.png')} />
            <View style={styles.commentTexts}>
              <Text style={styles.commentUser}>Larry Little</Text>
              <Text style={styles.commentText}>Lorem ipsum dolor sit amet, consectetuer </Text>
              <SmallIconTag style={{ color: "#4a4a4a" }} image={require('./statics/icon-comment.png')} text='Reply comment' />
            </View>
            <Text style={styles.commentDate}>1hr ago</Text>
          </View>
          <View style={[styles.comment, styles.withDivider]}>
            <Image style={styles.commentImage} source={require('./statics/icon-photo1.png')} />
            <View style={styles.commentTexts}>
              <Text style={styles.commentUser}>Larry Little</Text>
              <Text style={styles.commentText}>Lorem ipsum dolor sit amet, consectetuer </Text>
              <SmallIconTag style={{ color: "#4a4a4a" }} image={require('./statics/icon-comment.png')} text='Reply comment' />
              <View style={[styles.comment, styles.subComment]}>
                <Image style={styles.commentImage} source={require('./statics/icon-photo1.png')} />
                <View style={styles.commentTexts}>
                  <Text style={styles.commentUser}>Larry Little</Text>
                  <Text style={styles.commentText}>Lorem ipsum dolor sit amet, consectetuer </Text>
                  <SmallIconTag style={{ color: "#4a4a4a" }} image={require('./statics/icon-comment.png')} text='Reply comment' />
                </View>
              </View>
            </View>
            <Text style={styles.commentDate}>1hr ago</Text>
          </View>
          <View style={[styles.comment, styles.withDivider]}>
            <Image style={styles.commentImage} source={require('./statics/icon-photo1.png')} />
            <View style={styles.commentTexts}>
              <Text style={styles.commentUser}>Larry Little</Text>
              <Text style={styles.commentText}>Lorem ipsum dolor sit amet, consectetuer </Text>
              <SmallIconTag style={{ color: "#4a4a4a" }} image={require('./statics/icon-comment.png')} text='Reply comment' />
            </View>
            <Text style={styles.commentDate}>1hr ago</Text>
          </View>
        </View>
      </ScrollView>
      { showDrawer && <BottomDrawerList /> }
    </View>
  )
}

export default ThreadPhotoDetail