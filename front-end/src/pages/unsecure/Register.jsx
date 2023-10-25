import { useNavigate } from "react-router-dom";
import { SelectGender } from './components/SelectGender';
import { InputPersonalData } from './components/inputPersonalData';
import { useState, useEffect } from "react"
import { request, setAuthToken, setUserLogin } from "../../fetch/fetch";
import React from "react";
import "./css/register.css"
import { passwordChecker, emailChecker, nameChecker, nameTik, passwordTik, emailTik } from "../../logic/loginVerifier"

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [gender, setGender] = useState("male");
    const [genders] = useState(["male", "female", "other"]);
    const [nametik, setNametik] = useState(false);
    const [emailtik, setEmailtik] = useState(false);
    const [passwordtik, setPasswordTik] = useState(false);

    useEffect(() => {
        name && nameTik(name) ? setNametik(true) : setNametik(false);
        email && emailTik(email) ? setEmailtik(true) : setEmailtik(false);
        password && passwordTik(password) ? setPasswordTik(true) : setPasswordTik(false);
    }, [name, email, password])

    function onSubmit(e) {
        e.preventDefault();
        const isInput = [name, email, password, gender].filter(elem => elem === null).length === 0;

        if (isInput && passwordChecker(password) && emailChecker(email) && nameChecker(name)) {
            request("POST", "/api/auth/register", {
                gender: gender,
                username: name,
                login: email,
                password: password,
            })
                .then((response) => {
                    setUserLogin(response.data.login)
                    setAuthToken(response.data.token);
                    navigate("/app/profile")
                }).catch((error) => {
                    //navigate("/error");
                });
        }
    }

    function onChangeLogin(e) {
        e.preventDefault();
        navigate("/login")
    }

    return (
        <div>
            <button className='changeLogin' onClick={(e) => onChangeLogin(e)}>
                <p className='left'>Already a User?</p> <br />
                <p className='right'>Click anywhere out of the box</p>
            </button>
            <form id="register">
                <h2>Almost there...</h2>
                <SelectGender genders={genders} setGender={setGender} />

                <InputPersonalData nametik={nametik} setName={setName} emailtik={emailtik} setEmail={setEmail} passwordtik={passwordtik} setPassword={setPassword} />

                <button className="btn" onClick={(e) => onSubmit(e)}>Register</button>
            </form >
        </div>)

}