import React from 'react'
import {Animated} from 'react-native'

import { FluidNavigator } from 'react-navigation-fluid-transitions'

import {
  SignIn,
  SignUp,
  ForgotPassword,
  UserOnBoarding,
  SyncPermissions,
  OnBoarding,
  ThreadsList,
  ThreadsDetail,
  ThreadsEditName,
  ThreadsEditFriends,
  ThreadCreate,
  ThreadEdit,
  ThreadAddPhoto,
  ThreadPhotoDetail,
  WalletList,
  WalletListSelected,
  PhotoDetail,
  PhotoDetailInfo,
  OtherUserProfile,
  UserProfile,
  UserProfileInvite,
  FeedList
} from '../views'

const RootStack = FluidNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword },
  UserOnBoarding: { screen: UserOnBoarding },
  SyncPermissions: { screen: SyncPermissions },
  OnBoarding: { screen: OnBoarding },
  ThreadsList: { screen: ThreadsList },
  ThreadsDetail: { screen: ThreadsDetail },
  ThreadsEditName: { screen: ThreadsEditName },
  ThreadsEditFriends: { screen: ThreadsEditFriends },
  ThreadCreate: { screen: ThreadCreate },
  ThreadEdit: { screen: ThreadEdit },
  ThreadAddPhoto: { screen: ThreadAddPhoto },
  ThreadPhotoDetail: { screen: ThreadPhotoDetail },
  WalletList: { screen: WalletList },
  WalletListSelected: { screen: WalletListSelected },
  PhotoDetail: { screen: PhotoDetail },
  PhotoDetailInfo: { screen: PhotoDetailInfo },
  OtherUserProfile: { screen: OtherUserProfile },
  UserProfile: { screen: UserProfile },
  UserProfileInvite: { screen: UserProfileInvite },
  FeedList: { screen: FeedList },
}, {
  duration: 1500,
  timing: Animated.timing,
  initialRouteName: 'WalletList',
  navigationOptions: {
    header: null
  },
})

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}