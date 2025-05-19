import "./App.css";
import NavbarNetflix from "./components/NavbarNetflix.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import { Component } from "react";
import Profile from "./components/Prorfile.jsx";
import Account from "./components/Account.jsx";

class App extends Component {
  state = {
    selectedPage: "home", // Controls which page to show
    searchQuery: "" // Store the search input (state elevation from NavbarNetflix.jsx)
  };

  // Handles the search from NavbarNetflix.jsx
  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { selectedPage } = this.state;

    // Change body-class(background-color) based on selected page
    if (selectedPage === "home") {
      document.body.classList.add("body-home");
    } else if (selectedPage === "account") {
      document.body.classList.add("body-account");
    }

    // Shows Profile Page if selected
    if (selectedPage === "profile") {
      return <Profile />;
    }

    // Shows Account Page if selected
    if (selectedPage === "account") {
      return <Account />;
    }

    return (
      <>
        {/* Navbar with props to handle different pages and search */}
        <NavbarNetflix onPageSelect={(page) => this.setState({ selectedPage: page })} onSearch={this.handleSearch} page="home" />

        <div className="main-container">
          {/* Ternary operator: if there is a search query, show only the searched results */}
          {this.state.searchQuery ? (
            <Gallery title={`Results for "${this.state.searchQuery}"`} query={this.state.searchQuery} />
          ) : (
            // Otherwise, show the 3 default galleries
            <>
              <Gallery title="Batman Movies" query="batman" />
              <Gallery title="Harry Potter" query="harry potter" />
              <Gallery title="The Lord of the Rings" query="lord of the rings" />
            </>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
