"use client";
import React, { useState } from "react";

const SelectRoles = ({ roles, handleShow, showRoles }) => {
  return (
    <>
      <button className="bg-lochinvar-600 px-4 py-1" onClick={handleShow}>
        Select roles...
      </button>
      {showRoles ? (
        <div className={`transition-all duration-200 ease-in mt-1 fixed z-50 w-44 font-normal bg-white rounded shadow-md divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 border border-gray-200 dark:border-gray-500 right-2 ${showRoles ? `max-h-32` : `max-h-0`}`}>
          <ul className="divide-y">
            {roles.map((role) => (
              <li
                className="py-1 px-3 cursor-pointer dark:hover:bg-gray-600"
                key={role.RoleID}
                id={role.RoleID}
                onClick={handleShow}
              >
                {role.RoleName}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SelectRoles;
