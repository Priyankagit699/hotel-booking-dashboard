import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <div className="card">
      <img src={hotel.image} alt={hotel.name} />

      <h3>{hotel.name}</h3>
      <p>{hotel.city}</p>
      <p>${hotel.price} / night</p>
      <p>⭐ {hotel.rating}</p>

      <Link to={`/hotel/${hotel.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default HotelCard;
