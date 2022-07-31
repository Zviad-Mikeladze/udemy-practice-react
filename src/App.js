import React, { useState } from "react";
import Info from "./Components/UserOutput";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

const App = (props) => {
  const [data, setData] = useState([
    { userName: "zviad", userAge: "29", id: "1" },
  ]);

  // console.log(props.userInputData);
  // const updateData = (userData) => {
  //   setData((prevData) => {
  //     return [userData, ...prevData];
  //   });
  // };
  const updatedData = (data) => {
    setData((pervData) => {
      const updateData = [...pervData];
      updateData.unshift({
        userName: data.userName,
        userAge: data.userAge,
        id: Math.random().toString(),
      });
      return updatedData;
    });
  };
  console.log(data);
  const myfunction = (item) => {
    return (
      <li>
        {" "}
        {item.userName} {item.userAge}{" "}
      </li>
    );
  };
  return (
    <div>
      <UserInput onInputSubmitHandler={updatedData} />
      <div>
        <ul>{data.map(myfunction)}</ul>
      </div>
    </div>
  );
};

export default App;
