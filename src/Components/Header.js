import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div id="brand"><Link to="/">ENCRYPTOPEDIA</Link></div>
        <nav>
            <ul>
                <li><Link to="/">Market</Link></li>
                <li><Link to="/videos">Videos</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header