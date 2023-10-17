import React from "react";
export function InputPersonalData({
  nametik,
  e,
  setName,
  emailtik,
  setEmail,
  passwordtik,
  setPassword
}) {
  return <><div className="input-container">
    <i className="fa fa-user icon">{nametik ? <div style={{
      color: "#f75990"
    }}>&#10003;</div> : <div style={{
      color: "#f75990"
    }}>&#10006;</div>}</i>
    <input className="input-field" type="text" placeholder="Username" name="usrnm" onChange={e => setName(e.target.value)} />
  </div>

    <div className="input-container">
      <i className="fa fa-envelope icon">{emailtik ? <div style={{
        color: "#f75990"
      }}>&#10003;</div> : <div style={{
        color: "#f75990"
      }}>&#10006;</div>}</i>
      <input className="input-field" type="text" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} />
    </div>


    <div class="input-container">
      <i className="fa fa-key icon">{passwordtik ? <div style={{
        color: "#f75990"
      }}>&#10003;</div> : <div style={{
        color: "#f75990"
      }}>&#10006;</div>}</i>
      <input className="input-field" type="password" placeholder="Password" name="psw" onChange={e => setPassword(e.target.value)} />
    </div></>;
}
