import SelectButton from "./SelectButton";
import SelectRoleMenu from "./SelectRoleMenu";

const SelectRoles = ({ selectedRoles, roles, setSelectedRoles, setFormChanged, setOpenRolesIndex, openRolesIndex, selectedAuthorIndex, }) => {
  return (
    <>
      <SelectButton selectedAuthorIndex={selectedAuthorIndex} selectedRoles={selectedRoles} setOpenRolesIndex={setOpenRolesIndex} />
      <SelectRoleMenu
        setSelectedRoles={setSelectedRoles}
        setFormChanged={setFormChanged}
        openRolesIndex={openRolesIndex}
        roles={roles}
        selectedAuthorIndex={selectedAuthorIndex}
        selectedRoles={selectedRoles}
        setOpenRolesIndex={setOpenRolesIndex}
      />
    </>
  );
};

export default SelectRoles;
