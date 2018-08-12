import React from 'react'

import { createStackNavigator } from 'react-navigation'

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

const RootStack = createStackNavigator({
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
  initialRouteName: 'WalletList',
  navigationOptions: {
    header: null
  }
})

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}