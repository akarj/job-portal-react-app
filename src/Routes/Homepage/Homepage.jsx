import "./Homepage.css";
import Button from "../../Components/Button/Button";
import CandidateCard from "../../Components/CandidateCard/CandidateCard";
import InputBox from "../../Components/InputBox/InputBox";
import TitleBar from "../../Components/TitleBar/TitleBar";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <TitleBar />
      {/* console.log(Data()); */}
      <div className="homepageContainerDiv">
        <section className="inputbarSection">
          <InputBox />
        </section>
        <section className="buttonSection">
          <Link to={"/sortlisted"}>
            <Button bgColor="#5ce024" text="Sortlisted" />
          </Link>
          <Link to={"/rejected"}>
            <Button bgColor="#e04a24" text="Rejected" />
          </Link>
        </section>
        <section className="candidateCardSection">
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
        </section>
      </div>
    </>
  );
};

export default Homepage;