"use client";
import { useState } from "react";

const EditWorkPage = ({ data, handleEdit }) => {
  const [workToEdit, setWorkToEdit] = useState({
    WorkID: "",
    WorkDescription: "",
    WorkTitle: "",
    WorkSubtitle: "",
    WorkOriginalTitle: "",
    WorkPublishingYear: "",
    WorkImagePath: "",
    Authors: [],
  });

  const [file, setFile] = useState({
    name: "",
    size: 0,
    type: "",
    lastModified: 0,
    lastModifiedDate: {},
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setWork((prevWork) => ({
      ...prevWork,
      [name]: value,
    }));
  };

  const handleFileChange = ({ target: { files } }) => {
    setFile(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>EditWorkPage</h1>
      <button onClick={handleEdit}>Cancel Edit</button>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditWorkPage;
