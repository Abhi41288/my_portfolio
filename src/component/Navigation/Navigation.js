import React from 'react';
import { NavLink } from 'react-router-dom';




const Navigation = () => {
    return (
        <header>
            <nav>
                <ul style={{
                    display: "flex",
                    flexDirection: "row",
                    listStyle: "none"
                }}>
                    <li>
                        <NavLink to="/" exact style={{ marginRight: "10px" }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" exact >About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
