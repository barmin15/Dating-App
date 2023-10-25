export default function ProfileCard({ setIsCard, amountOfExes, imageUrl, name, age, word, gender, why }) {

    function onHandleEdit(e) {
        e.preventDefault();
        setIsCard(false);
    }

    return (<div>
        <button className="edit" onClick={(e) => onHandleEdit(e)}>Edit</button>
        <h2 className="prof">My profile</h2>
        <div className="card">
            <img src={imageUrl} id="profilePic" alt="person" />
            <h1>{name} {age}, {gender}</h1>
            <p className="title">{amountOfExes} relationships</p>
            <p className="title">I'm here to {why}</p>
            <p>{word}</p>
            <p><button className="like">Dislike</button><button className="like">Like</button></p>
        </div>
    </div>)
}