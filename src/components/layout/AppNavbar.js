import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AppNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-info md-4">
                <div className ="container">
                    <Link to="/" to className="navbar-brand ml-2 mx-auto"> ClientPanel</Link>
                    <button
                     className="navbar-toggler"
                     type="button" 
                     data-toggle="collapse" 
                     data-target="#navbarMain">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mx-auto">
                                 <Link to="/" className="nav-link"> Dashboard </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>   
        )
    }
}
