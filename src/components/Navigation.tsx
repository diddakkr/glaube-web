import React,{FC} from "react";
import logo from '../logo.svg';
import '../styles/navigation.css';
import { Link } from 'react-router-dom';

const Navigation: FC = () =>{
    return(
        <div className="navMain">
        <div className="logo">
            <img src={logo} className="App-logo" alt="logo" /> 
        </div>
        <div className="brand">
            <h1>GCL</h1>
        </div>
        <div className="navOptions">
            <nav>
            <Link to='/Home'>Home</Link>
            <Link to='/About'>About Us</Link>
            <Link to='/Services'>Services</Link>
            <Link to='/Contacts'>Contact Us</Link>
            </nav>
        </div>
        </div>
    );
}

export default Navigation;