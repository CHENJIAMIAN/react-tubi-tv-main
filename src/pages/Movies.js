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
import { message, Modal, Button, Space, Drawer } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Pay from 'src/pages/Pay.js';
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
            //
            visible: false,
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

    showPayConfirm = () => {
        confirm({
            title: 'You Need To Pay For This Video',
            icon: <ExclamationCircleOutlined />,
            content: <Pay />,
            footer: {},
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

    showLoginConfirm = () => {
        confirm({
            title: 'You should sign-in to continue',
            icon: <ExclamationCircleOutlined />,
            onOk: () => {
                this.props.history.push({
                    pathname: '/form-login/sign',
                });
            },
            ononCancelOk: () => {
                console.log('Cancel');
            },
        });
    };

    render() {
        let props = this.props;
        let {
            videoData,
            alsoLike,
            addOrRemoveToMyListText,
            isTipToPay,
            visible,
        } = this.state;
        const vid = props.match.params.id;

        return (
            videoData && (
                <div className="movies">
                    <Drawer
                        title="Pay"
                        placement={'bottom'}
                        closable={false}
                        onClose={() => {
                            this.setState({
                                visible: false,
                            });
                        }}
                        visible={visible}
                    >
                        <Pay />
                    </Drawer>
                    <div className="play-movie">
                        <div className="movie-wrap">
                            <video
                                ref={this.myRef}
                                controls
                                controlslist="nodownload"
                                onPlay={(e) => {
                                    console.log('onPlay');

                                    userAuth({ vid }).then((response) => {
                                        // 类型 0试看 1通过
                                        this.setState({
                                            userAuthType: response.data.type,
                                        });
                                    });

                                    // 1. 用户点击播放
                                    const isLogined =
                                        localStorage.getItem('email');

                                    // 2. 如果用户已登录 且 type大于0 直接播放
                                    if (
                                        isLogined &&
                                        localStorage.getItem('userType') != '0'
                                    ) {
                                        return;
                                    }
                                }}
                                onTimeUpdate={(e) => {
                                    const isLogined =
                                        localStorage.getItem('email');

                                    // 2. 如果用户已登录 且 type大于0 直接播放
                                    if (
                                        isLogined &&
                                        this.state.userAuthType != '0'
                                    )
                                        return;

                                    //用秒数来显示当前播放进度
                                    const video = this.myRef.current;
                                    var timeDisplay = Math.floor(
                                        video.currentTime
                                    );

                                    console.log('onTimeUpdate', timeDisplay);
                                    if (timeDisplay > 2) {
                                        // 4. 用户已登录，试播30秒后弹出框用户选择支付
                                        if (isLogined) {
                                            //视频暂停操作
                                            video.pause();
                                            //去除视频地址src内容
                                            video.setAttribute('src', '');
                                            //将视频隐藏掉
                                            video.style.display = 'none';
                                            //提示层显示
                                            this.setState({ isTipToPay: true });
                                            // this.showPayConfirm();
                                            this.setState({
                                                visible: true,
                                            });
                                        } else {
                                            // 3. 用户未登录，试播30秒弹出提示用户到登录页面登录
                                            video.pause();
                                            video.setAttribute('src', '');
                                            video.style.display = 'none';
                                            this.showLoginConfirm();
                                        }
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
                        <div style={{ textAlign: 'center' }}>
                            <a
                                style={{ color: 'white',}}
                                onClick={() => {
                                    this.setState({
                                        visible: true,
                                    });
                                }}
                            >
                                This video requires payment to watch.
                            </a>
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
