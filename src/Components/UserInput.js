import React, { useState } from "react";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const inputSubmitHandler = (event) => {
    event.preventDefault();
    const userInputData = [
      {
        userName: enteredName,
        userAge: enteredAge,
      },
    ];
    props.onInputSubmitHandler(userInputData);
    // console.log(userInputData);
  };

  return (
    <form onSubmit={inputSubmitHandler}>
      <div>
        <h2> UseerName </h2>
        <div>
          <input
            type="text"
            value={enteredName}
            onChange={userNameHandler}
          ></input>
        </div>
        <h2> Age</h2>
        <div>
          <input
            value={enteredAge}
            type="number"
            onChange={userAgeHandler}
          ></input>
        </div>
      </div>
      <div>
        <button type="submit"> Add User </button>
      </div>
    </form>
  );
};

export default UserInput;
