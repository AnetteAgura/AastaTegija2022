import React from "react";
import "./css/Header.css";



// 
// WORKING ON THIS FILE IN DIFFERNT PROJECT !
// 



function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li className="nav-img">
                        <a> 
                            <img src="#" alt="VOCO Facebook page"/>
                        </a>
                    </li>
                    <li className="nav-img">
                        <a> 
                            <img src="#" alt="VOCO TikTok page"/>
                        </a>
                    </li>
                    <li className="nav-img">
                        <a> 
                            <img src="#" alt="VOCO Instagram page"/>
                        </a>
                    </li>
                </ul>
                <ul className="nav-links">
                    <li className="nav-link">
                        <a>Kontakt</a>
                    </li>
                    <li className="nav-link">
                        <a>Tunniplaan</a>
                    </li>
                    <li className="nav-link">
                        <a>Siseveeb</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;