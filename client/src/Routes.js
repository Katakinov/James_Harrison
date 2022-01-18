import React from "react";
import { Routes, Route} from "react-router-dom";
import AuthPages from "./pages/AuthPages";
import MainPages from "./pages/MainPages";
import ProfilePages from "./pages/ProfilePages";
import RegPages from "./pages/RegPages";
import StationsPages from "./pages/StationsPages";
import CalendarPages from "./pages/CalendarPages";
import AboutDonationPages from "./pages/AboutDonationPages";

export const useRoutesCustom = isAuthenticated => {
    if (isAuthenticated) {
        return(
            <Routes>
                <Route path="/" exact element={<MainPages/>}/>
                <Route path="/main" exact element={<MainPages/>}/>
                <Route path="/profile" exact element={<ProfilePages/>}/>
                <Route path="/login" exact element={<AuthPages/>}/>
                <Route path="/register" exact element={<RegPages/>}/>
                <Route path="/stations" exact element={<StationsPages/>}/>
                <Route path="/calendar" exact element={<CalendarPages/>}/>
                <Route path="/aboutdonation" exact element={<AboutDonationPages/>}/>
            </Routes>
        );
    }
    else{
        return(
            //нужно сделать роут заглушку для "/profile", чтобы выводилась страница, которая умеет посылать на)
            <Routes>
                <Route path="/" exact element={<AuthPages/>}/>
                <Route path="/login" exact element={<AuthPages/>}/>
                <Route path="/register" exact element={<RegPages/>}/>
                <Route path="/main" exact element={<MainPages/>}/>
                <Route path="/stations" exact element={<StationsPages/>}/>
                <Route path="/calendar" exact element={<CalendarPages/>}/>
                <Route path="/aboutdonation" exact element={<AboutDonationPages/>}/>
                <Route path="/Profile" exact element={<AuthPages/>}/>
            </Routes>
        );
    }
}