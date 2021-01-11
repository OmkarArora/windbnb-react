import "./stayCard.css";
import { FaStar } from "react-icons/fa";

const StayCard = ({stayObj}) => {
    return(
        <div className="stay-card">
            <img src={stayObj.photo} alt={stayObj.title} className="stay-img"/>
            <div className="stay-details">
                <div className="room-details">
                    {stayObj.superHost?<span className="host-tag">SUPER HOST</span>:<></>}
                    
                    <span className="room">{stayObj.type}</span>
                </div>
                <div className="star-rating">
                    <FaStar className="icon"/> <span className="rating-value">{stayObj.rating}</span>
                </div>
            </div>
            <div className="stay-heading">
            {stayObj.title}
            </div>
        </div>
    )
}

export default StayCard;