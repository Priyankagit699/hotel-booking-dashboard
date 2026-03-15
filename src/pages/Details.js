import { useParams } from "react-router-dom";
import hotels from "../data/hotels";

function Details() {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === Number(id));

  return (
    <div>
      <h2>{hotel.name}</h2>

      <img src={hotel.image} alt={hotel.name} width="400" />

      <p>{hotel.description}</p>

      <h3>Amenities</h3>
      <ul>
        {hotel.amenities.map((a, index) => (
          <li key={index}>{a}</li>
        ))}
      </ul>

      <button
        onClick={() => alert("Hotel Booked Successfully!")}
      >
        Book Now
      </button>
    </div>
  );
}

export default Details;