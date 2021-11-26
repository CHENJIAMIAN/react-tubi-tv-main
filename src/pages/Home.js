import React from 'react'
import Hero from 'src/components/Hero.js';
import Main from 'src/components/Main.js';
import { films } from 'src/mock-data.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero />
                <Main films={films} />
            </div >
        )
    }
    componentDidMount() {
        console.log('did mount');
        if (this.props.isStayFormLogin) {
            this.props.changeIsStayFormLogin(false)
        }
    }
    componentWillUnmount() {
        window.scrollTo({top: 0})
    }
}

export default Home