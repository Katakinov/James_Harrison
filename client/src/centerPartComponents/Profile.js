import React, { useContext, useState } from "react";
import {useHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import "./Profile.css"

const Profile = () => {
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [donationType, setDonationType] = useState('')

    const pressHandler = async event => {
        if (event.key === "Enter") {
            try{
                const data = await request('/api/donation/generate', 'POST', {from: donationType}, {
                    Authorization: `Bearer ${auth.token}`
                })
                console.log(data)
            } catch (e) {}
        }
    }

    return(
        <div className="profile">
            <label htmlFor="donationType">Тип донации</label>
            <input 
                placeholder={"Введите тип донации"}
                id="donationType"
                type="text"
                value={donationType}
                onKeyPress={pressHandler}
                className="secondLine"
                onChange={e => setDonationType(e.target.value)}
            />
        </div>
    )
}

export default Profile;