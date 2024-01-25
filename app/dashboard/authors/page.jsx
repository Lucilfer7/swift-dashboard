import AuthorsList from "@/components/AuthorsList";
import React from "react";
import { getAuthorsData } from "@/app/getData";

const DashboardAuthorsPage = async () => {
  const authors = await getAuthorsData();
  return (
    <div className="w-full container mx-auto px-5 py-4">
      <h1 className="text-3xl">Authors</h1>
      <AuthorsList authors={authors} />
    </div>
  );
};

export default DashboardAuthorsPage;
