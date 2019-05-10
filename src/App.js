import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './redux'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import Tab from './components/Tab'

import Home from './containers/Homepage'
import Introduce from './containers/Introduce'
import About from './containers/Aboutpage'

class Box extends Component{
  render() {
    return (
        <main>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/introduce'} component={Introduce}/>
            </Switch>
        </main>
    )
  }
}

export default function() {
  return (
      <Provider store={store}>
          <Router>
              <Tab />
              <Box />
          </Router>
      </Provider>

  )
}
