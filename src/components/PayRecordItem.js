import React, { useState } from 'react';
import { message } from 'antd';

export default function PayRecordItem(props) {
    const { item, type, deleteSuccess } = props;

    return (
        <div className="historyQueueTableRow">
            <div className="contentData" style={{marginLeft:0}}>
                <div className="H5 contentTitle">{item.orderNo}</div>
                <div className="Row subInfo">
                    <div className="Col Col--9">
                        <div>{item.orderTime}</div>

                        <span>
                            {item.status == 0 && 'To Be Paid'}
                            {item.status == 1 && 'Pay Successful'}
                            {item.status == 2 && 'Pay Failed'}{' '}
                        </span>
                    </div>
                    <div className="Col Col--3 ratingCol">
                        <span className="rating">{item.amount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
