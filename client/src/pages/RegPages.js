import React from "react";
import "./RegPages.css";
import {NavLink} from "react-router-dom";

const RegPages = () => {
    return (
        <div className="regPages">
            <div className="regContainerForms">
                <img src="https://gbuzspk.ru/images/news/2021/03/16/pelikan/pelikan_001.jpg" className="regDonorIconAuth" alt="symbol"/>
                <div className="regContent">
                    <div className="regFormTitle">Регистрация</div>
                    <div className="regFormInput">
                        <input placeholder={"Имя"} className="passLine"/>
                        <input placeholder={"Фамилия"} className="passLine"/>
                        <input placeholder={"Эл. почта"} className="secondLine"/>
                        <input placeholder={"Пароль"} className="passLine"/>
                    </div>
                    <div className="regFormsUnder">
                        <NavLink /*onClick={sendTweet}*/ to="/profile" type="submit" className="regConfirmButton">Подтвердить</NavLink>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default RegPages;