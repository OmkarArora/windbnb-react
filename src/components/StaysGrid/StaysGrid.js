import StayCard from "./StayCard/StayCard";
import "./staysGrid.css";
import StayData from "../data/stays.json";

const StaysGrid = () => {
  console.log(StayData);
  return (
    <div className="stays-grid">
      {StayData.map((item, index) => (
        <StayCard stayObj={item} key={index}/>
      ))}
    </div>
  );
};

export default StaysGrid;
