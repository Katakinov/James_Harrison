import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import "./Layout.css";


function Layout(props) {
    return(
        <div className="layout">
            <NavBar/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Layout;