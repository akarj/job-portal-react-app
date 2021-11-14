import "./CandidateDetail.css";
import { Link, useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Data/UserContext";
import CondidateData from "../../Components/CondidateData/CondidateData";

const CandidateDetail = () => {
  const [Candidate, setCandidate] = useState(null);
  const { id } = useParams();
  const { Data } = useContext(UserContext);
  useEffect(() => {
    const Person = Data && Data.filter(person => person.id === id);
    setCandidate(Person);
  }, [Data, id]);
  return (
    <div className="candidateDetailContainerDiv">
      Candidate <span>Detail</span>
      {console.log(id, Data, Candidate, "params")}
      <Link to={"/"}>
        <section className="candidateDetail">
          {Candidate && (
            <CondidateData Image={Candidate.Image} name={Candidate.name} />
          )}
        </section>

        <Button bgColor="#e04a24" text="Rejected" />

        <Button bgColor="#5ce024" text="Sortlisted" />
      </Link>
    </div>
  );
};

export default CandidateDetail;
