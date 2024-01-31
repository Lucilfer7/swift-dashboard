const SelectButton = ({ selectedAuthorIndex, selectedRoles, setOpenRolesIndex }) => {
  const handleShow = (index) => {
    setOpenRolesIndex(index);
  };

  const renderRoleButtonContent = (index) => {
    const selectedRole = selectedRoles[index];
    return selectedRole ? selectedRole.RoleName : "Select role...";
  };

  return (
    <button
      className="bg-lochinvar-600 px-4 py-1 w-36 selectRolesButton"
      onClick={() => handleShow(selectedAuthorIndex)}
    >
      {renderRoleButtonContent(selectedAuthorIndex)}
    </button>
  );
};

export default SelectButton;
