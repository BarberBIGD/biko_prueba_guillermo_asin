import React from "react";
import logo from "../Recursos/logo.svg"
import { useLocation, Link } from "react-router-dom";

const Header = () => {

    const location = useLocation();
    const breadcrumb = location.pathname;

    return (
        <div className="row">
            <div className="row">
                <div className="col-md-1">
                    <img src={logo} />
                </div>
                <div className="col-md-4 d-flex justify-content-start align-items-center">
                    <h3>Floristeria Guillermo Asín</h3>
                </div>
            </div>
            <div className="row pt-2">
                <p className="offset-md-1">
                    <Link to="/">Home</Link>
                    {breadcrumb}
                </p>
            </div>
        </div>
    )
}

export default Header;