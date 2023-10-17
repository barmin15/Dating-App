export default function ProfileCard({ setIsCard, name, age, word, gender, why }) {
    console.log(word)

    function onHandleEdit(e) {
        e.preventDefault();
        setIsCard(false);
    }

    return (<div>
        <button className="edit" onClick={(e) => onHandleEdit(e)}>Edit</button>
        <h2 className="prof">My profile</h2>
        <div className="card">
            <img src="https://media.licdn.com/dms/image/C4D03AQEJMrPdaz3Pfg/profile-displayphoto-shrink_800_800/0/1606049214714?e=2147483647&v=beta&t=-SdiXfctlf7QvLNzTQPBcTC7AJTa6ME3iPIg809Heco" alt="John" />
            <h1>{name} {age}, {gender}</h1>
            <p className="title">I'm here because {why}</p>
            <p>{word}</p>
            <p><button className="like">Dislike</button><button className="like">Like</button></p>
        </div>
    </div>)
}