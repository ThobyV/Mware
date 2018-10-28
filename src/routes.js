import { h } from 'hyperapp'
import { Link, Route,location, Switch } from "@hyperapp/router"


import { App } from './views/containers/App'

const About = () => <h2>About</h2>

export const view = ( state, actions ) => 

<div>

<Switch>    
    <Route path="/Mware/" render={ App } />       
  </Switch>

</div>

