import '../style/movies.css';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Footer from 'src/components/Footer.js';

import {
    videoQueryById,
    addHistory,
    addMyList,
    userAuth,
    deleteMyList,
    deleteHistory,
} from 'src/utils/request.js';
import Topic from 'src/components/Topic.js';
import { message, Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            videoData: null,
            alsoLike: [],
            userAuthType: 0,
            addOrRemoveToMyListText: 'Add to My List',
            isTipToPay: false,
        };

        this.myRef = React.createRef();
    }

    getMovie = (props) => {
        this.setState({
            videoData: null,
            alsoLike: [],
            userAuthType: 0,
            addOrRemoveToMyListText: 'Add to My List',
        });

        const vid = props.match.params.id;

        videoQueryById({ vid }).then((response) => {
            const { code, data, msg } = response;
            this.setState({
                videoData: data.videoData,
                alsoLike: data.alsoLike,
            });
        });
        const isLogined = localStorage.getItem('email');
        isLogined && addHistory({ vid }).then((response) => {});
    };
    componentDidMount() {
        this.getMovie(this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // 判断跳转路由不等于当前路由
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.getMovie(nextProps);
            window.scrollTo(0, 0);
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log(
    //         'src/pages/Movies.js',
    //         'getDerivedStateFromProps',
    //         this,
    //         props,
    //         state
    //     );
    //     return state || null;
    // }

    showConfirm = () => {
        confirm({
            title: 'You Need To Pay For This Video',
            icon: <ExclamationCircleOutlined />,
            onOk: () => {
                this.props.history.push({
                    pathname: '/pay',
                });
            },
            ononCancelOk: () => {
                console.log('Cancel');
            },
        });
    };

    render() {
        let props = this.props;
        let { videoData, alsoLike, addOrRemoveToMyListText, isTipToPay } =
            this.state;
        const vid = props.match.params.id;

        return (
            videoData && (
                <div className="movies">
                    <div className="play-movie">
                        <div className="movie-wrap">
                            <video
                                ref={this.myRef}
                                controls
                                controlslist="nodownload"
                                onPlay={(e) => {
                                    console.log('onPlay');
                                    if (
                                        localStorage.getItem('userType') == '0'
                                    ) {
                                        userAuth({ vid }).then((response) => {
                                            // 类型 0试看 1通过
                                            this.setState({
                                                userAuthType:
                                                    response.data.type,
                                            });
                                        });
                                    }
                                }}
                                onTimeUpdate={(e) => {
                                    // 如果只是试播放权限，允许播放 30秒。 30秒后弹出开通会员提醒
                                    if (this.state.userAuthType != '0') return;
                                    //用秒数来显示当前播放进度
                                    const video = this.myRef.current;
                                    var timeDisplay = Math.floor(
                                        video.currentTime
                                    );
                                    console.log('onTimeUpdate', timeDisplay);
                                    if (timeDisplay > 30) {
                                        //视频暂停操作
                                        video.pause();
                                        //去除视频地址src内容
                                        video.setAttribute('src', '');
                                        //将视频隐藏掉
                                        video.style.display = 'none';
                                        //提示层显示
                                        this.setState({ isTipToPay: true });
                                        this.showConfirm();
                                    }
                                }}
                            >
                                <source
                                    src={videoData.videoUrl}
                                    type="video/mp4"
                                ></source>
                            </video>
                        </div>
                    </div>
                    {isTipToPay && (
                        <div>
                            该视频需要付费才可观看，如需继续观看，请点击下方购买按钮。如需重复观看请点击
                        </div>
                    )}
                    <div className="info-movie flex">
                        <div className="left">
                            <div className="content">
                                <img src={videoData.pic1} alt="" />
                                <div className="left-content">
                                    <div
                                        className="add-to-list"
                                        onClick={() => {
                                            switch (addOrRemoveToMyListText) {
                                                case 'Add to My List':
                                                    addMyList({
                                                        vid: videoData.id,
                                                    }).then((r) => {
                                                        this.setState({
                                                            addOrRemoveToMyListText:
                                                                'Remove from My List',
                                                        });
                                                    });
                                                    break;
                                                case 'Remove from My List':
                                                    deleteMyList({
                                                        vid: videoData.id,
                                                    }).then((r) => {
                                                        this.setState({
                                                            addOrRemoveToMyListText:
                                                                'Add to My List',
                                                        });
                                                    });
                                                    break;
                                            }
                                        }}
                                    >
                                        Add to My List
                                    </div>
                                    <div className="share flex"></div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h1 className="name">{videoData.title}</h1>
                            <div className="content">
                                <div className="row flex">
                                    <div className="time-type">
                                        <p>
                                            {videoData.category}
                                            <span className="dot">·</span>
                                            {videoData.sdMark}
                                            <span className="dot">·</span>
                                            {videoData.duration}
                                        </p>
                                        {videoData.tags.map((item, index) => (
                                            <Link
                                                to={`/tag/${item}`}
                                                className="play"
                                            >
                                                <span
                                                    className="tag"
                                                    key={index}
                                                >
                                                    {item}
                                                </span>
                                            </Link>
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
                                </div>
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className="share-small hide">
                            <div
                                className="add-to-list"
                                onClick={() => {
                                    switch (addOrRemoveToMyListText) {
                                        case 'Add to My List':
                                            addMyList({
                                                vid: videoData.id,
                                            }).then((r) => {
                                                this.setState({
                                                    addOrRemoveToMyListText:
                                                        'Remove from My List',
                                                });
                                            });
                                            break;
                                        case 'Remove from My List':
                                            deleteMyList({
                                                vid: videoData.id,
                                            }).then((r) => {
                                                this.setState({
                                                    addOrRemoveToMyListText:
                                                        'Add to My List',
                                                });
                                            });
                                            break;
                                    }
                                }}
                            >
                                {addOrRemoveToMyListText}
                            </div>
                        </div>
                        <div className="dirc-small hide">
                            <p className="dirc">{videoData.introduction}</p>
                            <Topic
                                categoryName={'You May Also Like'}
                                videoList={alsoLike}
                                noMoreIcon
                            />
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

export default withRouter(Movies);
