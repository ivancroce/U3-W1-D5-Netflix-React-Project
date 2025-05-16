import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: []
  };

  fetchMovies = async () => {
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
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <Container fluid className="px-lg-5 mt-3">
        <h4 className="text-white mb-3">{this.props.title}</h4>
        <Row className="g-2">
          {this.state.movies.map((movie) => (
            <Col xs={6} sm={6} md={4} lg key={movie.imdbID} className="mb-4">
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
