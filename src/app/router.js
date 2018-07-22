import React from 'react'
import PropTypes from 'prop-types'
import {Switch, Route, withRouter} from 'react-router-native'

import {
  SignIn,
  SignUp,
  WelcomeMessage,
  OnBoarding,
  ThreadsList,
  ThreadsDetail,
  ThreadsEditName,
  ThreadsEditFriends,
  UserProfile
} from '../views'

const App = props => {
  const { history } = props

  return (
    <Switch>
      {/*<Route render={() => <SignIn/>}/>*/}
      {/*<Route render={() => <WelcomeMessage/>}/>*/}
      {/*<Route render={() => <ThreadsList />}/>*/}
      {/*<Route render={() => <ThreadsDetail />}/>*/}
      {/*<Route render={() => <ThreadsEditName />}/>*/}
      {/*<Route render={() => <ThreadsEditFriends />}/>*/}
      <Route render={() => <UserProfile />}/>
      {/*<Route render={() => <OnBoarding onSubmit={() => history.push('/signUp')}/>} />}/>*/}
      {/*<Route render={() => <SignUp/>}/>*/}
    </Switch>
  )
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default withRouter(App)
