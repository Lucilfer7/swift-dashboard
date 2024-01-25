import ListItem from "./ListItem";

const AuthorsList = ({ authors }) => {
  return (
    <ul className="rounded-md border border-swift-purple-300 dark:border-gray-800 divide-y divide-swift-purple-300 dark:divide-gray-800 mt-5">
      {authors.map((author) => (
       <ListItem author={author} key={author.AuthorID} />
      ))}
    </ul>
  );
};

export default AuthorsList;
