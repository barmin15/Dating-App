import { AddInfo } from "./components/AddInfo";
import { useState } from "react";
import "./css/profile.css";
import ProfileCard from "./components/ProfileCard";

export default function Profile() {
    const [age, setAge] = useState(18);
    const [describe, setDescribe] = useState(null);
    const [word, setWord] = useState(null);
    const [isCard, setIsCard] = useState(true);
    const [gender, setGender] = useState("male");
    const [genders] = useState(["male", "female", "other"]);
    const [why, setWhy] = useState(null);
    const [name, setName] = useState("Ármin")

    function onSubmitChange(e) {
        e.preventDefault();
        setIsCard(true)
    }

    function onWordToDescribe(e) {
        e.preventDefault()
        if (e.target.value.includes(' ')) {
            alert("it must only be one word!")
        } else {
            setWord(e.target.value)
        }
    }

    return isCard ?
        <ProfileCard name={name} setIsCard={setIsCard} age={age} word={word} gender={gender} why={why} />
        :
        <AddInfo setAge={setAge} onWordToDescribe={onWordToDescribe} setWhy={setWhy} setGender={setGender} genders={genders} setDescribe={setDescribe} onSubmitChange={onSubmitChange} />
}