import Navbar from "/src/component/Navbar/Navbar.tsx";
import Searchbar from "/src/component/Searchbar/Searchbar.tsx";
import Carousel from "/src/component/Carousel/Carousel.tsx";
import Inspiration from "./component/Inspiration/Inspiration";
import Footer from "./component/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div className="divider"></div>
      <Carousel />
      <Inspiration />
      <Footer />
    </div>
  );
};

export default App;
