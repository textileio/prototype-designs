import { Dimensions, StyleSheet } from 'react-native'
const { width } = Dimensions.get('window')

export const gridStyles = photos => ({
  grid: {
    container: {
      maxHeight: 20 * photos.length
    },
    photo: (width - 25) / 4
  },
  list: {
    container: {},
    photo: width - 10
  }
})

export default StyleSheet.create({
  photoList: {
    flexWrap: 'wrap'
  },
  photo: {
    marginLeft: 5,
    marginBottom: 5,
    resizeMode: 'contain',
    backgroundColor: 'red',
  },
})