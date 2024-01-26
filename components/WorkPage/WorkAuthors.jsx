import Link from "next/link";
import React from "react";

const WorkAuthors = ({authors}) => {
  return (
    <h2 className="inline">
      {authors.map((author, index) => (
        <React.Fragment key={author.AuthorID}>
          {index > 0 && ", "}
          <Link
            href={`/dashboard/authors/${author.AuthorID}`}
            className="text-lg dark:text-gray-200 text-gray-800 hover:underline"
          >
            {`${author.AuthorFullName} (${author.RoleName})`}
          </Link>
        </React.Fragment>
      ))}
    </h2>
  );
};

export default WorkAuthors;
