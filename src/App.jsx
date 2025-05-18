import "./App.css";
import NavbarNetflix from "./components/NavbarNetflix.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import { Component } from "react";
import Profile from "./components/Prorfile.jsx";

class App extends Component {
  state = {
    selectedPage: "home"
  };

  render() {
    const { selectedPage } = this.state;

    if (selectedPage === "profile") {
      return <Profile />;
    }

    return (
      <>
        <NavbarNetflix onPageSelect={(page) => this.setState({ selectedPage: page })} />

        <div className="main-container">
          <Gallery title="Batman Movies" query="batman" />
          <Gallery title="Harry Potter" query="harry potter" />
          <Gallery title="The Lord of the Rings" query="lord of the rings" />
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
