"use client";
import { useEffect, useState } from "react";
import { CancelButton, SubmitButton } from "../Button";
import Form from "../Form";
import Input from "../Form/Input";
import Textarea from "../Form/Textarea";
import FileInput from "../Form/FileInput";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditWorkPage = ({ data, setEdit }) => {
  const router = useRouter();
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

  const formTitle = data.WorkTitle;

  const isSaveButtonDisabled =
    Object.keys(workToEdit).every((key) => workToEdit[key] === data[key]) &&
    file.size === 0;

  useEffect(() => {
    setWorkToEdit(data);
  }, [data]);

  // ! Check later that the publishing year and description do not disable the Submit button
  const handleInputChange = ({ target: { name, value } }) => {
    setWorkToEdit((prevWorkToEdit) => ({
      ...prevWorkToEdit,
      [name]: value,
    }));
  };

  const handleFileChange = ({ target: { files } }) => {
    const selectedFile = files[0];
    setFile({
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type,
      lastModified: selectedFile.lastModified,
      lastModifiedDate: selectedFile.lastModifiedDate,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    try {
      let workData;
      if (file.name !== "") {
        workData = { workToEdit, file };
      } else {
        workData = workToEdit;
      }
      const response = await axios.put(
        `http://localhost:8080/works/${data.WorkID}`,
        workData
      );
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container p-5 items-center flex flex-col w-full mx-auto">
      <h1 className="text-2xl font-bold">
        Edit Work — <span className="italic">{formTitle}</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="p-4 w-full m-auto"
        encType="multipart/form-data"
      >
        <Input
          name="WorkTitle"
          value={workToEdit.WorkTitle}
          onChange={handleInputChange}
          label={"Title"}
        />
        <Input
          name="WorkSubtitle"
          value={workToEdit.WorkSubtitle}
          onChange={handleInputChange}
          label={"Subtitle"}
        />
        <Input
          name="WorkOriginalTitle"
          value={workToEdit.WorkOriginalTitle}
          onChange={handleInputChange}
          label={"Original Title"}
        />
        <Input
          name="WorkPublishingYear"
          value={workToEdit.WorkPublishingYear}
          onChange={handleInputChange}
          label={"Publishing Year"}
        />
        <Textarea
          name="WorkDescription"
          value={workToEdit.WorkDescription}
          onChange={handleInputChange}
          label={"Description"}
        />
        <FileInput
          label="Work Cover"
          onChange={handleFileChange}
          fileName={file.filename}
        />
        <CancelButton onClick={setEdit}>Cancel Edit</CancelButton>
        <SubmitButton isDisabled={isSaveButtonDisabled}>Save</SubmitButton>
      </form>
    </div>
  );
};

export default EditWorkPage;
