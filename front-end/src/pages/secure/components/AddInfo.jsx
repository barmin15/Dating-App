import React from "react";
import { useState, useEffect } from "react";
export function AddInfo({
    setAge,
    setGenderPreference,
    setAmountOfExes,
    setImageUrl,
    onWordToDescribe,
    setWhy,
    setGender,
    genders,
    setDescribe,
    onSubmitChange }) {

    const [exRelationshipAmounts, setExRelationshipAmounts] = useState(null);
    const [ages, setAges] = useState(null);

    useEffect(() => {
        const relationshipAmounts = [];
        const allAges = [];
        for (let i = 1; i <= 99; i++) {
            if (i <= 20) relationshipAmounts.push(i);
            if (i >= 18) allAges.push(i);
        }
        relationshipAmounts.push("more than 20");
        allAges.push("older than 99")
        setExRelationshipAmounts(relationshipAmounts);
        setAges(allAges)
    }, [])

    return <div class="container">
        <form className="addInfo">
            <div className="row">
                <div class="col-25">
                    <label htmlFor="age" className="label">Your age</label>
                </div>
                <div class="col-75">
                    <select onChange={(e) => setAge(e.target.value)} className="select" id="gender" name="age">
                        {ages?.map((elem, index) => <option key={index}>{elem}</option>)}
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label htmlFor="word" className="label">Set your image url</label>
                </div>
                <div class="col-75">
                    <input type="text" onChange={e => setImageUrl(e.target.value)} id="word" name="word" className='input' placeholder="copy the image adress of your picture" />
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label htmlFor="word" className="label">One word to describe you</label>
                </div>
                <div class="col-75">
                    <input type="text" onChange={e => onWordToDescribe(e)} id="word" name="word" className='input' placeholder="example: blue, adventure, stories" />
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label htmlFor="why" className="label">Why do you want to date?</label>
                </div>
                <div class="col-75">
                    <input type="text" id="why" onChange={e => setWhy(e.target.value)} name="why" className='input' placeholder="I'm here because..." />
                </div>
            </div>
            <div className="row">
                <div class="col-25">
                    <label htmlFor="amountOfRels" className="label">Amount of ex relationships</label>
                </div>
                <div class="col-75">
                    <select onChange={(e) => {if(e.target.id !== "not"){setAmountOfExes(e.target.value)}}} className="select" id="exes" name="exes">
                    <option id="not">not selected</option>
                        {exRelationshipAmounts?.map((elem, index) => <option key={index}>{elem}</option>)}
                    </select>
                </div>
            </div>
            <div className="row">
                <div class="col-25">
                    <label htmlFor="gender" className="label">Select your gender</label>
                </div>
                <div class="col-75">
                    <select onChange={(e) => {if(e.target.id !== "not"){setGender(e.target.value)}}} className="select" id="gender" name="gender">
                        <option id="not">not selected</option>
                        {genders?.map((elem, index) => <option key={index}>{elem}</option>)}
                    </select>
                </div>
            </div>
            <div className="row">
                <div class="col-25">
                    <label htmlFor="gender" className="label">Select your gender preference</label>
                </div>
                <div class="col-75">
                    <select onChange={(e) => {if(e.target.id !== "not"){setGenderPreference(e.target.value)}}} className="select" id="gender" name="gender">
                        <option id="not">not selected</option>
                        {genders?.map((elem, index) => <option key={index}>{elem}</option>)}
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label htmlFor="subject" className="label">Write something, that poeple who match with you, will see</label>
                </div>
                <div class="col-75">
                    <textarea id="subject" name="subject" onClick={e => setDescribe(e.target.value)} placeholder="Don't be shy" style={{
                        height: "200px"
                    }}></textarea>
                </div>
            </div>
            <div class="row">
                <input type="submit" value="Submit" className="changeInfo" onClick={e => onSubmitChange(e)} />
            </div>
        </form>
    </div>;
}
