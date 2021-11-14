import "./Homepage.css";
import Button from "../../Components/Button/Button";
import CandidateCard from "../../Components/CandidateCard/CandidateCard";
import InputBox from "../../Components/InputBox/InputBox";
import TitleBar from "../../Components/TitleBar/TitleBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Data/UserContext";
const Homepage = () => {
  const { Data } = useContext(UserContext);
  return (
    <>
      <TitleBar />
      {console.log(Data, "Homepage")}
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
        <div className="candidateCardSection">
          {Data &&
            Data.map(person => (
              <CandidateCard key={person.id} person={person} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
