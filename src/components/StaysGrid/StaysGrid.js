import StayCard from "./StayCard/StayCard";
import "./staysGrid.css";


const StaysGrid = ({StayData}) => {
  return (
    <div className="stays-grid">
      {StayData.map((item, index) => (
        <StayCard stayObj={item} key={index}/>
      ))}
    </div>
  );
};

export default StaysGrid;
