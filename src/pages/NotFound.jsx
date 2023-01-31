// import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LargeSearchField from '../components/ui/SearchBox';

const NotFound = () => {
  return (
    <Container fluid="md" className="mt-5 container-404">
      <Row>
        <Col>
          <h4>Oops :(</h4>
          <p>We couldn't find the page you are looking for, but you may try to search any keyword here:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <LargeSearchField />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;