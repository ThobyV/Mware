import { h } from 'hyperapp'

import { Link, Route, location } from "@hyperapp/router"

export const NavBar =  () => (
    
<nav class="navbar is-transparent has-padding" role="navigation" aria-label="main navigation">

<div class="navbar-brand">

    <a class="navbar-item" href=""> 

    <img 
    src="/docs/res/svg/mware-logo.svg" 
    alt="macroware_logo"
    height="16"
    width="171"
    />

    </a>
  
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true has-background-white"></span>
      <span aria-hidden="true has-background-white"></span>
      <span aria-hidden="true has-background-white"></span>
    </a>

</div>

  <div id="navbar-menu-id" class="navbar-menu">
    <div class="navbar-end">

      <a class="navbar-item has-text-white" href="http://localhost:4000/">
        Our Vision
      </a>
      <a class="navbar-item has-text-white" href="http://localhost:4000/">
        Portfolio
      </a>
      <a class="navbar-item has-text-white" href="http://localhost:4000/">
        Get Started
      </a>

      </div>
    </div>

</nav>

 )