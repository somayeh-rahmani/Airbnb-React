import "./Inspiration.css";
const categories = [
  "Popular",
  "Arts & culture",
  "Outdoors",
  "Mountains",
  "Beach",
  "Unique stays",
  "Categories",
  "Things to do",
  "Travel tips & inspiration",
  "Airbnb-friendly apartments",
];
const destinations = [
  { name: "Canmore", type: "Condo rentals" },
  { name: "Benalmádena", type: "Apartment rentals" },
  { name: "Marbella", type: "Beach house rentals" },
  { name: "Mijas", type: "House rentals" },
  { name: "Prescott", type: "Pet-friendly rentals" },
  { name: "Scottsdale", type: "Apartment rentals" },
  { name: "Tucson", type: "Mansion rentals" },
  { name: "Jasper", type: "Cabin rentals" },
  { name: "Mountain View", type: "Family-friendly rentals" },
  { name: "Devonport", type: "Cottage rentals" },
  { name: "Mallacoota", type: "Pet-friendly rentals" },
  { name: "Ibiza", type: "Vacation rentals" },
  { name: "Anaheim", type: "Beach house rentals" },
  { name: "Monterey", type: "House rentals" },
  { name: "Paso Robles", type: "House rentals" },
  { name: "Santa Barbara", type: "Beach house rentals" },
  { name: "Sonoma", type: "Cottage rentals" },
];

const Inspiration = () => {
  return (
    <div className="inspiration-contain">
      <h1>Inspiration for future getaways</h1>
      <div className="inspiration-nav">
        {categories.map((category, index) => (
          <button key={index} className={index === 0 ? "active" : ""}>
            {category}
          </button>
        ))}
      </div>
      <div className="divider"></div>
      <div className="destinations">
        {destinations.map((destination, index) => (
          <div key={index} className="destination">
            <strong>{destination.name}</strong>
            <br />
            {destination.type}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Inspiration;
