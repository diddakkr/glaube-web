import React,{FC} from "react";
import logo from '../logo.svg';
import '../styles/navigation.css'

const Navigation: FC = () =>{
    return(
        <div className="logo">
            <img src={logo} className="App-logo" alt="logo" /> 
        </div>
    );
}

export default Navigation;