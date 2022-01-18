import React from "react";
import AboutDonation from "../centerPartComponents/AboutDonation";
import Layout from "../layout/Layout.js";
import "./AboutDonationPages.css"

const AboutDonationPages = () => {
    return(
        <div className="AboutDonationPages">
            <Layout>
                <AboutDonation/>
            </Layout>
        </div>
    );
}

export default AboutDonationPages;