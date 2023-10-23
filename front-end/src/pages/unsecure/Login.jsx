import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { request, setAuthToken, setUserLogin } from "../../fetch/fetch";
import React from "react";
import "./css/register.css"

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    function onSubmit(e) {
        e.preventDefault();
        const isInput = [email, password].filter(elem => elem === null).length === 0;
        if (isInput) {
            const url = "/api/auth/login";
            e.preventDefault();
            request("POST", url, { login: email, password: password })
                .then((response) => {
                    setUserLogin(response.data.login)
                    setAuthToken(response.data.token);
                    navigate("/app/profile")
                })
                .catch((error) => {
                    console.log(error)
                    //navigate("/error")
                });

        }
    }


    function onChangeLogin(e) {
        e.preventDefault();
        navigate('/')
    }


    return (<div>
        <button className='changeLogin' onClick={(e) => onChangeLogin(e)}>
            <p className='left'>Not a User?</p> <br />
            <p className='right'>Click anywhere out of the box</p>
        </button>
        <form id="register">
            <h2>Welcome back!</h2>

            <div className="input-container">
                <i className="fa fa-envelope icon" style={{ color: "#f75990" }}>&#10148;</i>
                <input className="input-field" id='input' type="text" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} />
            </div>


            <div class="input-container">
                <i className="fa fa-key icon" style={{ color: "#f75990" }}>&#10148;</i>
                <input id='input' className="input-field" type="password" placeholder="Password" name="psw" onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="btn" onClick={(e) => onSubmit(e)}>Login</button>

        </form >
    </div>)
}