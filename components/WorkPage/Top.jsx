import React from "react";
import WorkTitle from "./WorkTitle";
import WorkAuthors from "./WorkAuthors";

const Top = ({ data }) => {
  return (
    <div className="mb-2">
      <WorkTitle data={data} />
      <>
        {data.Authors && data.Authors.length > 0 ? (
          <WorkAuthors authors={data.Authors} />
        ) : (
          <p className="text-gray-500">No authors available</p>
        )}
      </>
    </div>
  );
};

export default Top;
