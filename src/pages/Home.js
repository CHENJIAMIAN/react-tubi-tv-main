import React from 'react';
import Hero from 'src/components/Hero.js';
import Main from 'src/components/Main.js';
import Footer from 'src/components/Footer.js';
import { getData } from 'src/utils/request.js';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexData: { carousel: [], categoryList: [] },
        };
    }
    render() {
        const { indexData } = this.state;
        return (
            <div className="home">
                <Hero carousel={indexData.carousel} />
                <Main categoryList={indexData.categoryList} />
                <Footer />
            </div>
        );
    }
    componentDidMount() {
        if (this.props.isHidePartOfHeader) {
            this.props.changeIsHidePartOfHeader(false);
        }
        getData({ a: 1 })
            .then((response) => {
                const { code, data, msg } = response;
                this.setState({
                    indexData: data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    componentWillUnmount() {
        window.scrollTo({ top: 0 });
    }
}
export default connect(
    (state) => ({ ...state.ping }),
    (dispatch) => {
        return {
            changeIsHidePartOfHeader: (payload) =>
                dispatch({ type: 'CHANGE_IS_HIDE_PART_OF_HEADER', payload }),
            dispatch,
        };
    }
)(Home);
