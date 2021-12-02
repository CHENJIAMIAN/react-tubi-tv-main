import React, { useState } from 'react';
import { deleteMyList, deleteHistory } from 'src/utils/request.js';
import { message } from 'antd';

export default function HistoryQueueTableRow(props) {
    const { video, type,deleteSuccess } = props;

    // const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
    const {
        id,
        title,
        sdMark,
        duration,
        category,
        introduction,
        pic0,
        pic1,
        pic2,
        videoUrl,
        videoHLS,
        tags,
    } = video;

    return (
        <div
            className="historyQueueTableRow"
            // onMouseOver={() => {
            //     console.log('onMouseOver');
            //     setShowDeleteOverlay(true);
            // }}
            // onMouseLeave={() => {
            //     console.log('onMouseLeave');
            //     setShowDeleteOverlay(false);
            // }}
        >
            <a className="ATag link" href={`/movie/${video.id}`}>
                <img className="poster" src={pic0} />
            </a>
            <div className="contentData">
                <div className="H5 contentTitle">{title}</div>
                <div className="Row subInfo">
                    <div className="Col Col--9">
                        <div>{duration}</div>

                        <span>{category} </span>
                        {/* <span>Drama</span> */}
                    </div>
                    <div className="Col Col--3 ratingCol">
                        <a
                            className="rating"
                            onClick={() => {
                                switch (type) {
                                    case 'history':
                                        deleteHistory({ vid: id }).then((r) => {
                                            message.success(r.msg);
                                            deleteSuccess('history');
                                        });
                                        break;
                                    case 'mylist':
                                        deleteMyList({ vid: id }).then((r) => {
                                            message.success(r.msg);
                                            deleteSuccess('mylist');
                                        });
                                        break;
                                }
                                return () => {};
                            }}
                        >
                            Delete
                        </a>
                    </div>
                </div>
            </div>
            {/* {showDeleteOverlay && (
                <div className="deleteOverlay">
                    <button className="Button Button--secondary">
                        <div className="Button__bg"></div>
                        <div
                            className="Button__content"
                            onClick={() => {
                                switch (type) {
                                    case 'history':
                                        deleteHistory({ vid: id }).then((r) => {
                                            message.success(r.msg);
                                        });
                                        break;
                                    case 'mylist':
                                        deleteMyList({ vid: id }).then((r) => {
                                            message.success(r.msg);
                                        });
                                        break;
                                }
                                return () => {};
                            }}
                        >
                            Remove
                        </div>
                    </button>
                </div>
            )} */}
        </div>
    );
}
