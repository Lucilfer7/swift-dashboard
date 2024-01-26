import React from "react";
import Top from "./Top";
import Description from "./Description";

const WorkPage = ({ data, handleEdit }) => {
  return (
    <>
      <Top data={data} />
      <Description description={data.WorkDescription} />
      <button onClick={handleEdit}>Edit Work</button>
    </>
  );
};

export default WorkPage;
