import { Link, useMatch, useResolvedPath } from "react-router-dom"
import  App  from "./App"
import { useState } from "react";
import { isLoggedIn, logIn, logOut } from './login'



export default function Navbar() {

    return <nav className="nav">
        <Link to="/home" className="site-title">
            Authentisite
        </Link>
        <ul>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/profile">Profile</CustomLink>
            
        </ul>
    </nav>
}



function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}