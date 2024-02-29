import React from "react";

const SectionDescription = ({children}) => {
  return (
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
      {children}
    </p>
  );
};

export default SectionDescription;
