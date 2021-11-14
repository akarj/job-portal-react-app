import "./CandidateDetail.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const CandidateDetail = () => {
  return (
    <div className="candidateDetailContainerDiv">
      Candidate <span>Detail</span>
      <Link to={"/"}>
        <Button bgColor="#e04a24" text="Rejected" />

        <Button bgColor="#5ce024" text="Sortlisted" />
      </Link>
    </div>
  );
};

export default CandidateDetail;
