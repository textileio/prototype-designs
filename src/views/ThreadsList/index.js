import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import styles from './statics/styles'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import Button from '../../components/Button'

const ThreadsList = () => {
  const empty = false // TODO: Change to see different states

  const images1 = [
    {
      image: require('./statics/photo1.png')
    },
    {
      image: require('./statics/photo2.png')
    }
  ]

  const images2 = [
    {
      image: require('./statics/photo3.png')
    },
  ]

  const images3 = [
    {
      image: require('./statics/photo4.png')
    },
    {
      image: require('./statics/photo3.png')
    },
    {
      image: require('./statics/photo1.png')
    },
  ]

  const images4 = [
    {
      image: require('./statics/photo1.png')
    },
    {
      image: require('./statics/photo3.png')
    },
    {
      image: require('./statics/photo2.png')
    },
    {
      image: require('./statics/photo4.png')
    },
  ]

  return (
    <View style={styles.container}>
      <Toolbar />
      { empty && (
        <View style={styles.emptyStateContainer}>
          <Image style={styles.emptyStateImage} source={require('./statics/thread-empty-state.png')} />
          <Text style={styles.emptyStateText}>
            Start sharing your memories with
            friends and family with threads.
          </Text>
          <Button primary title='Create new thread' />
        </View>
      )}
      { !empty && (
        <ScrollView style={styles.contentContainer}>
          <View style={styles.threadCard}>
            <View style={styles.threadCardHeader}>
              <View style={styles.threadCardHeaderLeft}>
                <Text style={styles.threadCardTitle}>
                  Summer
                </Text>
                <View style={styles.threadCardHeaderLeftDetail}>
                  <Text style={styles.detailUpdateTime}>2 hours ago</Text>
                  <View style={styles.detail}>
                    <Image style={styles.detailImage} source={require('./statics/icon-user.png')} />
                    <Text style={styles.detailText}>12</Text>
                  </View>
                  <View style={styles.detail}>
                    <Image style={styles.detailImage} source={require('./statics/icon-comment.png')} />
                    <Text style={styles.detailText}>56</Text>
                  </View>
                </View>
              </View>
              <View style={styles.threadCardHeaderRight}>
                <Image source={require('./statics/photo.png')} />
              </View>
            </View>
            <View style={styles.threadCardBody}>
              <View style={cardImageContainerStyle(images2)}>
                { images2.map((item, i) => (
                  <Image key={i} style={cardImageStyle(images2, i)} source={item.image} />
                )) }
              </View>
            </View>
          </View>
          <View style={styles.threadCard}>
            <View style={styles.threadCardHeader}>
              <View style={styles.threadCardHeaderLeft}>
                <Text style={styles.threadCardTitle}>
                  Summer
                </Text>
                <View style={styles.threadCardHeaderLeftDetail}>
                  <Text style={styles.detailUpdateTime}>2 hours ago</Text>
                  <View style={styles.detail}>
                    <Image style={styles.detailImage} source={require('./statics/icon-user.png')} />
                    <Text style={styles.detailText}>12</Text>
                  </View>
                  <View style={styles.detail}>
                    <Image style={styles.detailImage} source={require('./statics/icon-comment.png')} />
                    <Text style={styles.detailText}>56</Text>
                  </View>
                </View>
              </View>
              <View style={styles.threadCardHeaderRight}>
                <Image source={require('./statics/photo.png')} />
              </View>
            </View>
            <View style={styles.threadCardBody}>
              <View style={cardImageContainerStyle(images1)}>
                { images1.map((item, i) => (
                  <Image key={i} style={cardImageStyle(images1, i)} source={item.image} />
                )) }
              </View>
            </View>
          </View>
          <View style={styles.threadCard}>
            <View style={styles.threadCardHeader}>
              <View style={styles.threadCardHeaderLeft}>
                <Text style={styles.threadCardTitle}>
                  Summer
                </Text>
                <View style={styles.threadCardHeaderLeftDetail}>
                  <Text style={styles.detailUpdateTime}>2 hours ago</Text>
                  <View style={styles.detail}>
                    <Image style={styles.detailImage} source={require('./statics/icon-user.png')} />
                    <Text style={styles.detailText}>12</Text>
                  </View>
                  <View style={styles.detail}>
                    <Image style={styles.detailImage} source={require('./statics/icon-comment.png')} />
                    <Text style={styles.detailText}>56</Text>
                  </View>
                </View>
              </View>
              <View style={styles.threadCardHeaderRight}>
                <Image source={require('./statics/photo.png')} />
              </View>
            </View>
            <View style={styles.threadCardBody}>
              <View style={cardImageContainerStyle(images3)}>
                { images3.map((item, i) => (
                  <Image key={i} style={cardImageStyle(images3, i)} source={item.image} />
                )) }
              </View>
            </View>
          </View>
          <View style={styles.threadCard}>
            <View style={styles.threadCardHeader}>
              <View style={styles.threadCardHeaderLeft}>
                <Text style={styles.threadCardTitle}>
                  Summer
                </Text>
                <View style={styles.threadCardHeaderLeftDetail}>
                  <Text style={styles.detailUpdateTime}>2 hours ago</Text>
                  <View style={styles.detail}>
                    <Image style={styles.detailImage} source={require('./statics/icon-user.png')} />
                    <Text style={styles.detailText}>12</Text>
                  </View>
                  <View style={styles.detail}>
                    <Image style={styles.detailImage} source={require('./statics/icon-comment.png')} />
                    <Text style={styles.detailText}>56</Text>
                  </View>
                </View>
              </View>
              <View style={styles.threadCardHeaderRight}>
                <Image source={require('./statics/photo.png')} />
              </View>
            </View>
            <View style={styles.threadCardBody}>
              <View style={cardImageContainerStyle(images4)}>
                { images4.length > 3 && (
                  <View style={{
                    width: '25%',
                    height: 82,
                    backgroundColor: 'rgba(38, 37 ,255, 0.5)',
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    zIndex: 10
                  }}>

                  </View>
                )}
                { images4.map((item, i) => (
                  <Image key={i} style={cardImageStyle(images4, i)} source={item.image} />
                )) }
              </View>
            </View>
          </View>
        </ScrollView>
      )}
      <BottomBar active='threads' />
    </View>
  )
}

const cardImageContainerStyle = (list) => {
  if (list.length <= 2) {
    return {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  } else {
    return {
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      alignContent: 'stretch',
      height: 170,
    }
  }
}

const cardImageStyle = (list, index) => {
  if (list.length === 1) {
    return {
      width: '100%',
      height: 170
    }
  }

  if (list.length === 2) {
    return {
      width: '49.5%',
      height: 170,
    }
  }

  if (list.length >= 3 && index === 0) {
    return {
      width: '74%',
      height: 170
    }
  }

  if (list.length >= 3 && index === 1) {
    return {
      width: '25%',
      height: 85,
      alignSelf: 'flex-end'
    }
  }

  if (list.length >= 3 && index === 2) {
    return {
      width: '25%',
      height: 82,
      alignSelf: 'flex-end'
    }
  }

  if (list.length >= 3 && index > 2) {
    return {
      display: 'none'
    }
  }
}

export default ThreadsList