import { AddInfo } from "./components/AddInfo";
import { useEffect, useState } from "react";
import { getRequest, getUserLogin, request } from "../../fetch/fetch";
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
    const [name, setName] = useState(null)
    const [amountOfExes, setAmountOfExes] = useState(null);
    const [genderPreference, setGenderPreference] = useState("male")
    const [imageUrl, setImageUrl] = useState("https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg");

    useEffect(() => {
        const login = getUserLogin();

        getRequest(`/api/user/login/${login}`)
            .then((response) => {
                const person = response.data;
                setName(person.username)
                setAge(person.age);
                setAmountOfExes(person.amountOfExes);
                setGender(person.gender);
                setWord(person.describeWord);
                setWhy(person.whyToDate)
                setGenderPreference(person.genderPreference)
                person.imageUrl && setImageUrl(person.imageUrl);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])

    function onSubmitChange(e) {
        e.preventDefault();
        console.log(genderPreference);
        const data = {
            gender: gender,
            age: age, describeWord: word,
            whyToDate: why,
            amountOfExes: amountOfExes,
            description: describe,
            imageUrl: imageUrl,
            genderPreference: genderPreference
        };
        console.log(data)
        const login = getUserLogin();

        request("PUT", `/api/user/update/${login}`, data)
            .then((response) => {
                console.log(response);
                setIsCard(true)
            })
            .catch((error) => {
                console.log(error);
            })


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
        <ProfileCard name={name} amountOfExes={amountOfExes} imageUrl={imageUrl} setIsCard={setIsCard} age={age} word={word} gender={gender} why={why} />
        :
        <AddInfo setAge={setAge} setGenderPreference={setGenderPreference} setAmountOfExes={setAmountOfExes} setImageUrl={setImageUrl} onWordToDescribe={onWordToDescribe} setWhy={setWhy} setGender={setGender} genders={genders} setDescribe={setDescribe} onSubmitChange={onSubmitChange} />
}