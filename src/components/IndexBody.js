import { h } from 'hyperapp'
import { Link, Route, location } from "@hyperapp/router"

import {NavBar} from './NavBar'


export const IndexBody = ()  =>

<div>

<section class="hero is-medium svgy">

<NavBar/>

 <div class="hero-body"> 
 <div class="container has-text-left">
 <div class="columns">
 <div class="column is-6">

 <h1 class="title is-1 has-text-white">
 Let's help you <br/>
 launch your dream <br/>
 product.
 </h1> 

<br/> 

 <h1 class="subtitle is-4 has-text-white">
From the stage where there is a spark of Idea
to the stage where the product becomes a reality,
we're a team that's focused at creating that reality.
 </h1>

<br/>
<a class="button is-medium is-warning"><p class="">GET STARTED</p> 
<img src="/Mware/res/svg/arrow-svg.svg"/>

 </a>


 </div>
 </div>
 </div>
 </div> 
 <br/>
 </section>


<section class="hero is-medium has-background-white-bis">
<div class="hero-body">
<div class="container">
<div class="icon-container has-text-centered">
<img src="/Mware/res/svg/question-svg.svg"/>
</div>
<br/>
<div class="columns">
<div class="column is-5 is-offset-1">
<h3 class="subtitle is-3 has-text-centered">Who are we</h3> 


 <h5 class="is-p subtitle is-5 has-text-centered">launch your dream product
We're a team of experienced and passionate developers and designers with the skill 
and ability to take responsibily of technical aspects of your products
 </h5>

</div>

<div class="column is-6">
<div class="icon-container has-text-centered">
<img src="/Mware/res/svg/illustration-svg.svg" /> 
</div>
<br/> 
</div>
</div>


<div class="box has-background-white has-shadow">

<h3 class="subtitle is-3 has-text-centered">What we do</h3> 
<br/> 

<div class="columns">

<div class="column is-5 is-offset-1">


<div class="icon-container has-text-centered">
<img src="/Mware/res/svg/design-svg.svg"/>
</div>

<p class="subtitle has-text-centered"><b>Design</b> </p>


<p class="is-p has-text-centered">
We're a team of experienced and passionate developers and designers with the skill 
and ability to take responsibily of technical aspects of your products
</p>
 
</div>

<div class="column is-5">
<div class="icon-container has-text-centered">
<img src="/Mware/res/svg/development-svg.svg" />
</div>
<p class="subtitle has-text-centered"><b>Development</b> </p>

<p class="is-p has-text-centered">launch your dream product
We're a team of experienced and passionate developers and designers with the skill 
and ability to take responsibily of technical aspects of your products
</p>
</div>


</div>


<div class="columns">

<div class="column is-5 is-offset-1">
<div class="icon-container has-text-centered">
<img src="/Mware/res/svg/deploy-svg.svg"/>
</div>
<p class="subtitle has-text-centered"><b>Deploy</b> </p>

<p class="is-p has-text-centered">
We're a team of experienced and passionate developers and designers with the skill 
and ability to take responsibily of technical aspects of your products
 </p>
</div>

<div class="column is-5 is-offset-1">
<div class="icon-container has-text-centered">
<img src="/Mware/res/svg/support-svg.svg" /> 
</div>
<p class="subtitle has-text-centered"><b>Support</b> </p>

<p class="is-p has-text-centered">launch your dream product
We're a team of experienced and passionate developers and designers with the skill 
and ability to take responsibily of technical aspects of your products
</p>
</div>

</div>

</div>

<h3 class="subtitle is-3 has-text-centered is-p">Some of our Toolset</h3> 

<div class="columns is-mobile">

<div class="column">
<div class="icon-container">
<img src="/Mware/res/svg/node-svg.svg" /> 
</div>
</div>


<div class="column">
<div class="icon-container">
<img src="/Mware/res/svg/php-svg.svg" /> 
</div>
</div>


<div class="column">
<div class="icon-container">
<img src="/Mware/res/svg/react-svg.svg" /> 
</div>
</div>


<div class="column">
<div class="icon-container">
<img src="/Mware/res/svg/kotlin-svg.svg" /> 
</div>
</div>


<div class="column">
<div class="icon-container">
<img src="/Mware/res/svg/redis-svg.svg" /> 
</div>
</div>


<div class="column">
<div class="icon-container">
<img src="/Mware/res/svg/block-chain-svg.svg" /> 
</div>
</div>




</div>

</div>
</div>


<div class="hero-body">
<div class="container">

<div class="columns">

<div class="column is-5 is-offset-1">
<h4 class="title is-4 has-text-left is-p has-text-black">Case Study: Pops Wears</h4> 
<div class="zax">
<img src="/Mware/res/svg/case-study-1.jpg" /> 
</div></div>

<div class="column is-5">
<p class="has-text-left is-p has-text-black">A brief introduction of
the popular designer clothing e-commerce store we designed and shipped to production...
</p> 
<a class="button is-medium is-primary">read more...</a>
</div>

</div>

</div>
</div>
</section>

<section class="hero is-small has-background-warning">
<div class="hero-body">
<div class="container">

<h4 class="title is-4 has-text-centered is-p has-text-black">Ready to Get Started?</h4> 
<a class="button is-medium is-black is-outlined is-centered">Send Us A Message</a>


</div>
</div>
</section>


<footer class="footer has-background-primary">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Macroware</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </div>
</footer>

</div>
 