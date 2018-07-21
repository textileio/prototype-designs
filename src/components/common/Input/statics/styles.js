import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  textStyle: {
    fontFamily: 'BentonSans',
    fontSize: 16,
    color: '#6d6d6d'
  },
  inputWrapper: {
    width: '100%',
    //padding: 0
  },
  labelText: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  underlineWrapper: {
    height: 1,
    alignItems: 'center'
  },
  wrapper: {
    height: 72,
    paddingTop: 30,
    paddingBottom: 7,
    position: 'relative'
  },
  denseWrapper: {
    height: 60,
    paddingTop: 28,
    paddingBottom: 4,
    position: 'relative'
  },
  textInput: {
    fontSize: 16,
    height: 34,
    lineHeight: 34
  },
  denseTextInput: {
    fontSize: 13,
    height: 27,
    lineHeight: 24,
    paddingBottom: 3
  }
})
