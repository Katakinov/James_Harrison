import React from "react";
import Profile from "../centerPartComponents/Profile";
import Layout from "../layout/Layout.js";
import "./ProfilePages.css";

const ProfilePages = () => {
    return (
        <div className="profilePages">
            <Layout>
                <Profile/>
            </Layout>
        </div>
    )
}

export default ProfilePages;