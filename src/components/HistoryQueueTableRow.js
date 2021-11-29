import React, { useState } from 'react';
import { deleteMyList, deleteHistory } from 'src/utils/request.js';
import { message } from 'antd';

export default function HistoryQueueTableRow(props) {
    const { video, type } = props;

    const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
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
            class="historyQueueTableRow"
            onMouseOver={() => {
                console.log('onMouseOver');
                setShowDeleteOverlay(true);
            }}
            onMouseLeave={() => {
                console.log('onMouseLeave');
                setShowDeleteOverlay(false);
            }}
        >
            <a class="ATag link" href={`/movie/${video.id}`}>
                <img class="poster" src={pic0} />
            </a>
            <div class="contentData">
                <div class="H5 contentTitle">{title}</div>
                <div class="Row subInfo">
                    <div class="Col Col--9">
                        <div>{duration}</div>

                        <span>{category} </span>
                        {/* <span>Drama</span> */}
                    </div>
                    <div class="Col Col--3 ratingCol">
                        <span class="rating">TV-MA</span>
                    </div>
                </div>
            </div>
            {showDeleteOverlay && (
                <div class="deleteOverlay">
                    <button class="Button Button--secondary">
                        <div class="Button__bg"></div>
                        <div
                            class="Button__content"
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
            )}
        </div>
    );
}
