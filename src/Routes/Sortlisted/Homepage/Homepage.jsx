import "./Homepage.css";
import Button from "../../../Components/Button/Button";
import CandidateCard from "../../../Components/CandidateCard/CandidateCard";
import InputBox from "../../../Components/InputBox/InputBox";
import TitleBar from "../../../Components/TitleBar/TitleBar";
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
          <Button bgColor="#e04a24" text="Rejected" />
          <Button bgColor="#5ce024" text="Sortlisted" />
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
