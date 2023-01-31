import {Component} from "react";
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import SearchButton from "../ui/SearchButton";

class LargeSearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: this.props.keyword,
            pageNum: this.props.page,
            page: '/search',
            isSubmit: false
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* handleSubmit(e) {
        if (e.key === 'Enter') {
            this.setState({
                isSubmit: true
            })
        }
    } */

    handleChange(c, e) {
        const page = `/search?q=${e.target.value}&page=${c.state.pageNum ?? 1}`;
        c.setState({
            q: e.target.value,
            page: page,
            isSubmit: false
        });
    }

    /* componentDidUpdate(prevProps, prevState) {
        if (prevProps.isSubmit == true) {
            this.setState({
                isSubmit: false
            })
        }
    } */

    render() {
        const fldContext = this;
        return (
            <>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search keyword..."
                        aria-label="Search keyword..."
                        size="lg"
                        type="text"
                        id="fld-search"
                        onChange={(e) => {this.handleChange(fldContext, e) }}
                        // onKeyPress={this.handleSubmit}
                    />
                    <SearchButton submit={this.state.isSubmit} search={this.props.search !== 'undefined' ? this.props.search : null} page={this.state.page} />
                </InputGroup>
            </>
        );
    }
};

export default LargeSearchField;