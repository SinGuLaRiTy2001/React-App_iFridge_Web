import React from 'react'
import "./header.css"
import {Link} from "react-router-dom"
import {nav} from "../../Data/Data";


const Header = () => {
    return (
        <>

            <header>

                <div className='container flex'>
                    <div className='logo'>
                        <img src='./image/logo.png' width="150" alt='' />
                    </div>
                    <div className='nav'>
                        <ul className='flex'>
                            {nav.map((list, index)=>(
                                <li key={index}>
                                    <Link to={list.path}>{list.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='button flex'>
                        <div className='dropdown'>
                            <button className='dropbtn'>
                                <i className='fas fa fa-bars'></i> My Friends
                            </button>
                            <div className='dropdown-content'>
                                <p>Ayla Espelindo</p>
                                <p>Amy Rosewood</p>
                                <p>Vittoria Ferralo</p>
                                <p>Rena Demara</p>
                                <p>Jack Olenyeva</p>
                                <p>Daisy Clover</p>
                                <p>Elle Edition</p>
                                <p>Laurel Valenra</p>
                            </div>
                        </div>
                        {/*<h4>
                            <span>2</span> My List
                        </h4>*/}
                        <button className='btn1'>
                            <i className='fas fa fa-sign-out'></i> Sign Out
                        </button>
                    </div>
                    <div className='toggle'>

                        <button>
                            <i className='fas fa fa-plus'></i>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header