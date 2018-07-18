import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: width,
    bottom: 0,
    position: 'relative'
  }
})
