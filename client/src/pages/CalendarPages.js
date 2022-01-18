import React from "react";
import Calendar from "../centerPartComponents/Calendar";
import Layout from "../layout/Layout.js";
import "./CalendarPages.css"

const CalendarPages = () => {
    return(
        <div className="CalendarPages">
            <Layout>
                <Calendar/>
            </Layout>
        </div>
    );
}

export default CalendarPages;