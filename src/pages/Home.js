import { useState } from "react";
import hotelsData from "../data/hotels";
import HotelCard from "../components/HotelCard";

function Home() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  let hotels = hotelsData.filter(
    (h) =>
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.city.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "price") {
    hotels.sort((a, b) => a.price - b.price);
  }

  if (sort === "rating") {
    hotels.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>
      <h1>Hotel Finder</h1>
    <div>
      <input
        type="text"
        placeholder="Search by name or city"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Filter</option>
        <option value="price">Price Low to High</option>
        <option value="rating">Star Rating</option>
      </select>
    </div>
      <div className="grid">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <p>No hotels found</p>
        )}
      </div>
    </div>
  );
}

export default Home;