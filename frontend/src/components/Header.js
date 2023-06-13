import React from "react"
import { Link} from "react-router-dom";

export default function Header(){


    return (
            <div className="header">
                <div className="header--intro">
                <img src={require("../images/logo.jpg")} className="logo" alt="App logo" />
                <h1 className="nav--header"><a href="/">Traditional Medicinal Herbs</a></h1>
                </div>
                <div className="additions" >

                    <ul className="additions--ul">
                    <li className="additions--li"><Link to="/medicine">Medicine</Link></li>
                    <li className="additions--li"><Link to="/contact">Contact</Link></li>
                    </ul>

                    
                    <Link to="/searchResults">
                        <button type="submit" className="signupBtn">Search...</button>
                    </Link>
                    
                 
                    <button className="signupBtn"><Link to="/signup">SIGN UP</Link></button>
                </div>
            </div>

    )
}