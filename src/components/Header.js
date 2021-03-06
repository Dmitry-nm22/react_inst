import React, {Component} from 'react';
import logo from "../logo.svg"
import '../index.css'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className = 'container h-flex'>
                    <Link  to='/' href="#" className="logo">
                        <img src={logo} alt='logo'/>
                    </Link>
                    <nav className='links'>
                        <ul>
                            <li>
                                <Link to='/' href='#' className='menu__links'>Лента</Link>
                            </li>
                            <li>
                                <Link to='/profile/' href='#' className='menu__links'>Профиль</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}