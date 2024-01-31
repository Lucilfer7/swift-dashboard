import SelectRoles from "../SelectRoles";

const SelectedAuthors = ({ selectedAuthors, selectedRoles, roles, setSelectedRoles, setFormChanged, setOpenRolesIndex, openRolesIndex }) => {
  return (
    <ul className="w-full">
      {selectedAuthors.map((author, index) => (
        <li className="flex justify-between w-full p-3" key={index}>
          <span>
            {author.Name || author.LastName
              ? `${author.Name} ${author.LastName}`
              : author.AuthorFullName || "Author Name Unavailable"}
          </span>
          <SelectRoles
            selectedRoles={selectedRoles}
            roles={roles}
            setSelectedRoles={setSelectedRoles}
            setFormChanged={setFormChanged}
            setOpenRolesIndex={setOpenRolesIndex}
            openRolesIndex={openRolesIndex}
            selectedAuthorIndex={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default SelectedAuthors;
