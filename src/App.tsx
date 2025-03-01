import Navbar from "/src/component/Navbar/Navbar.tsx";
import Searchbar from "/src/component/Searchbar/Searchbar.tsx";
import Carousel from "/src/component/Carousel/Carousel.tsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div className="divider"></div>
      <Carousel />
    </div>
  );
};

export default App;
