import React, { useState } from "react";
import "./CandidateCard.css";
import { Link } from "react-router-dom";

const CandidateCard = () => {
  const [Candidate] = useState({
    name: " abc",
    Image: "https://source.unsplash.com/weekly?person",
    id: 1,
  });
  return (
    <Link to={`${Candidate.id}`}>
      <div className="candidateBoxContainer">
        <section className="imageSection">
          <img src={Candidate.Image} alt={Candidate.name} />
        </section>
        <span>{Candidate.name}</span>
      </div>
    </Link>
  );
};

export default CandidateCard;
