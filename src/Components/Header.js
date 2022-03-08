import React from 'react';

const Header = () => {
  return (
    <header>
        <div id="brand"><a href="/">Encryptopedia</a></div>
        <nav>
            <ul>
                <li><a href="/">Market</a></li>
                <li><a href="/news">News</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header