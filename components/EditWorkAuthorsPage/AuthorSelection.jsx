import Picklist from "./Picklist";
import PicklistItem from "./PicklistIem";

const AuthorSelection = ({ authors, searchTerm, addAuthors }) => {
  return (
    <Picklist>
      {authors &&
        authors.map((author) => {
          const fullName = `${author.Name} ${author.LastName}`;
          return <PicklistItem key={author.AuthorID} author={author} authorID={author.AuthorID} addAuthors={addAuthors}>{fullName}</PicklistItem>;
        })}
    </Picklist>
  );
};

export default AuthorSelection;
