import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./carousel.css";

interface Category {
  id: number;
  name: string;
  icon_url: string;
}

interface Room {
  id: number;
  name: string;
  location: string;
  price_per_night: number;
  images: string;
  categoryId: number;
}

const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch("/api/categories");
  return response.json();
};

const fetchRooms = async (categoryId: number): Promise<Room[]> => {
  const response = await fetch(`/api/rooms/${categoryId}`);
  return response.json();
};

export default function Carousel() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);

  const handleCategoryClick = async (categoryId: number) => {
    const roomData = await fetchRooms(categoryId);
    setRooms(roomData);
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      console.log(carouselRef.current);
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="main_content">
      {/* Categories */}
      <div className="carousel-container">
        <div className="carousel">
          <button className="prev" onClick={scrollLeft}>
            <FiChevronLeft size={24} />
          </button>
          <div className="carousel_wrapper" ref={carouselRef}>
            {categories.map((category) => (
              <figure
                key={category.id}
                className="cursor-pointer text-center"
                onClick={() => handleCategoryClick(category.id)}
              >
                <img src={category.icon_url} alt={category.name} />
                <figcaption>{category.name}</figcaption>
              </figure>
            ))}
          </div>
          <button className="next" onClick={scrollRight}>
            <FiChevronRight size={24} />
          </button>
        </div>
        <div className="filter_button">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: "16px",
                width: "16px",
                stroke: "currentColor",
                strokeWidth: "3",
                overflow: "visible",
              }}
            >
              <path
                fill="none"
                d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
              />
            </svg>

            <span>Filters</span>
          </button>
        </div>
      </div>
      {/* Rooms */}
      <div id="room_container" className="room_grid">
        {rooms.length === 0 &&
          <div>
            No Room Found!
          </div>
        }
        {rooms.map((room) => (
          <div key={room.id} className="room">
            <div className="image_container">
              <img src={JSON.parse(room.images)[0]} alt={room.name} />
            </div>
            <div className="info-room">
              <h3>{room.name}</h3>
              <p className="room-location">{room.location}</p>
              <p className="room-night">${room.price_per_night} per night</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
