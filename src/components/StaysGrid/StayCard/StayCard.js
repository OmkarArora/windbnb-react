import "./stayCard.css";
import { FaStar } from "react-icons/fa";

const StayCard = () => {
    return(
        <div className="stay-card">
            <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="property" className="stay-img"/>
            <div className="stay-details">
                <div className="room-details">
                    <span className="host-tag">SUPER HOST</span>
                    <span className="room">Entire apartment, 2 beds</span>
                </div>
                <div className="star-rating">
                    <FaStar className="icon"/> <span className="rating-value">4.40</span>
                </div>
            </div>
            <div className="stay-heading">
                Stylist apartment in center of the city
            </div>
        </div>
    )
}

export default StayCard;