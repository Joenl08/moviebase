// import { Link } from "react-router-dom";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Meta from '../components/context/Meta';
import LargeSearchField from '../components/ui/SearchBox';
import MovieList from '../components/ui/MovieList'
import Movies from "../api/Movies.jsx";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchString: "",
      pageNum: 1,
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const data = this.state.counter + 1;
    this.setState({
      counter: data
    });
  }

  async onSearch() {
    const queryParams = new URLSearchParams(window.location.search);
    const searchString = queryParams.get("q");
    const pageNum = queryParams.get("p") ?? 1;
    if (searchString !== this.state.searchString) {
      const list = await Movies.search(searchString, pageNum)
      this.setState({
        searchString: searchString,
        pageNum: pageNum,
        movies: list
      });
      console.log('searching...');  
    }
  }

  componentDidMount() {
    this.onSearch();
  }

  componentDidUpdate(prevProps, prevState) {
    const queryParams = new URLSearchParams(window.location.search);
    const searchString = queryParams.get("q");
    if (searchString !== prevState.searchString) {
      this.onSearch();
    }
  }

  render() {
    return (
      <Container fluid="md" className="mt-5 container-search-result">
        <Meta title="Search Results" />
        <Row>
          <Col>
            <LargeSearchField search={ this.handleClick } keyword={this.state.searchString} page={this.state.pageNum} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Showing results for <strong>"{this.state.searchString}"</strong>:</p>
          </Col>
        </Row>
        <MovieList list={this.state.movies} />
      </Container>
    );  
  }
};

export default Search;