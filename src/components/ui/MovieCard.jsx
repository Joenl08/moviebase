import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import { Play } from 'react-feather'

const MovieCard = ({title, description, image}) => {
    const imageUrl = image && image.hasOwnProperty('url') ? image.url : '/img/thumbnail.png';
    return (
        <Card className="card-movie-tile">
            <div style={{backgroundImage: `url(${imageUrl})`}} className="card-img img-fluid" alt="Movie Thumbnail" />
            <Card.Body>
                {/* <Card.Title>{title}</Card.Title> */}
                <div className="card-movie-title">
                    <Link to="#">
                        <Card.Text>
                            {title}
                        </Card.Text>
                    </Link>
                </div>
                <Card.Link href="#" className="btn">Watch trailer <Play /></Card.Link>
            </Card.Body>
        </Card>
    )
};

export default MovieCard;