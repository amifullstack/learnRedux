import React, { Component } from 'react';
import { BrowserRouter as Router,
   Route,
   Link,
   Switch,   
    } from 'react-router-dom';
import {browserHistory, IndexRoute} from 'react-router'
import HomePage from './Components/Home/HomePage'
import Grid from './Components/Grid/Grid';
import Single from './Components/Single/Single';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router >
        <div>
          <h1>Minimal React Boilerplate!</h1>

          <Switch>
            {/* <Route exact path='/' component={HomePage} /> */}
            <Route exact path ='/' component={Grid} />
            <Route path='/view/:postId' component={Single} />          
            
            Add all route above this line
            <Route component = {NotFound} />
          </Switch>
        </div>        
      </Router>
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