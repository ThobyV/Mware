import { h } from 'hyperapp'
import { Link, Route,location, Switch } from "@hyperapp/router"


import { App } from './views/containers/App'


export const view = ( state, actions ) => 

<div>

<Switch>    
    <Route path="/" render={ App } />       
  </Switch>

</div>

