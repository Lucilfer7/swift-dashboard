import React from "react";

const WorkTitle = ({ data }) => {
  return (
    <div className="text-2xl">
      <h1 className="inline text-gray-800 dark:text-gray-200">
        {data.WorkTitle}{" "}
      </h1>
      {data.WorkPublishingYear && <span>({data.WorkPublishingYear})</span>}
      {data.WorkSubtitle && (
        <h3 className="text-xl block text-gray-300">{data.WorkSubtitle}</h3>
      )}
    </div>
  );
};

export default WorkTitle;
