import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Search } from 'react-feather';

class SearchButton extends Component {
    render() {
        return (
            <Button 
                as={Link}
                to={this.props.page}
                variant="outline-primary" 
                id="btn-search-keyword"
                onClick={this.props.search}
            >
                <Search />
            </Button>
        );
    }
    
};

export default SearchButton;