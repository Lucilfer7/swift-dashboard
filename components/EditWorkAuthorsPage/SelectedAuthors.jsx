import React from "react";
import SelectRoles from "./SelectRoles";

const SelectedAuthors = ({ selectedAuthors, roles, showRoles, handleShow }) => {
  return (
    <ul className="w-full">
      {selectedAuthors.map((author, index) => {
        return ( 
          <li className="flex justify-between w-full p-3" key={index}>
            <span>
              {author.Name} {author.LastName}
            </span>{" "}
            <SelectRoles roles={roles} showRoles={showRoles} handleShow={handleShow} />
          </li>
        );
      })}
    </ul>
  );
};

export default SelectedAuthors;
