import React, { Suspense } from "react";

const Description = ({ description }) => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <div>
        {description.split(/\r?\n/).map((paragraph, index) => (
          <p key={index} className="font-extralight pb-1 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </Suspense>
  );
};

export default Description;
