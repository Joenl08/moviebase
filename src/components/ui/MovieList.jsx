import {Component} from "react";
import { Row, Col } from 'react-bootstrap';
import MovieCard from '../ui/MovieCard';

class MovieList extends Component {
    render() {
        return (
            <Row className="g-md-3 g-sm-2 g-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-4 row-cols-sm-3 row-cols-2">
                {
                    (this.props.list).map(function (carouselContent, index) {
                        return (
                            <Col key={`mvlist-item-${index}`}>
                                <MovieCard image={carouselContent.image} title={carouselContent.title ?? '--'} description="" />
                            </Col>
                        );
                    })
                }
            </Row>
        )
    }
}

export default MovieList;