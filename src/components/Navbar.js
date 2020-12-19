import React, {useState} from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
        <nav class="navbar">
          <div class="navbar-container">
            <Link to="/" className="navbar-logo">
              TRVL <i class="fab fa-typo3"/>
            </Link>
          </div>
        </nav>
        </>
    )
}

export default Navbar
