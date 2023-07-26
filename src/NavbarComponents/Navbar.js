import React from 'react';
import logo from './vihatha.PNG';
import './Navbar.css'

const NavBar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary random">
    <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src={logo} alt="" width="50" height="40" class="d-inline-block align-text-top"/>
       VIHATHA
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse random-2 justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About Us
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/VisionPage">Vision</a></li>
              <li><a class="dropdown-item" href="/OurStory">Our Story </a></li>
              <li><a class="dropdown-item" href="/OurTeam">Our Team</a></li>
              <li><a class="dropdown-item" href="/KeyFocusAreas">Key Focus Areas</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle programs" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Programs
            </a>
            <ul class="dropdown-menu programs-dropdown">
              <li><a class="dropdown-item" href="BharatYatra">Anubhav bharat yatra</a></li>
              <li><a class="dropdown-item" href="/SelpProgram">Skill, Experience and Leadership</a></li>
              <li><a class="dropdown-item" href="/MedhaswiProg">Medhaswi Scholarship</a></li>
              <li><a class="dropdown-item" href="/WellBeingProg">Wellbeing Boot camps</a></li>
              <li><a class="dropdown-item" href="/KitchenProgram">Kitchen Garden</a></li>
              <li><a class="dropdown-item" href="/NaniProgram">Nature and Nutrition Immersion</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Blogs
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/BlogOne">Blog 1</a></li>
              <li><a class="dropdown-item" href="/BlogTwo">Blog 2 </a></li>
              <li><a class="dropdown-item" href="/BlogThree">Blog 3</a></li>
              <li><a class="dropdown-item" href="/BlogFour">Blog 4</a></li>              
              <li><a class="dropdown-item" href="/BlogFive">Blog 5</a></li>
              <li><a class="dropdown-item" href="/BlogSix">Blog 6</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Support">Support</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
