import React from 'react';
import Film from 'src/components/Film.js';
import 'src/style/results.css';
import { videoSearch } from 'src/utils/request.js';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
        };
    }
    componentDidMount() {
        let searchValue = this.props.searchValue;

        videoSearch({ keyword: searchValue, pageNo: 1, pageSize: 10 }).then(
            (result) => {
                this.setState({ films: result.data });
            }
        );
    }
    render() {
        let searchValue = this.props.searchValue;
        const { films } = this.state;
        return (
            <div className="results">
                <h4>Results for</h4>
                <p className="search-key">{searchValue}</p>
                <span className="hide note">No matches</span>
                <div className="results-list">
                    {films.map((item, index) => {
                        return <Film video={item} key={index} />;
                    })}
                </div>
            </div>
        );
    }
    componentWillUnmount() {
        window.scrollTo({ top: 0 });
    }
}

export default SearchResults;
