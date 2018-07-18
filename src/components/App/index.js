import React from 'react'
import PropTypes from 'prop-types'
import {Switch, Route, withRouter} from 'react-router-native'

import {SignIn, SignUp, WelcomeMessage} from '..'
import {OnBoarding} from '../common'
import {pages} from '../../constants'

const App = ({history}) => (
  <Switch>
    <Route exact path="/signIn" render={() => <SignIn/>}/>
    <Route exact path="/welcome" render={() => <WelcomeMessage/>}/>
    <Route exact path="/signUp" render={() => <SignUp/>}/>
    <Route render={() => <OnBoarding pages={pages} onSubmit={() => history.push('/signUp')}/>}/>
  </Switch>
)


App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default withRouter(App)
