import { useState } from "react";
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
const supportLinks = [
  { text: "Help Center", href: "#" },
  { text: "AirCover", href: "#" },
  { text: "Anti-discrimination", href: "#" },
  { text: "Disability support", href: "#" },
  { text: "Cancellation options", href: "#" },
  { text: "Report neighborhood concern", href: "#" },
];

const hostingLinks = [
  { text: "Airbnb your home", href: "#" },
  { text: "AirCover for Hosts", href: "#" },
  { text: "Hosting resources", href: "#" },
  { text: "Community forum", href: "#" },
  { text: "Hosting responsibly", href: "#" },
  { text: "Airbnb-friendly apartments", href: "#" },
  { text: "Join a free Hosting class", href: "#" },
  { text: "Find a co-host", href: "#" },
];

const airbnbLinks = [
  { text: "Newsroom", href: "#" },
  { text: "New features", href: "#" },
  { text: "Careers", href: "#" },
  { text: "Investors", href: "#" },
  { text: "Gift cards", href: "#" },
  { text: "Airbnb.org emergency stays", href: "#" },
];
const Inspiration = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };
  return (
    <>
      <div className="inspiration-contain">
        <h1>Inspiration for future getaways</h1>
        <div className="inspiration-nav">
          {categories.map((category, index) => (
            <button
              key={index}
              className={activeTab === category ? "active" : ""}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="inspiration-destinations">
          {destinations.map((destination, index) => (
            <div key={index} className="inspi-destination">
              <strong>{destination.name}</strong>
              <span>{destination.type}</span>
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="inspiration-2">
          <div className="inspire-links">
            <div className="inspire-column">
              <h3>Support</h3>
              <ul>
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="inspire-column">
              <h3>Hosting</h3>
              <ul>
                {hostingLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="inspire-column">
              <h3>Airbnb</h3>
              <ul>
                {airbnbLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </>
  );
};
export default Inspiration;
