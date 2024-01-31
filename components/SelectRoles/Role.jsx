import React from "react";

const Role = ({role, handleRoleChange, setOpenRolesIndex, selectedAuthorIndex}) => {
  return (
    <li
      className="py-1 px-3 cursor-pointer dark:hover:bg-gray-600 dark:active:bg-swift-purple-900"
      key={role.RoleID}
      id={role.RoleID}
      onClick={() => {
        handleRoleChange(selectedAuthorIndex, role);
        setOpenRolesIndex(null);
      }}
    >
      {role.RoleName}
    </li>
  );
};

export default Role;
