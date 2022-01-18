import React from "react";
import Main from "../centerPartComponents/Main";
import Layout from "../layout/Layout.js";
import "./MainPages.css"

const MainPages = () => {
    return(
        <div className="mainPages">
            <Layout>
                <Main/>
            </Layout>
        </div>
    );
}

export default MainPages;