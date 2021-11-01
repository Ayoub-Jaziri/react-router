import { Link } from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  FormControl
} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function NavBar({ getSearch, getRating }) {
  const ratingChanged = (newRating) => {
    getRating(newRating);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>

          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => getSearch(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
export default NavBar;
