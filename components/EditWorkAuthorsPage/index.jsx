import React, { useEffect, useState } from "react";
import { getAuthorsData, getRoles } from "@/app/getData";
import axios from "axios";
import SelectedAuthors from "./SelectedAuthors";
import ButtonsArea from "./ButtonsArea";
import AuthorSelection from "./AuthorSelection";

const EditWorkAuthorsPage = ({ setEditAuthors, previousAuthors, workId }) => {
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

      const initialSelectedAuthors = previousAuthors.map(
        ({ AuthorID, AuthorFullName }) => ({
          AuthorID,
          AuthorFullName,
        })
      );

      const initialSelectedRoles = previousAuthors.map(
        ({ RoleID, RoleName }) => ({
          RoleID,
          RoleName,
        })
      );

      setSelectedAuthors(initialSelectedAuthors);
      setSelectedRoles(initialSelectedRoles);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousAuthors]);

  const handleClickOutside = (event) => {
    if (
      event.target.closest(".rolesDropdown") === null &&
      event.target.closest(".selectRolesButton") === null
    ) {
      setOpenRolesIndex(null);
    }
  };

  const handleSubmit = async () => {
    const authorsWithRoles = selectedAuthors.map((author, index) => ({
      AuthorID: author.AuthorID,
      RoleID: selectedRoles[index] ? selectedRoles[index].RoleID : null,
    }));

    try {
      const responses = await Promise.all(
        authorsWithRoles.map(({ AuthorID, RoleID }) =>
          axios.post(`http://localhost:8080/works/${workId}/link-authors`, {
            AuthorID,
            RoleID,
            WorkID: workId,
          })
        )
      );

      responses.forEach((res, index) => {
        console.log(`Solicitud ${index + 1}:`, res.data);
      });

      // Restablecer el estado de cambio del formulario después de enviar
      setFormChanged(false);
    } catch (error) {
      console.error("Error en la solicitud:", error);

      if (error.response) {
        console.log("Respuesta del servidor:", error.response.data);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <AuthorSelection
        authors={authors}
        selectedAuthors={selectedAuthors}
        setFormChanged={setFormChanged}
        setSelectedAuthors={setSelectedAuthors}
      />
      <SelectedAuthors
        selectedAuthors={selectedAuthors}
        selectedRoles={selectedRoles}
        roles={roles}
        setSelectedRoles={setSelectedRoles}
        setFormChanged={setFormChanged}
        setOpenRolesIndex={setOpenRolesIndex}
        openRolesIndex={openRolesIndex}
      />
      <ButtonsArea
        formChanged={formChanged}
        handleSubmit={handleSubmit}
        setEditAuthors={setEditAuthors}
      />
    </div>
  );
};

export default EditWorkAuthorsPage;
