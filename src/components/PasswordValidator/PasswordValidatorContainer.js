import React from 'react'
import PasswordValidator from './PasswordValidator'

class PasswordValidatorContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      password: '',
      condition: 'Weak'
    }
  }

  componentWillUpdate (oldProps) {
    if (oldProps !== this.props) {
      this.onValidate(this.props.password)
    }
  }

  onValidate = text => {
    if (!text.includes('01234556789')) {
      return this.setState({
        condition: 'Weak'
      })
    }

    if (!text.includes('!@#$%^&*()')) {
      return this.setState({
        condition: 'Normal'
      })
    }

    this.setState({
      condition: 'Strong'
    })
  }

  render () {
    return (
      <PasswordValidator
        {...this.props}
        text={this.state.condition}
        onValidate={this.onValidate}
      />
    )
  }
}

export default PasswordValidatorContainer