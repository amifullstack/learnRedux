import React, { Component } from 'react';
import { BrowserRouter as Router,
   Route,
   Link,
   Switch,   
    } from 'react-router-dom';
import {browserHistory, IndexRoute} from 'react-router'
import { Provider } from 'react-redux';

// Components
import HomePage from './Components/Home/HomePage'
import Grid from './Components/Grid/Grid';
import Single from './Components/Single/Single';
import Store from './Store/index';

// App
import StoreApp from './Components/StoreApp'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Provider store={Store}>
      <Router >
        <div>
          <h1>Minimal React Boilerplate!</h1>

          <Switch>
            <Route exact path='/' component={StoreApp} />
            <Route path ='/g' component={Grid} />
            <Route path='/view/:postId' component={Single} />          
            
            Add all route above this line
            <Route component = {NotFound} />
          </Switch>
        </div>        
      </Router>
      </Provider>
    )
  }
}

const NotFound = () => {
  return(
    <div>
      <h1>Hold on..404 Here, Page you looking is NOT FOUND </h1>
    </div>
  )
}
export default App;