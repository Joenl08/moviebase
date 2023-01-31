import {Component} from "react";
import Header from '../components/context/Header'
import Meta from '../components/context/Meta'
import MovieList from '../components/ui/MovieList'
import { Link } from "react-router-dom";
import { Row, Col, Container, Button, NavItem, NavLink } from 'react-bootstrap'
import { ChevronRight, ChevronLeft } from 'react-feather';
import Api from "../api/Movies.jsx";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'Movies',
      pageDescription: '',
      movieList: [],
      active: null
    }
  }

  setActive() {
    this.setState({
      active: this.getCategory()
    });
  }

  async loadData() {
    const category = this.getCategory();
    let list;
    switch((category ?? '').toString().toLowerCase()) {
      case 'popularity':
        list = await Api.topPicks();
        break;

      default: // new release
        list = await Api.newReleases();
        break;
    }

    this.setState({
      movieList: list,
      active: this.getCategory()
    })
  }

  componentDidMount() {
    this.loadData();
  }

  getCategory() {
    const queryParams = new URLSearchParams(window.location.search);
    const category = queryParams.get("cat");
    return category ?? 'latest';
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  render() {
    return (
      <Container>
        <Meta title={this.state.pageTitle} />
        <Header head={this.state.pageTitle} description={this.state.pageDescription} />
        <Row className="video-list-nav row mx-0 mb-2">
          <h4 className="col-sm-3 px-0 fw-bold nav-title">Latest Update</h4>
          <Col xs="8" sm="6" className="video-list-nav-tabs px-0">
            <div className="tabs" id="movie-bar">
              <ul role="tablist" className="nav nav-tabs" id="movie-bar_tab_controls">
                <NavItem role="presentation">
                  <NavLink as={Link} to="/movies?cat=latest" onClick={this.setActive} className={this.state.active === 'latest' ? 'active' : ''} id="movie-tab-latest">LATEST</NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink as={Link} to="#genre"/*  onClick={this.setActive} */ className={this.state.active === 'genre' ? 'active' : ''} id="movie-tab-genre">BY GENRE</NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink as={Link} to="/movies?cat=popularity" onClick={this.setActive} className={this.state.active === 'popularity' ? 'active' : ''} id="movie-tab-popularity">POPULARITY</NavLink>
                </NavItem>
              </ul>
            </div>
          </Col>
          <Col sm="3" xs="4" className="text-end movie-list-nav-btn px-0">
            <Button disabled="disabled" variant="outline-primary" className="btn-sm px-3 mr-1">
              <ChevronLeft />
            </Button>
            <Button variant="outline-primary" className="btn-sm px-3">
              <ChevronRight />
            </Button>
          </Col>
        </Row>
        <MovieList list={this.state.movieList} />
      </Container>
    )
  }
}

export default Movies;