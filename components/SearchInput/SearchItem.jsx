const SearchItem = ({ author, addAuthors, selectedAuthors }) => {
  const fullName = `${author.Name} ${author.LastName}`;

  const isSelected = selectedAuthors.some(
    (selectedAuthor) => selectedAuthor.AuthorID === author.AuthorID
  );

  return (
    <li
      key={author.AuthorID}
      className="text-gray-900 dark:text-gray-200 relative cursor-pointer select-none py-2 pl-3 pr-9 dark:hover:bg-gray-700 dark:active:bg-swift-purple-700"
      onClick={() => addAuthors(author)}
    >
      <div className="flex items-center">
        <span className="font-normal ml-3 block truncate">{fullName}</span>
      </div>
      {isSelected && (
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
      )}
    </li>
  );
};

export default SearchItem;
