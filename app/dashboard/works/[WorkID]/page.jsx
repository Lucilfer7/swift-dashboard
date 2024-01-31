"use client";
import { getWorkFullInfo } from "@/app/getData";
import EditWorkAuthorsPage from "@/components/EditWorkAuthorsPage";
import EditWorkPage from "@/components/EditWorkPage";
import WorkPage from "@/components/WorkPage";
import { useEffect, useState } from "react";

const WorkDetailPage = ({ params }) => {
  const [edit, setEdit] = useState(false);
  const [editAuthors, setEditAuthors] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
  const handleEditAuthors = () => setEditAuthors(!editAuthors);

  return (
    <div>
      {edit ? (
        <EditWorkPage data={work} setEdit={handleEdit} />
      ) : editAuthors ? (
        <EditWorkAuthorsPage
          previousAuthors={work.Authors}
          workId={params.WorkID}
          setEditAuthors={handleEditAuthors}
          searchTerm={searchTerm} setSearchTerm={setSearchTerm} 
        />
      ) : (
        <WorkPage
          data={work}
          setEdit={handleEdit}
          setEditAuthors={handleEditAuthors}
        />
      )}
    </div>
  );
};

export default WorkDetailPage;
