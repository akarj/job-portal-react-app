import React, { useState } from "react";
import "./CandidateCard.css";
const CandidateCard = () => {
  const [Candidate] = useState({
    name: " abc",
    Image: "https://source.unsplash.com/weekly?person",
    id: 1,
  });
  return (
    <div className="candidateBoxContainer">
      <section className="imageSection">
        <img src={Candidate.Image} alt={Candidate.name} />
      </section>
      <span>{Candidate.name}</span>
    </div>
  );
};

export default CandidateCard;
