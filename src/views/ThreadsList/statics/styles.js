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
  },
  threadCard: {},
  threadCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 11,
  },
  threadCardHeaderLeft: {},
  threadCardHeaderRight: {},
  threadCardHeaderLeftDetail: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  threadCardTitle: {
    fontFamily: "BentonSans",
    fontSize: 30,
    marginBottom: 7
  },
  detailUpdateTime: {
    fontFamily: "BentonSans",
    fontSize: 12,
    color: "#9b9b9b",
    marginRight: 24
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 9,
  },
  detailImage: {
    height: 12,
    width: 12,
    marginRight: 2
  },
  detailText: {
    fontFamily: "BentonSans",
    fontSize: 12,
    lineHeight: 11,
  }
})