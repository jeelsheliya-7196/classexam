import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>npm 
            </button>
            {/* <NavBar/> */}
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                  <NavLink className="nav-link active"   to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/view">View data</NavLink>
                  <NavLink className="nav-link" to="/from">From</NavLink>
                  </div>
              </div>
              </div>
        </nav>
    </div>
  )
}

export default Header
