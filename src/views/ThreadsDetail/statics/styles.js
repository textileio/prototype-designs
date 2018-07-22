import { StyleSheet } from 'react-native'
import { BentonSansBold } from '../../../util/fonts'

export default StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#FAFCFE',
    flex: 1,
  },
  contentContainer: {
    paddingTop: 22,
    paddingHorizontal: 24
  },
  toolbarLeft: {
    height: 16,
    width: 40
  },
  toolBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  toolbarIconPhoto: {
    height: 24,
    width: 27,
    marginRight: 16
  },
  toolbarIconMore: {
    height: 4,
    width: 16
  },
  toolbarTitle: {
    fontFamily: "BentonSans",
    fontSize: 30,
    marginBottom: 10
  },
  toolbarUserContainer: {
    flexDirection: 'row'
  },
  toolbarUserIcon: {
    height: 27,
    width: 27,
    marginRight: 10
  },
  card: {
    flexDirection: 'row',
    paddingBottom: 25,
    marginBottom: 9
  },
  cardLeft: {
    marginRight: 23,
    alignItems: 'center',
  },
  dateContainer: {
    backgroundColor: '#FAFCFE',
    paddingBottom: 15
  },
  userPhotosContainer: {
    flexDirection: 'row',
    marginBottom: 8
  },
  carLeftLine: {
    width: 1,
    height: '100%',
    position: 'absolute',
    zIndex: -10,
    flexDirection:'column',
    top: 20,
    paddingBottom: 25,
  },
  cardRight: {
  },
  month: {
    fontFamily: "BentonSans",
    fontSize: 12,
    color: "#9b9b9b",
    marginBottom: 9
  },
  day: {
    fontFamily: "BentonSans",
    fontSize: 30,
  },
  cardAction: {
    fontFamily: "BentonSans",
    fontSize: 14,
    marginBottom: 8,
  },
  cardImage: {
    marginBottom: 8,
    width: 280
  },
  cardActionName: {
    ...BentonSansBold(),
  }
})