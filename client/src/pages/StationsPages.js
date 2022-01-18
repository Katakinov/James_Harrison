import React from "react";
import Stations from "../centerPartComponents/Stations.js";
import Layout from "../layout/Layout.js";
import "./StationsPages.css";

const StationsPages = () => {
    return (
        <div className="StationsPages">
            <Layout>
                <Stations/>
            </Layout>
        </div>
    )
}

export default StationsPages ;