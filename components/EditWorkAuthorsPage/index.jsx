import React, { useEffect, useState } from "react";
import { SubmitButton, CancelButton } from "../Button";
import { getAuthorsData, getRoles } from "@/app/getData";
import axios from "axios";

const EditWorkAuthorsPage = ({
  setEditAuthors,
  previousAuthors,
  workId,
  searchTerm,
  setSearchTerm,
}) => {
  const [authors, setAuthors] = useState([]);
  const [roles, setRoles] = useState([]);
  const [openRolesIndex, setOpenRolesIndex] = useState(null);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const [authorsData, rolesData] = await Promise.all([
        getAuthorsData(),
        getRoles(),
      ]);
      setAuthors(authorsData);
      setRoles(rolesData);

      previousAuthors.map((author) => {
        setSelectedAuthors([{...selectedAuthors, AuthorID: author.AuthorID, AuthorFullName: author.AuthorFullName}])
        setSelectedRoles([{...selectedRoles, RoleID: author.RoleID, RoleName: author.RoleName}])
      });
    }

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousAuthors]);

  const addAuthors = (authorAdded) => {
    const count = selectedAuthors.filter(
      (author) => author.AuthorID === authorAdded.AuthorID
    ).length;

    if (count < 3) {
      setSelectedAuthors([...selectedAuthors, authorAdded]);
      setFormChanged(true);
    } else {
      console.warn(
        `El autor con ID ${authorAdded.AuthorID} ya está seleccionado tres veces.`
      );
    }
  };

  const handleRoleChange = (index, role) => {
    setSelectedRoles({ ...selectedRoles, [index]: role });
    setFormChanged(true);
  };

  const handleShow = (index) => {
    setOpenRolesIndex(index);
  };

  const handleClickOutside = (event) => {
    if (
      event.target.closest(".rolesDropdown") === null &&
      event.target.closest(".selectRolesButton") === null
    ) {
      setOpenRolesIndex(null);
    }
  };

  const handleSubmit = async () => {
    const authorsWithRoles = selectedAuthors.map((author, index) => {
      const role = selectedRoles[index];

      if (!role) {
        console.warn(
          `El autor con ID ${author.AuthorID} no tiene un rol asignado.`
        );
      }

      return {
        AuthorID: author.AuthorID,
        RoleID: role ? role.RoleID : null,
      };
    });

    try {
      await Promise.all(
        authorsWithRoles.map(async ({ AuthorID, RoleID }) => {
          try {
            const res = await axios.post(
              `http://localhost:8080/works/${workId}/link-authors`,
              {
                AuthorID,
                RoleID,
                WorkID: workId,
              }
            );
            console.log(res.data);
            console.clear();
            console.log("Success");
          } catch (error) {
            console.error("Error en la solicitud:", error);
            if (error.response) {
              console.log(error.response.data);
            }
          }
        })
      );

      // Restablecer el estado de cambio del formulario después de enviar
      setFormChanged(false);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const renderRoleButtonContent = (index) => {
    const selectedRole = selectedRoles[index];
    return selectedRole ? selectedRole.RoleName : "Select role...";
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 bg-transparent rounded-3xl border-gray-300 appearance-none border-2 focus:outline-none focus:ring-0 focus:border-swift-purple-700 peer dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
            placeholder="Search authors..."
            required=""
          />
        </div>
        <ul className=" max-h-80 block overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg focus:outline-none sm:text-sm">
          {authors &&
            authors.map((author) => {
              const fullName = `${author.Name} ${author.LastName}`;
              return (
                <li
                  key={author.AuthorID}
                  className="text-gray-900 dark:text-gray-200 relative cursor-pointer select-none py-2 pl-3 pr-9 dark:hover:bg-gray-700 dark:active:bg-swift-purple-700"
                  onClick={() => addAuthors(author)}
                >
                  <div className="flex items-center">
                    <span className="font-normal ml-3 block truncate">
                      {fullName}
                    </span>
                  </div>
                  <span className="text-swift-purple-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
      <ul className="w-full">
        {selectedAuthors.map((author, index) => (
          <li className="flex justify-between w-full p-3" key={index}>
            <span>
              {author.Name || author.LastName
                ? `${author.Name} ${author.LastName}`
                : author.AuthorFullName || "Author Name Unavailable"}
            </span>
            <button
              className="bg-lochinvar-600 px-4 py-1 w-36 selectRolesButton"
              onClick={() => handleShow(index)}
            >
              {renderRoleButtonContent(index)}
            </button>
            <div
              className={`transition-all duration-200 ease-in mt-1 fixed z-50 w-44 font-normal bg-white rounded shadow-md divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 border border-gray-200 dark:border-gray-500 right-2 ${
                openRolesIndex === index ? "block" : "hidden"
              } rolesDropdown`}
            >
              {openRolesIndex === index && (
                <ul className="divide-y">
                  {roles.map((role) => (
                    <li
                      className="py-1 px-3 cursor-pointer dark:hover:bg-gray-600 dark:active:bg-swift-purple-900"
                      key={role.RoleID}
                      id={role.RoleID}
                      onClick={() => {
                        handleRoleChange(index, role);
                        setOpenRolesIndex(null);
                      }}
                    >
                      {role.RoleName}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div>
        <CancelButton onClick={setEditAuthors}>Cancel</CancelButton>
        <SubmitButton onClick={handleSubmit} isDisabled={!formChanged}>Save</SubmitButton>
      </div>
    </div>
  );
};

export default EditWorkAuthorsPage;
