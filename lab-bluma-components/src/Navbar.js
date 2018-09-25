import React from "react";

const Navbar = (props) => {
    return (
        <div>

          <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  

    <div className="navbar-end">
      <div className="navbar-item">

            <button class="button is-success">Log In</button>
      </div>

      <div className="navbar-item">
          <button class="button is-info">Signup</button>
            
        

      </div>
      </div>
</nav>
            
        </div>
    )
}

export default Navbar;