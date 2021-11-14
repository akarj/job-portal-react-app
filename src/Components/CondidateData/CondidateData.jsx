import React from "react";

const CondidateData = ({ Image, name }) => {
  const img = Image;
  const names = name;
  return (
    <div style={{ zIndex: "9999" }}>
      <img src={Image} alt={name} />
      <span>{name}</span>w{console.log(img, names, Image, name)}
    </div>
  );
};

export default CondidateData;
