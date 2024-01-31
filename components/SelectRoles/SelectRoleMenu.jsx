import Role from "./Role";

const SelectRoleMenu = ({selectedRoles, roles, openRolesIndex, setOpenRolesIndex, selectedAuthorIndex, setFormChanged, setSelectedRoles}) => {
  const handleRoleChange = (index, role) => {
    setSelectedRoles({ ...selectedRoles, [index]: role });
    setFormChanged(true);
  };
  return (
    <div
      className={`transition-all duration-200 ease-in mt-1 fixed z-50 w-44 font-normal bg-white rounded shadow-md divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 border border-gray-200 dark:border-gray-500 right-2 ${
        openRolesIndex === selectedAuthorIndex ? "block" : "hidden"
      } rolesDropdown`}
    >
      {openRolesIndex === selectedAuthorIndex && (
        <ul className="divide-y">
          {roles.map((role) => (
            <Role
              key={role.RoleID}
              role={role}
              handleRoleChange={handleRoleChange}
              setOpenRolesIndex={setOpenRolesIndex}
              selectedAuthorIndex={selectedAuthorIndex}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectRoleMenu;
