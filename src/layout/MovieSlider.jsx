import {Component} from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import SliderCarousel from '../components/ui/SliderCarousel';
import { ChevronRight } from 'react-feather';

class MovieSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null
        };
    }

    loadData() {
        this.setState({
            items: this.props.items
        });
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.items !== this.props.items) {
            this.loadData()
        }
    }

    render() {
        return (
            <Container fluid className="pt-3 pb-5">
                <Container className="category-head-wrapper">
                    <h4 className="category-title">
                        {this.props.icon} {this.props.title}
                    </h4>
                    <Link className="category-action-more" to={this.props.link}> Browse more <ChevronRight /></Link>
                </Container>
                <Container>
                    {
                        this.state.items == null 
                        ?
                            <p className="text-center">loading...</p>
                        :
                            <SliderCarousel items={this.state.items} />
                    }
                </Container>
            </Container>            
        );
    }
}

export default MovieSlider;
