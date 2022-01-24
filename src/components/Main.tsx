import React, {FC} from "react";
import Home from "./Home";
import Navigation from "./Navigation";
import '../styles/main.css';
import Fotter from "./Fotter";

const Main: FC = () => {
    return(
        <div className="Main">
            <div className="header">
                <Navigation />
            </div>
            <div className="body">
                <Home />
            </div>
            <div className="fotter">
                <Fotter />
            </div>
        </div>
        
    );
}

export default Main;