import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  bottomBar: {
    width: '100%',
    borderTopColor: '#ECEDEE',
    borderTopWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bottomBarIcon: {
    height: 24,
    width: 24,
    paddingHorizontal: 50,
    paddingVertical: 14
  },
  bottomBarIconActive: {
    borderBottomColor: '#2625FF',
    borderBottomWidth: 2
  }
})