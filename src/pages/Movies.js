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

import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import '@videojs/http-streaming';
// import 'src/utils/videojs-zh-CN.js';
import qualityLevels from 'videojs-contrib-quality-levels';
import videojsqualityselector from 'videojs-hls-quality-selector';

const { confirm } = Modal;

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            videoData: null,
            alsoLike: [],
            canContinueWatch: 0,
            addOrRemoveToMyListText: 'Add to My List',
            isTipToPay: false,
            //
            visible: false,
        };
    }

    getMovie = (props) => {
        this.setState({
            videoData: null,
            alsoLike: [],
            canContinueWatch: 0,
            addOrRemoveToMyListText: 'Add to My List',
        });

        const vid = props.match.params.id;

        videoQueryById({ vid }).then((response) => {
            const { code, data, msg } = response;

            this.setState({
                videoData: data.videoData,
                alsoLike: data.alsoLike,
            });

            const vid = this.props.match.params.id;
            const isLogined = localStorage.getItem('email');
            const _this = this;
            var video = (window.player = videojs(
                'hlsVedio',
                {
                    controls: true,
                    autoplay: false,
                    preload: 'auto',
                    playbackRates: [0.5, 1, 1.5, 2],
                    // fill: true,
                    fluid: true,
                    responsive: true,
                },
                function onPlayerReady() {
                    videojs.log('Your player is ready!');

                    this.on('loadstart', function () {
                        console.log('开始请求数据 ');
                    });
                    this.on('progress', function () {
                        // console.log('正在请求数据 ');
                    });
                    this.on('loadedmetadata', function () {
                        console.log('获取资源长度完成 ');
                    });
                    this.on('canplaythrough', function () {
                        console.log('视频源数据加载完成');
                    });
                    this.on('waiting', function () {
                        console.log('等待数据');
                    });
                    this.on('play', function () {
                        console.log('视频开始播放');
                        _this.isShownTip = false;

                        userAuth({ vid }).then((response) => {
                            // 类型 0试看 1通过
                            _this.setState({
                                canContinueWatch: response.data.type,
                            });
                        });

                        // 1. 用户点击播放
                        // 2. 如果用户已登录 且 type大于0 直接播放
                        if (
                            isLogined &&
                            localStorage.getItem('userType') != '0' //用户类型 0普通用户  1会员
                        ) {
                            return;
                        }
                    });
                    this.on('playing', function () {
                        console.log('视频播放中');
                    });
                    this.on('pause', function () {
                        console.log('视频暂停播放');
                    });
                    this.on('ended', function () {
                        console.log('视频播放结束');
                    });
                    this.on('error', function () {
                        console.log('加载错误');
                    });
                    this.on('seeking', function () {
                        console.log('视频跳转中');
                    });
                    this.on('seeked', function () {
                        console.log('视频跳转结束');
                    });
                    this.on('ratechange', function () {
                        console.log('播放速率改变');
                    });
                    this.on('timeupdate', function () {
                        // console.log('播放时长改变');
                        // 2. 如果用户已登录 且 type大于0 直接播放
                        if (isLogined && _this.state.canContinueWatch != '0')
                            return;

                        //用秒数来显示当前播放进度
                        const video = this;
                        var timeDisplay = Math.floor(video.currentTime());

                        if (!_this.isShownTip && timeDisplay > 90) {
                            // 4. 用户已登录，试播30秒后弹出框用户选择支付
                            if (isLogined) {
                                //视频暂停操作
                                video.pause();
                                //去除视频地址src内容
                                // video.setAttribute('src', '');
                                //将视频隐藏掉
                                // video.style.display = 'none';
                                //提示层显示
                                _this.setState({ isTipToPay: true });
                                _this.setState({
                                    visible: true,
                                });
                                _this.isShownTip = true;
                            } else {
                                // 3. 用户未登录，试播30秒弹出提示用户到登录页面登录
                                video.pause();
                                // video.setAttribute('src', '');
                                // video.style.display = 'none';
                                _this.isShownTip = true;
                                _this.showLoginConfirm();
                            }
                        }
                    });
                    this.on('volumechange', function () {
                        console.log('音量改变');
                    });
                    this.on('stalled', function () {
                        console.log('网速异常');
                    });
                }
            ));

            if (!video) return;

            video.src(
                'https://hls-hw.xvideos-cdn.com/videos_new/hls/84/5d/6c/845d6c339c193c4e29285cccee1951b7/hls.m3u8?e=1639134916&l=0&h=b38e445756315999dc50e5a6d46bc900' ||
                    data.videoData.videoHLS ||
                    data.videoData.videoHighUrl ||
                    data.videoData.videoUrl
            );

            video.qualityLevels = qualityLevels;
            video.qualityLevels();
            video.hlsQualitySelector = videojsqualityselector;
            video.hlsQualitySelector({
                displayCurrentQuality: true,
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

    showLoginConfirm = () => {
        confirm({
            title: 'You should sign-in to continue',
            icon: <ExclamationCircleOutlined />,
            onOk: () => {
                this.props.history.push({
                    pathname: `/form-login/sign`,
                    query: {
                        redirect: window.location.href,
                    },
                });
            },
            ononCancelOk: () => {
                console.log('Cancel');
            },
        });
    };

    isShownTip = false; //控制只弹一次, 不然会弹两次
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
        const isLogined = localStorage.getItem('email');

        const showBuy = !isLogined || localStorage.getItem('userType') == '0'; //用户类型 0普通用户  1会员;

        return (
            videoData && (
                <div className="movies">
                    <Drawer
                        title="Pay"
                        height="600"
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
                            <video-js id="hlsVedio"></video-js>
                        </div>
                    </div>
                    {isTipToPay && (
                        <div style={{ textAlign: 'center' }}>
                            <a
                                style={{ color: 'white' }}
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
                                <img
                                    src={
                                        videoData.pic2 ||
                                        videoData.pic1 ||
                                        videoData.pic0
                                    }
                                    alt=""
                                />
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
                                        {addOrRemoveToMyListText}
                                    </div>
                                    {showBuy && (
                                        <div
                                            className="add-to-list"
                                            onClick={() => {
                                                this.setState({
                                                    visible: true,
                                                });
                                            }}
                                        >
                                            Buy
                                        </div>
                                    )}
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
                                        <div className="flex genre">
                                            {videoData.tags.map(
                                                (item, index) => (
                                                    <Link
                                                        to={`/tag/${item}`}
                                                        className="play"
                                                        key={item}
                                                    >
                                                        <span className="tag">
                                                            {item}
                                                        </span>
                                                    </Link>
                                                )
                                            )}
                                        </div>
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
                                style={{ width: showBuy ? '49%' : '100%' }}
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
                            {showBuy && (
                                <div
                                    className="add-to-list"
                                    style={{ width: '49%' }}
                                    onClick={() => {
                                        this.setState({
                                            visible: true,
                                        });
                                    }}
                                >
                                    Buy
                                </div>
                            )}
                        </div>
                        <div className="dirc-small hide">
                            <p className="dirc">
                                Introduction:{' ' + videoData.introduction}
                            </p>
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
