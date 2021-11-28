import React from 'react';
import Hero from 'src/components/Hero.js';
import Main from 'src/components/Main.js';
import Footer from 'src/components/Footer.js';
import { getData } from 'src/utils/request.js';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            indexData: {},
        };
    }
    render() {
        const { indexData } = this.state;
        return (
            <div className="home">
                {indexData.carousel && <Hero carousel={indexData.carousel} />}
                {indexData.categoryList && (
                    <Main categoryList={indexData.categoryList} />
                )}
                <Footer />
            </div>
        );
    }
    componentDidMount() {
        if (this.props.isStayFormLogin) {
            this.props.changeIsStayFormLogin(false);
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

export default Home;
