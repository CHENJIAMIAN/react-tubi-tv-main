import 'src/style/web-container.css'
import React from 'react';
import Film from 'src/components/Film.js';
import 'src/style/results.css';
import { categoryVideoByPage } from 'src/utils/request.js';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
        };
    }
    componentDidMount() {
        const { name: categoryName, id } = this.props.match.params;
        categoryVideoByPage({ categoryId: id, pageNo: 1, pageSize: 10 }).then(
            (result) => {
                this.setState({
                    films: result.data,
                });
            }
        );
    }
    render() {
        const categoryName = this.props.match.params.name;
        const { films } = this.state;
        return (
            <div className="results">
                <div class="containerTitle">
                    <h1 class="title">{categoryName}</h1>
                </div>
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
