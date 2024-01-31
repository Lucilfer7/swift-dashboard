import React from "react";
import Top from "./Top";
import Description from "./Description";
import { Button } from "../Button";

const WorkPage = ({ data, setEdit, setEditAuthors }) => {
  return (
    <>
      <Top data={data} />
      <Description description={data.WorkDescription} />
      <Button onClick={setEdit}>Edit Work</Button>
      <Button onClick={setEditAuthors}>Edit Authors</Button>
    </>
  );
};

export default WorkPage;
