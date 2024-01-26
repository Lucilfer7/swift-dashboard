"use client";
import { getWorkFullInfo } from "@/app/getData";
import EditWorkPage from "@/components/EditWorkPage";
import WorkPage from "@/components/WorkPage";
import { useEffect, useState } from "react";

const WorkDetailPage = ({ params }) => {
  const [edit, setEdit] = useState(false);
  const [work, setWork] = useState({
    WorkID: "",
    WorkDescription: "",
    WorkTitle: "",
    WorkSubtitle: "",
    WorkOriginalTitle: "",
    WorkPublishingYear: "",
    WorkImagePath: "",
    Authors: "",
  });

  useEffect(() => {
    async function setWorkData() {
      const data = await getWorkFullInfo(params.WorkID);
      setWork(data);
    }
    setWorkData();
  }, [params.WorkID]);

  const handleEdit = () => setEdit(!edit);

  return (
    <div>
      {edit ? (
        <EditWorkPage data={work} handleEdit={handleEdit} />
      ) : (
        <WorkPage data={work} handleEdit={handleEdit} />
      )}
    </div>
  );
};

export default WorkDetailPage;
