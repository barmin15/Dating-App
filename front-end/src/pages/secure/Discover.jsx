import { useState, useEffect } from "react"
import "./css/discover.css"
export default function Discover() {
    const [isReload, setIsReload] = useState(false);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [why, setWhy] = useState(null);
    const [image, setImage] = useState(null);
    const [gender, setGender] = useState(null)
    const [word, setWord] = useState(null);

    useEffect(() => {
        setName("Flóra");
        setAge(20);
        setWhy("i dont know why");
        setImage("https://media.licdn.com/dms/image/C4D03AQEJMrPdaz3Pfg/profile-displayphoto-shrink_800_800/0/1606049214714?e=2147483647&v=beta&t=-SdiXfctlf7QvLNzTQPBcTC7AJTa6ME3iPIg809Heco")
        setGender("female");
        setWord("talking");
    }, [])

    function onDislike(e) {
        e.preventDefault();
        fetchPerson()
    }
    
    function onLike(e) {
        e.preventDefault();
        fetchPerson()
    }

    function fetchPerson(){
        setIsReload(true);
        setName("Emma");
        setAge(22);
        setWhy("i dont know why");
        setImage("https://hips.hearstapps.com/vidthumb/images/jenna-ortega-wednesday-addams-1660750323.jpg?crop=0.53125xw:1xh;center,top&resize=1200:*")
        setGender("female");
        setWord("hate");

        setTimeout(() => {
            setIsReload(false)
        }, "400");
    }


    return (isReload ?
        <section className="sec-loading">
        <div className="one">
        </div>
      </section>
        :
        <div>
            <div className="card">
                <img src={image} alt="John" />
                <h1>{name} {age}, {gender}</h1>
                <p className="title">I'm here because {why}</p>
                <p>{word}</p>
                <p><button className="like" onClick={(e) => onDislike(e)}>Dislike</button>
                    <button className="like" onClick={(e) => onLike(e)}>Like</button></p>
            </div>
        </div>)
}