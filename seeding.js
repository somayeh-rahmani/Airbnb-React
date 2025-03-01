import sqlite3 from "sqlite3";
import { open } from "sqlite";

const categories_ = [
  {
    name: "Tiny homes",
    icon_url: "/src/asset/caruselicon/Tinyhomes.jpg",
  },
  {
    name: "Country side",
    icon_url: "/src/asset/caruselicon/Countryside.jpg",
  },
  {
    name: "Castles",
    icon_url: "/src/asset/caruselicon/Castles.jpg",
  },
  {
    name: "Barns",
    icon_url: "/src/asset/caruselicon/Barns.jpg",
  },

  {
    name: "Beachfronts",
    icon_url: "/src/asset/caruselicon/Beachfront.jpg",
  },
  {
    name: "Cabins",
    icon_url: "/src/asset/caruselicon/Cabins.jpg",
  },

  {
    name: "Lakefront",
    icon_url: "/src/asset/caruselicon/Lakefront.jpg",
  },
  {
    name: "OMG!",
    icon_url: "/src/asset/caruselicon/OMG!.jpg",
  },

  {
    name: "Ski-in/out",
    icon_url: "/src/asset/caruselicon/Ski-in-out.jpg",
  },
  {
    name: "Amazing pools",
    icon_url: "/src/asset/caruselicon/Amazing-pools.jpg",
  },
  {
    name: "Farms",
    icon_url: "/src/asset/caruselicon/Farms.jpg",
  },
  {
    name: "Tree houses",
    icon_url: "/src/asset/caruselicon/Treehouses.jpg",
  },
  {
    name: "Arctic",
    icon_url: "/src/asset/caruselicon/Arctic.jpg",
  },
  {
    name: "Design",
    icon_url: "/src/asset/caruselicon/Design.jpg",
  },
  {
    name: "Historical homes",
    icon_url: "/src/asset/caruselicon/Historicalhomes.jpg",
  },
  {
    name: "Houseboats",
    icon_url: "/src/asset/caruselicon/Houseboats.jpg",
  },
  {
    name: "Islands",
    icon_url: "/src/asset/caruselicon/Islands.jpg",
  },
  {
    name: "Lake front",
    icon_url: "/src/asset/caruselicon/Lakefront.jpg",
  },
  {
    name: "Luxe",
    icon_url: "/src/asset/caruselicon/Luxe.jpg",
  },
  {
    name: "Mansions",
    icon_url: "/src/asset/caruselicon/Mansions.jpg",
  },
  {
    name: "National parks",
    icon_url: "/src/asset/caruselicon/Nationalparks.jpg",
  },
  {
    name: "Off-the-grid",
    icon_url: "/src/asset/caruselicon/Off-the-grid.jpg",
  },
  {
    name: "Topcities",
    icon_url: "/src/asset/caruselicon/Topcities.jpg",
  },
  {
    name: "Trending",
    icon_url: "/src/asset/caruselicon/Trending.jpg",
  },
  {
    name: "Treehouses",
    icon_url: "/src/asset/caruselicon/Tropical.jpg",
  },
  {
    name: "Icon",
    icon_url: "/src/asset/caruselicon/icons.webp",
  },
  {
    name: "Amazingviews",
    icon_url: "/src/asset/caruselicon/Amazingviews.jpg",
  },
];

const rooms_ = [
  {
    name: "Ocean View Suite",
    location: "Miami Beach, FL",
    price_per_night: 200,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Mountain Cabin",
    location: "Aspen, CO",
    price_per_night: 150,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "City Apartment",
    location: "New York, NY",
    price_per_night: 300,
    images: ["/src/asset/rooms/sample1.jpg", "/src/asset/rooms/sample2.jpg"],
  },
  {
    name: "Lakefront Cottage",
    location: "Lake Tahoe, CA",
    price_per_night: 180,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Luxury Villa",
    location: "Beverly Hills, CA",
    price_per_night: 500,
    images: ["/src/asset/rooms/sample1.jpg", "/src/asset/rooms/sample2.jpg"],
  },
  {
    name: "Desert Retreat",
    location: "Sedona, AZ",
    price_per_night: 120,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Beach Bungalow",
    location: "Honolulu, HI",
    price_per_night: 250,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Ski Chalet",
    location: "Park City, UT",
    price_per_night: 300,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Historic Inn",
    location: "Charleston, SC",
    price_per_night: 140,
    images: ["/src/asset/rooms/sample1.jpg"],
  },
  {
    name: "Countryside Cottage",
    location: "Napa Valley, CA",
    price_per_night: 160,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Modern Loft",
    location: "Seattle, WA",
    price_per_night: 220,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Rustic Barn",
    location: "Lancaster, PA",
    price_per_night: 100,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Ocean View Suite",
    location: "Miami Beach, FL",
    price_per_night: 200,
    images: ["/src/asset/rooms/sample1.jpg", "/src/asset/rooms/sample2.jpg"],
  },
  {
    name: "Mountain Cabin",
    location: "Aspen, CO",
    price_per_night: 150,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "City Apartment",
    location: "New York, NY",
    price_per_night: 300,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Lakefront Cottage",
    location: "Lake Tahoe, CA",
    price_per_night: 180,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Luxury Villa",
    location: "Beverly Hills, CA",
    price_per_night: 500,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Desert Retreat",
    location: "Sedona, AZ",
    price_per_night: 120,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Beach Bungalow",
    location: "Honolulu, HI",
    price_per_night: 250,
    images: ["/src/asset/rooms/sample1.jpg", "/src/asset/rooms/sample2.jpg"],
  },
  {
    name: "Ski Chalet",
    location: "Park City, UT",
    price_per_night: 300,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Historic Inn",
    location: "Charleston, SC",
    price_per_night: 140,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Countryside Cottage",
    location: "Napa Valley, CA",
    price_per_night: 160,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Modern Loft",
    location: "Seattle, WA",
    price_per_night: 220,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
  {
    name: "Rustic Barn",
    location: "Lancaster, PA",
    price_per_night: 100,
    images: [
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
      "/src/asset/rooms/sample1.jpg",
      "/src/asset/rooms/sample2.jpg",
    ],
  },
];
console.log(rooms_);
// Create categories table
const createCategoriesTable = async (db) => {
  const tableExists = await db.get(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='categories';`
  );

  if (!tableExists) {
    await db.run(`
      CREATE TABLE categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        icon_url TEXT
      );
    `);
    console.log("Categories table created.");
  }
};

// Create rooms table
const createRoomsTable = async (db) => {
  const tableExists = await db.get(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='rooms';`
  );

  if (!tableExists) {
    await db.run(`
      CREATE TABLE rooms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        location TEXT,
        price_per_night INTEGER NOT NULL,
        images TEXT
      );
    `);
    console.log("Rooms table created.");
  }
};

// Create room_categories table (to assign rooms to categories)
const createRoomCategoriesTable = async (db) => {
  const tableExists = await db.get(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='room_categories';`
  );

  if (!tableExists) {
    await db.run(`
      CREATE TABLE room_categories (
        room_id INTEGER,
        category_id INTEGER,
        FOREIGN KEY (room_id) REFERENCES rooms(id),
        FOREIGN KEY (category_id) REFERENCES categories(id),
        PRIMARY KEY (room_id, category_id)
      );
    `);
    console.log("Room categories table created.");
  }
};

// Open the database connection
const openDb = async () => {
  try {
    const db = await open({
      filename: "./airbnb.db",
      driver: sqlite3.Database,
    });
    console.log("Connected to the database.");
    return db;
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  }
};

// Seed categories (insert or update)
const seedCategories = async (db) => {
  const categories = categories_;

  const tableExists = await db.get(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='categories';`
  );

  if (!tableExists) {
    console.error(
      "Table 'categories' does not exist. Please create the table first."
    );
    return;
  }

  for (const category of categories) {
    const exists = await db.get(`SELECT id FROM categories WHERE name = ?`, [
      category.name,
    ]);
    if (exists) {
      await db.run(`UPDATE categories SET icon_url = ? WHERE id = ?`, [
        category.icon_url,
        exists.id,
      ]);
      console.log(`Category "${category.name}" updated.`);
    } else {
      await db.run(`INSERT INTO categories (name, icon_url) VALUES (?, ?)`, [
        category.name,
        category.icon_url,
      ]);
      console.log(`Category "${category.name}" added.`);
    }
  }
};

// Seed rooms (insert or update)
const seedRooms = async (db) => {
  const rooms = rooms_;
  for (const room of rooms) {
    const exists = await db.get(`SELECT id FROM rooms WHERE name = ?`, [
      room.name,
    ]);
    if (exists) {
      await db.run(
        `UPDATE rooms SET location = ?, price_per_night = ?, images = ? WHERE id = ?`,
        [
          room.location,
          room.price_per_night,
          JSON.stringify(room.images),
          exists.id,
        ]
      );
      console.log(`Room "${room.name}" updated.`);
    } else {
      await db.run(
        `INSERT INTO rooms (name, location, price_per_night, images) VALUES (?, ?, ?, ?)`,
        [
          room.name,
          room.location,
          room.price_per_night,
          JSON.stringify(room.images),
        ]
      );
      console.log(`Room "${room.name}" added.`);
    }
  }
};

// Seed room_categories (randomly assign rooms to categories)
const seedRoomCategories = async (db) => {
  const rooms = await db.all(`SELECT id FROM rooms`);
  const categories = await db.all(`SELECT id FROM categories`);

  if (rooms.length === 0 || categories.length === 0) {
    console.error(
      "Cannot assign room categories: Ensure both rooms and categories exist."
    );
    return;
  }

  for (const room of rooms) {
    // Remove existing assignments for the room
    await db.run(`DELETE FROM room_categories WHERE room_id = ?`, [room.id]);

    // Assign to a random category
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    await db.run(
      `INSERT INTO room_categories (room_id, category_id) VALUES (?, ?)`,
      [room.id, randomCategory.id]
    );
    console.log(`Room ${room.id} assigned to category ${randomCategory.id}.`);
  }
};

// Main function to run seeding
const main = async () => {
  const db = await openDb();

  try {
    await createCategoriesTable(db);
    await createRoomsTable(db);
    await createRoomCategoriesTable(db);

    await seedCategories(db);
    await seedRooms(db);
    await seedRoomCategories(db);
  } catch (err) {
    console.error("Error during seeding:", err.message);
  } finally {
    await db.close();
    console.log("Database connection closed.");
  }
};

main();
