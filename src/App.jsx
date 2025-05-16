import "./App.css";
import NavbarNetflix from "./components/NavbarNetflix.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <NavbarNetflix />
      <div className="main-container">
        <Gallery title="Batman Movies" query="batman" />
        <Gallery title="Harry Potter" query="harry potter" />
        <Gallery title="The Lord of the Rings" query="lord of the rings" />
      </div>
      <Footer />
    </>
  );
}

export default App;
