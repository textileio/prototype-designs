import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#FAFCFE',
    flex: 1,
  },
  contentContainer: {
    paddingTop: 25,
    paddingHorizontal: 15
  },
  emptyStateContainer: {
    paddingTop: 75,
    alignItems: 'center'
  },
  emptyStateImage: {
    width: 159,
    height: 146,
    marginBottom: 16
  },
  emptyStateText: {
    fontFamily: "BentonSans",
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    paddingHorizontal: 52,
    marginBottom: 24
  }
})