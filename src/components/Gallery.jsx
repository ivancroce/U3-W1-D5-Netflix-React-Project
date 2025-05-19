import { Component } from "react";
import { Alert, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { FaFrown } from "react-icons/fa";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    errorMessage: ""
  };

  fetchMovies = async () => {
    // Shows loading spinner
    this.setState({ isLoading: true });

    try {
      // Fetch request with search query
      const response = await fetch(`https://www.omdbapi.com/?s=${this.props.query}&apikey=9ee8febb`);
      if (response.ok) {
        const data = await response.json();
        // If the response is successful, update state with movies, else movie not found
        if (data.Response === "True") {
          this.setState({
            movies: data.Search,
            hasError: false,
            errorMessage: ""
          });
        } else {
          this.setState({
            movies: [],
            hasError: true,
            errorMessage: data.Error
          });
        }
      } else {
        throw new Error("Error fetching movies");
      }
    } catch (error) {
      console.log(error);
      this.setState({
        hasError: true,
        errorMessage: error.message
      });
      // Always stop the spinner whether success or error
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  // If the query prop has changed, triggers the fetchMovies again
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.fetchMovies();
    }
  }

  render() {
    return (
      <Container fluid className="px-lg-5 mt-3">
        <h4 className="text-white mb-3">{this.props.title}</h4>
        {/* Show spinner while loading */}
        {this.state.isLoading && <Spinner animation="border" variant="danger" />}
        {/* Show error msg if there is an error */}
        {this.state.hasError && (
          <Alert variant="danger" className="d-flex align-items-center justify-content-center">
            <FaFrown size={25} className="me-1" /> {this.state.errorMessage} <FaFrown size={25} className="ms-1" />
          </Alert>
        )}
        {/* Movie cards with map */}
        <Row className="g-2">
          {this.state.movies.map((movie) => (
            <Col xs={6} sm={6} md={4} lg={3} xxl key={movie.imdbID} className="mb-4">
              <Card className="shadow border-0 rounded-0" style={{ cursor: "pointer" }}>
                <Card.Img src={movie.Poster} alt={movie.Title} style={{ height: "400px", objectFit: "cover" }} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
