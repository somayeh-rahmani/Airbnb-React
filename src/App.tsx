import Navbar from "/src/component/Navbar/Navbar.tsx";
import Searchbar from "/src/component/Searchbar/Searchbar.tsx";
import Carousel from "/src/component/Carousel/Carousel.tsx";
import Inspiration from "./Component/Inspiration/Inspiration";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <div className="mainContent">
        <Navbar />
        <Searchbar />
        <div className="divider"></div>
        <Carousel />
      </div>
      <Inspiration />
      <Footer />
    </div>
  );
};

export default App;
