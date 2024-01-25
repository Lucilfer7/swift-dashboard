import { getWorkFullInfo } from "@/app/getData";
import React from "react";

const WorkDetailPage = async ({ params }) => {
  const data = await getWorkFullInfo(params.WorkID);
  console.log(data)
  return <div>{data.WorkTitle}</div>;
};

export default WorkDetailPage;
