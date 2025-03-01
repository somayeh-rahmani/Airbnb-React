import { useEffect, useState } from "react";
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

  return (
    <div className="main_content">
      {/* Categories */}
      <div className="carousel">
        <div className="carousel_wrapper">
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
      </div>

      {/* Rooms */}
      <div id="room_container" className="room_grid">
        {rooms.map((room) => (
          <div key={room.id} className="room">
            <div className="image_container">
              <img src={JSON.parse(room.images)[0]} alt={room.name} />
            </div>
            <div>
              <h3>{room.name}</h3>
              <p>{room.location}</p>
              <p>${room.price_per_night} per night</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
