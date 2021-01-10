import StayCard from "./StayCard/StayCard";
import "./staysGrid.css";

const StaysGrid = () => {
    return(
        <div className="stays-grid">
            <StayCard/>
            <StayCard/>
            <StayCard/>
            <StayCard/>
            <StayCard/>
            <StayCard/>
        </div>
    )
}

export default StaysGrid;