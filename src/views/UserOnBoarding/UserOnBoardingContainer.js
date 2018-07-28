import React from 'react'
import UserOnBoarding from './UserOnBoarding'

class UserOnBoardingContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  onChange = ({ name, value }) => {
    this.setState({
      [name]: value
    })
  }

  render () {
    const { username, password } = this.state

    return (
      <UserOnBoarding
        {...this.props}
        username={username}
        password={password}
        onChange={this.onChange}
      />
    )
  }
}

export default UserOnBoardingContainer