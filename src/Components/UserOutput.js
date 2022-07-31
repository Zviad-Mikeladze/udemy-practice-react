import React from "react";

const UserOutput = (props) => {
  let outputDatas = [];
  const outputData = (data) => {
    return (outputDatas = data);
  };

  // console.log(props.inputData);
  return <div> {outputData.userName} </div>;
};

export default UserOutput;
