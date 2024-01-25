import Link from "next/link";
import React from "react";

const ListItem = ({ author }) => {
  return (
    <li className="flex rounded-e-md dark:hover:bg-swift-purple-900">
      <Link className="p-2 w-full" href={`/dashboard/authors/${author.AuthorID}`}>
        <span className="text-lg">
          {author.Name} {author.LastName}
        </span>
      </Link>
    </li>
  );
};

export default ListItem;
