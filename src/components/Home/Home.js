import "./home.css";
import Header from "../Header/Header";
import StaysGrid from "../StaysGrid/StaysGrid";

const Home = () => {
  return (
      <div className="home">
  <Header/>
  <div className="home-content">
  <div className="place-heading">Stays in Finland</div>
  <StaysGrid/>
  </div>
  </div>
  )
};

export default Home;
