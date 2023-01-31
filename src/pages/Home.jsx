import {Component} from "react";
import { Container } from 'react-bootstrap';
import Header from '../components/context/Header';
import Meta from '../components/context/Meta';
import MovieSlider from '../layout/MovieSlider';
import LargeSearchField from '../components/ui/SearchBox';
import { Star, Globe } from 'react-feather';
import Movies from "../api/Movies.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'Moviebase',
      pageDescription: 'Your browser of your favorite movies and actors.',
      newReleasesList: null,
      topPicksList: null,
    }
  }
  
  componentDidMount() {
    this.getNewReleases()
    this.getTopPicks()
  }

  async getNewReleases() {
    const data = await Movies.newReleases();
    this.setState({
      newReleasesList: data
    });
  }

  async getTopPicks() {
    const data = await Movies.topPicks();
    this.setState({
      topPicksList: data
    });
  }

  render() {
    return (
      <>
        <Container fluid className="container-home-landing-wrapper">
          <Meta title={this.state.pageTitle}/>
          <div className="container-home-landing-cover" style={{backgroundImage: "url(img/home-bg-1.jpg)"}}></div>
          <Container className="container-home-landing">
            <Header head={this.state.pageTitle} description={this.state.pageDescription} child={<LargeSearchField />} />
          </Container>
        </Container>
        <MovieSlider title="New Releases" icon={<Globe />} items={this.state.newReleasesList} link="/movies?cat=latest" />
        <MovieSlider title="Top Picks" icon={<Star color="yellow" />} items={this.state.topPicksList} link="/movies?cat=popularity" />
      </>
      
    )  
  }
}

export default Home