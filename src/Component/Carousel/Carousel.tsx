import { useEffect, useState } from "react";

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
    <div>
      {/* Categories */}
      <div id="carousel" className="cat-carousel">
        {categories.map((category) => (
          <figure
            key={category.id}
            className="cursor-pointer text-center"
            onClick={() => handleCategoryClick(category.id)}
          >
            <img
              src={category.icon_url}
              alt={category.name}
              className="w-16 h-16"
            />
            <figcaption>{category.name}</figcaption>
          </figure>
        ))}
      </div>

      {/*  Rooms */}
      <div id="room_container" className="grid grid-cols-3 gap-4 p-4">
        {rooms.map((room) => (
          <div key={room.id} className="room border p-4 rounded shadow">
            <div className="image_container">
              <img
                src={JSON.parse(room.images)[0]}
                alt={room.name}
                className="w-full h-32 object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">{room.name}</h3>
              <p>{room.location}</p>
              <p className="text-green-600">
                ${room.price_per_night} per night
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
