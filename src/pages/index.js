import { Link } from "gatsby";
import React from "react"
import Dashboard from "./dashboard";

function Main() {
    return (
        <div><p>hello</p>
        <Link to='/dashboard'>dash</Link>
        <Link to='/blog'>blog</Link></div>
    )
}

export default Main;