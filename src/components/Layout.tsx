import * as React from "react";
import {Link, RouteChildrenProps} from 'react-router-dom';

const Layout = ({children}) => {
    return(

        <div className="navOptions">
            <nav>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/About'>About Us</Link></li>
                <li><Link to='/Services'>Services</Link></li>
                <li><Link to='/Contacts'>Contact Us</Link></li>
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;