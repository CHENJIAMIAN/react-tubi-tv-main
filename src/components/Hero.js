import '../style/hero.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import HeroFilm from './HeroFilm.js';

class Hero extends React.Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            mount: true,
        };
    }

    slideAuto = () => {
        const carousel = this.props.carousel;
        if (!document.querySelector('.hero')) {
            return;
        }
        let currentIndex = this.state.currentIndex;
        let carouselLength = carousel.length;

        let film1 = document.querySelectorAll('.hero .film-img')[0];
        let film2 = document.querySelectorAll('.hero .film-img')[1];
        let film3 = document.querySelectorAll('.hero .film-img')[2];

        let left = document.querySelector('.hero .slide-left .row');
        let right = document.querySelector('.hero .slide-right .right-content');
        let hideLeft = document.createElement('div');
        hideLeft.classList.add('film-img', 'hideleft');
        let hideRight = document.createElement('div');
        hideRight.classList.add('film-img', 'hideRight');
        hideLeft.innerHTML = film3.innerHTML;
        hideRight.innerHTML = `<img src=${
            carouselLength - currentIndex <= 2
                ? carousel[currentIndex - 1].pic1
                : carousel[carouselLength - 1 + currentIndex].pic1
        }
                                    alt="" />`;

        left.append(hideLeft);
        right.append(hideRight);

        let FILM_WIDTH = 65;
        let FILM_HEIGHT = 80;
        film1.style.marginLeft = -FILM_WIDTH + 'px';
        film3.style.marginLeft = -FILM_WIDTH + 'px';
        film3.style.marginBottom = -FILM_HEIGHT + 'px';
        film3.style.opacity = 0;
        film2.classList.remove('active');
        hideLeft.classList.add('active');

        window.removeImg = setTimeout(() => {
            film1.remove();
            film3.remove();
            let newIndex = currentIndex + 1;
            if (newIndex >= carouselLength - 1) {
                newIndex = 0;
                this.setState({ currentIndex: newIndex }, () => null);
                return;
            }
            this.setState({ currentIndex: newIndex }, () => null);
        }, 1000);
    };

    heroContentHandleClick = (target) => {
        const carousel = this.props.carousel;
        target.classList.value &&
            this.props.history.push(
                '/movies/' + carousel[this.state.currentIndex].id
            );
    };

    render() {
        const carousel = this.props.carousel;
        let length = carousel.length;
        let currentIndex = this.state.currentIndex;
        let bgImage = {
            backgroundImage: `linear-gradient(rgba(38, 38, 45, 0), rgb(38, 38, 45)), url('${carousel[currentIndex].pic2}')`,
        };
        return (
            <section id="hero" className="hero" style={bgImage}>
                <div className="hero-wrap">
                    <div
                        className="hero-content"
                        onClick={(e) => this.heroContentHandleClick(e.target)}
                    >
                        <div className="name-film flex">
                            <div className="play flex">
                                <i className="fas fa-play"></i>
                            </div>
                            <Link to={`/movies/${carousel[currentIndex].id}`}>
                                <h1>{carousel[currentIndex].title}</h1>
                            </Link>
                        </div>
                        <div className="slide-film flex">
                            <div className="slide-left flex">
                                <div className="current-film flex">
                                    <div className="row flex">
                                        {/* <div className="img1 test">1</div>
                                        <div className="img2 test">2</div> */}
                                        <HeroFilm film={carousel[length - 1]} />
                                        <HeroFilm
                                            film={carousel[0]}
                                            active={'active'}
                                        />
                                    </div>
                                    <div className="film-info flex">
                                        <div className="left">
                                            <h6>
                                                {carousel[currentIndex].category}
                                            </h6>
                                            <p>
                                                {carousel[currentIndex].duration}
                                            </p>
                                        </div>
                                        <Link to="/home/">TV-PG</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="watch-now">
                                <div className="link-wrap">
                                    <Link
                                        to={`/movies/${carousel[currentIndex].id}`}
                                        // videoUrl: "http://vjs.zencdn.net/v/oceans.mp4"
                                    >
                                        Watch Now <span>FREE</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="slide-right flex">
                                <div className="right-content flex">
                                    {/* <div className="img3 test" >3</div>
                                    <div className="img4 test" >4</div> */}
                                    <HeroFilm film={carousel[1]} />
                                    <HeroFilm film={carousel[2]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    componentDidMount() {
        window.slideAuto = setInterval(() => {
            this.slideAuto();
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(window.slideAuto);
        clearTimeout(window.removeImg);
    }
}

export default withRouter(Hero);
