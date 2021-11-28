import React from 'react';
import '../style/topic.css';
import Film from './Film.js';

class Topic extends React.Component {
    constructor() {
        super();
        this.state = {
            filmWidth: 0,
        };
    }

    begin = 0;

    next = (categoryName) => {
        document.querySelector(
            '.' + categoryName.replace(/\s+/g, "").toLowerCase() + ' .pre'
        ).style.display = 'flex';
        let list = document
            .querySelector('.' + categoryName.replace(/\s+/g, "").toLowerCase())
            .querySelector('.list-wrap');
        let filmWidth = list.querySelector('.item').clientWidth;
        let maxWidth = this.props.videoList.length * filmWidth;
        list.scrollTo({
            top: 0,
            left: (this.begin += filmWidth * 3),
            behavior: 'smooth',
        });
        this.begin =
            this.begin >= maxWidth - list.clientWidth
                ? maxWidth - list.clientWidth
                : this.begin;
    };

    pre = (categoryName) => {
        let list = document
            .querySelector('.' + categoryName.replace(/\s+/g, "").toLowerCase())
            .querySelector('.list-wrap');
        let filmWidth = list.querySelector('.item').clientWidth;
        list.scrollTo({
            top: 0,
            left: (this.begin -= filmWidth * 3),
            behavior: 'smooth',
        });
        if (this.begin <= 0) {
            this.begin = 0;
            document.querySelector(
                '.' + categoryName.replace(/\s+/g, "").toLowerCase() + ' .pre'
            ).style.display = 'none';
        }
    };
    render() {
        let videoList = this.props.videoList;
        let categoryName = this.props.categoryName;
        return (
            <section className={`topic ${categoryName.replace(/\s+/g, "").toLowerCase()}`}>
                <div className="topic-wrap">
                    <div className="title flex">
                        <h2>{categoryName}</h2>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className="list-film flex">
                        <div className="control">
                            <button
                                className="pre"
                                onClick={() => this.pre(categoryName)}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button
                                className="next"
                                onClick={() => this.next(categoryName)}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>

                        <div className="list-wrap flex">
                            {videoList.map((video, index) => (
                                <Film video={video} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    componentDidMount() {
        // Chua xu li duoc resize
    }
}

export default Topic;
