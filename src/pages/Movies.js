import '../style/movies.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { films } from 'src/mock-data.js';
import Footer from 'src/components/Footer.js';

import { videoQueryById } from 'src/utils/request.js';

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            videoData: null,
            alsoLike: [],
        };
    }
    componentDidMount() {
        let props = this.props;

        videoQueryById({ vid: props.match.params.id }).then((response) => {
            const { code, data, msg } = response;
            this.setState({
                videoData: data.videoData,
                alsoLike: data.alsoLike,
            });
            /* 
            {
                "code": "响应码",
                "msg": "响应描述",
                "data": {
                    "videoData": {
                        "id": "视频ID",
                        "title": "标题",
                        "sdMark": "分辨率",
                        "duration": "时长",
                        "category": "分类",
                        "introduction": "简介",
                        "pic0": "小图",
                        "pic1": "中图",
                        "pic2": "大图",
                        "videoUrl": "小视频",
                        "videoHLS": "分段 x-mpegurl",
                        "tags": "标签集合"
                    },
                    "alsoLike": [{
                        "id": "视频ID",
                        "title": "标题",
                        "pic0": "小图",
                        "pic1": "中图",
                        "pic2": "大图"
                    }]
                }
            }
            */
        });
    }
    render() {
        let props = this.props;
        let { videoData } = this.state;

        return (
            videoData && (
                <div className="movies">
                    <div className="play-movie">
                        <div className="movie-wrap">
                            <video controls autoPlay>
                                <source
                                    src={videoData.videoUrl}
                                    type="video/mp4"
                                ></source>
                            </video>
                        </div>
                    </div>
                    <div className="info-movie flex">
                        <div className="left">
                            <div className="content">
                                <img src={videoData.pic1} alt="" />
                                <div className="left-content">
                                    <Link to="/home" className="add-to-list">
                                        Add to My List
                                    </Link>
                                    <div className="share flex">
                                        {/* <Link to="/home/">Share</Link> */}
                                        {/* <Link to="/home/"><i className="fas fa-ellipsis-h"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h1 className="name">{videoData.title}</h1>
                            <div className="content">
                                <div className="row flex">
                                    <div className="time-type">
                                        <p>{videoData.duration}</p>
                                        {videoData.tags.map((item, index) => (
                                            <span key={index}>{item}</span>
                                        ))}
                                    </div>
                                    <div className="sub flex">
                                        <p>CC</p>
                                        <p>TV-14</p>
                                    </div>
                                </div>
                                <div className="dirc">
                                    <p className="dirc">
                                        {videoData.introduction}
                                    </p>
                                    <p>
                                        DIRECTOR
                                        <Link to="/home/">Kenio Waxman</Link>
                                    </p>
                                    <p>
                                        STARRING
                                        <Link to="/home/">
                                            Steven Seagal, Marlaina, MahVitaly
                                            Kravchenko
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className="share-small hide">
                            <Link to="/home/" className="add-to-list">
                                Add to My List
                            </Link>
                            {/* <Link to="/home/">Share</Link> */}
                            {/* <Link to="/home/"><i className="fas fa-ellipsis-h"></i></Link> */}
                        </div>
                        <div className="dirc-small hide">
                            <p className="dirc">{videoData.introduction}</p>
                            <span>
                                DIRECTOR
                                <Link to="/home/">Kenio Waxman</Link>
                            </span>
                            <span>
                                STARRING
                                <Link to="/home/">
                                    Steven Seagal, Marlaina, MahVitaly
                                    Kravchenko
                                </Link>
                            </span>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        );
    }
    componentWillUnmount() {
        window.scrollTo({ top: 0 });
    }
}

export default Movies;
