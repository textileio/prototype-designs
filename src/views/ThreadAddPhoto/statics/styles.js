import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#FAFCFE',
    flex: 1,
  },
  contentContainer: {
    paddingTop: 20,
  },
  toolbarLeft: {
    height: 16,
    width: 40
  },
  title: {
    fontFamily: "BentonSans",
    fontSize: 34,
    marginBottom: 17,
    paddingLeft: 14
  },
  photoList: {
    flexWrap: 'wrap'
  },
  photo: {
    maxWidth: (width - 25) / 4,
    maxHeight: 200,
    marginLeft: 5,
    marginBottom: 5,
    backgroundColor: 'red'
  }
})