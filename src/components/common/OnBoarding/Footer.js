import React from 'react'
import PropTypes from 'prop-types'
import {Text, View} from 'react-native'

import pagePropType from '../../../util/pagePropType'
import styles from './styles'

const Footer = props => {
  const {skipTitle, nextTitle, onPrevious, onNext, currentPageIndex, onSubmit, pages} = props

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.skipLink} onPress={() => onPrevious()}>{skipTitle}</Text>
      <View style={styles.dotsContainer}>
        {pages.map((page, i) => (
          <View key={i} style={
            page.dotColor && page.order === currentPageIndex
              ? [styles.dotActive, {backgroundColor: page.dotColor}]
              : styles.dot
          }
          />
        ))}

      </View>
      {currentPageIndex + 1 !== pages.length
        ? <Text style={styles.nextLink} onPress={() => onNext()}>{nextTitle}</Text>
        : <Text style={styles.nextLink} onPress={() => onSubmit()}>Done</Text>
      }
    </View>
  )
}

Footer.propTypes = {
  currentPageIndex: PropTypes.number.isRequired,
  previousTitle: PropTypes.string,
  nextTitle: PropTypes.string,
  onNext: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(pagePropType).isRequired
}

Footer.defaultProps = {
  skipTitle: 'Skip',
  nextTitle: 'Next'
}

export default Footer
