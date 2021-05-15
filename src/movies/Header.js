import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <div className="header-container">

                    
                    <ul className="header-nav-links">
                        <li>
                            <Link to="/">Movies</Link>
                        </li>
                
                        <li>
                            <Link to="/watchlist">Watchlist</Link>
                        </li>
                        <li>
                            <Link to="/add" >+ Add</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    );
}

export default Header
