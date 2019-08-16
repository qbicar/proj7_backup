import React from 'react'
import { NavLink } from 'react-router-dom'

const Navi = (props) => {
    return (

            <ul className="main-nav">
                <nav>
                    <ul>
                    <li><NavLink exact to="/" onClick={() => {
                        props.performSearch()
                    }}>Home</NavLink></li>
                        <li><NavLink to="/wedding" onClick={() => {
                            props.performSearch("wedding")
                        }}>Wedding</NavLink></li>
                    <li><NavLink to="/lions" onClick={() => {
                        props.performSearch("lions")
                    }} >Lions</NavLink></li>
                    <li><NavLink to="/flowers" onClick={() => {
                        props.performSearch("flowers")
                    }}>Flowers</NavLink></li>
                    </ul>
                </nav>
            </ul>
             
            )
        }
        
        export default Navi
        //readme to say need to create a api key and put in a config.js file
        //then npm install
        //npm start
        
