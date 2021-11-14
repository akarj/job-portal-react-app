import React, { useState } from "react";

const CandidateCard = () => {
  const [Candidate] = useState({
    name: " abc",
    Image: "https://source.unsplash.com/32x32/weekly?person",
    id: 1,
  });
  return (
    <div className="candidateBoxContainer">
      <img src={Candidate.Image} alt={Candidate.name} />
      <span>{Candidate.name}</span>
    </div>
  );
};

export default CandidateCard;
