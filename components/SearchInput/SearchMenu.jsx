import SearchItem from "./SearchItem";

const SearchMenu = ({ filteredAuthors, setSelectedAuthors, selectedAuthors, setFormChanged }) => {
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
  return (
    <ul className="max-h-80 block overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg focus:outline-none sm:text-sm">
      {filteredAuthors.map((author) => (
        <SearchItem
          key={author.AuthorID}
          addAuthors={addAuthors}
          author={author}
          selectedAuthors={selectedAuthors}
        />
      ))}
    </ul>
  );
};

export default SearchMenu;
