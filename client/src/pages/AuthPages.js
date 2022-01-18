import React from "react";
import "./AuthPages.css";
import {NavLink} from "react-router-dom";

const AuthPages = () => {
    return (
        <div className="authPages">
            <div className="containerForms">
                <img src="https://gbuzspk.ru/images/news/2021/03/16/pelikan/pelikan_001.jpg" className="donorIconAuth" alt="symbol"/>
                <div className="content">
                    <div className="formTitle">Авторизация</div>
                    <div className="formInput">
                        <input placeholder={"Эл. почта"} className="secondLine"/>
                        <input placeholder={"Пароль"} className="passLine"/>
                    </div>
                    <div className="formsUnder">
                        <NavLink to="passwordchange" className="forgotButton">Забыли пароль?</NavLink>
                        <NavLink /*onClick={sendTweet}*/ to="/profile" type="submit" className="confirmButton">Подтвердить</NavLink>
                    </div>
                    <NavLink to="/register" className="regButton">Нет аккаунта?</NavLink>
                </div>
            </div>
            
        </div>
    )
}

export default AuthPages;