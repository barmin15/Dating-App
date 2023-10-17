import React from "react";
export function SelectGender({
  genders,
  map,
  elem,
  index,
  e,
  setGender
}) {
  return <div id='input' className="input-container">
            <label htmlFor="genders">I am...</label>
            <select name="genders" id="genders">{genders?.map((elem, index) => <option value={elem} key={index} onClick={e => setGender(e.target.value)}>{elem}</option>)}
            </select>
        </div>;
}
  