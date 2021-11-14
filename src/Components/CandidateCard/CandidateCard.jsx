import React, { useState } from "react";
import "./CandidateCard.css";
import { Link } from "react-router-dom";

const CandidateCard = ({ person }) => {
  const Candidate = person;
  return (
    <Link to={`${Candidate.id}`}>
      {console.log(person, "card")}
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
