import React from 'react';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary random">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="#" alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
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
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">What we advocate</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Programs
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Nature Immersion Program</a></li>
              <li><a class="dropdown-item" href="#">Well Being Boot Camp </a></li>
              <li><a class="dropdown-item" href="#">Medhaswi - Scholarship Program</a></li>
              <li><a class="dropdown-item" href="#">Rural STEM program </a></li>
              <li><a class="dropdown-item" href="#">Library & Activity Center</a></li>
              <li><a class="dropdown-item" href="#">Govt school support program</a></li>
              <li><a class="dropdown-item" href="#">Sustainability Projects</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Collaborate</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Support</a>
          </li>
        </ul>
        {/* <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
