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
    this.setState({ isLoading: true });

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${this.props.query}&apikey=9ee8febb`);
      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search });
      } else {
        throw new Error("Error with movies");
      }
    } catch (error) {
      console.log(error);
      this.setState({ hasError: true, errorMessage: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <Container fluid className="px-lg-5 mt-3">
        <h4 className="text-white mb-3">{this.props.title}</h4>
        {this.state.isLoading && <Spinner animation="border" variant="danger" />}
        {this.state.hasError && (
          <Alert variant="danger" className="d-flex align-items-center justify-content-center">
            <FaFrown size={25} className="me-1" /> {this.state.errorMessage} <FaFrown size={25} className="ms-1" />
          </Alert>
        )}

        <Row className="g-2">
          {this.state.movies.map((movie) => (
            <Col xs={6} sm={6} md={4} lg={3} xxl key={movie.imdbID} className="mb-4">
              <Card className="shadow border-0 rounded-0">
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
