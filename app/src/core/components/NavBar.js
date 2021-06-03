import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-3">

                <div className="container">
                    <Link className="navbar-brand" to='/'>To Do App</Link>
                    
                    <button className="navbar-toggler" type="button" onClick={() => setCollapsed(prev => !prev)} data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse " + (collapsed ? '' : 'show')} >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/users'>USERS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/tasks'>TASKS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/kanbanboard'>KANBAN BOARD</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/sprints'>SPRINTS</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink className='d-flex' to='/register'>REGISTER</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar