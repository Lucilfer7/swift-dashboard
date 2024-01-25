import React from "react";

async function getData() {
  const res = await fetch('http://localhost:8080/author', {cache: 'force-cache'});

  if (!res) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

const DashboardAuthorsPage = async () => {
  const data = await getData()
  return (
    <ul>
      {data.map(author => (
        <li key={author.AuthorID}>{author.Name} {author.LastName}</li>
      ))}
    </ul>
  );
};

export default DashboardAuthorsPage