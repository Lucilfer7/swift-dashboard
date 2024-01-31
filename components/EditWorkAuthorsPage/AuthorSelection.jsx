import { useEffect, useState } from "react";
import SearchInput from "../SearchInput";
import SearchMenu from "../SearchInput/SearchMenu";

const AuthorSelection = ({ authors, setFormChanged, selectedAuthors, setSelectedAuthors }) => {
  const [filteredAuthors, setFilteredAuthors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Filtrar autores basados en el término de búsqueda
    const filteredAuthorsList = authors.filter((author) => {
      const fullName = `${author.Name} ${author.LastName}`;
      return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredAuthors(filteredAuthorsList);
  }, [searchTerm, authors]);

  return (
    <div>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchMenu filteredAuthors={filteredAuthors} selectedAuthors={selectedAuthors} setFormChanged={setFormChanged} setSelectedAuthors={setSelectedAuthors} />
    </div>
  );
};

export default AuthorSelection;
