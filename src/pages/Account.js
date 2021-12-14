import {
    Divider, Form,
    Input, List, message, Radio, Select, Skeleton
} from 'antd';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import HistoryQueueTableRow from 'src/components/HistoryQueueTableRow.js';
import PayRecordItem from 'src/components/PayRecordItem.js';
import default_profile_pic from 'src/img/default_profile_pic.png';
import 'src/style/web-auth.css';
import {
    changeInfo, changePassword, clearHistory, clearMyList, myList, myOrder, userHistory, userInfo
} from 'src/utils/request.js';

const { Option } = Select;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            showChangPassword: false,
            newPassword: '',
            /*list infinite start---------------------------------------------------------------------------------------*/
            myOrderLoading: false,
            myOrderList: [],
            myOrderPageNo: 1,
            myOrderPageSize: 10,
            myOrderTotal: 10,
            /*list infinite end---------------------------------------------------------------------------------------*/

            /*list infinite start---------------------------------------------------------------------------------------*/
            myListLoading: false,
            myList: [],
            myListPageNo: 1,
            myListPageSize: 10,
            myListTotal: 10,
            /*list infinite end---------------------------------------------------------------------------------------*/

            /*list infinite start---------------------------------------------------------------------------------------*/
            userHistoryLoading: false,
            userHistory: [],
            userHistoryPageNo: 1,
            userHistoryPageSize: 10,
            userHistoryTotal: 10,
            /*list infinite end---------------------------------------------------------------------------------------*/
        };
    }
    componentDidMount() {
        if (this.props.isHidePartOfHeader) {
            this.props.changeIsHidePartOfHeader(false);
        }
        userInfo()
            .then((result) => {
                // 日期格式化
                Object.assign(result.data, {
                    createTime: new Date(
                        result.data.createTime
                    ).toLocaleString(),
                });
                this.setState({ userInfo: result.data });
            })
            .catch(() => {});
        /*list infinite start---------------------------------------------------------------------------------------*/
        this.loadMoreDataMyOrder();
        /*list infinite end---------------------------------------------------------------------------------------*/
        /*list infinite start---------------------------------------------------------------------------------------*/
        this.loadMoreDataMyList();
        /*list infinite end---------------------------------------------------------------------------------------*/
        /*list infinite start---------------------------------------------------------------------------------------*/
        this.loadMoreDataUserHistory();
        /*list infinite end---------------------------------------------------------------------------------------*/
    }
    componentWillUnmount() {
        window.scrollTo({ top: 0 });
    }

    /*list infinite start---------------------------------------------------------------------------------------*/
    loadMoreDataMyOrder = () => {
        const {
            myOrderLoading,
            myOrderPageNo: pageNo,
            myOrderPageSize: pageSize,
        } = this.state;
        if (myOrderLoading) {
            return;
        }
        this.setState({
            myOrderLoading: true,
        });
        myOrder({ pageNo, pageSize })
            .then((res) => {
                this.setState({
                    myOrderLoading: false,
                    myOrderList: [...this.state.myOrderList, ...res.data],
                    myOrderPageNo: this.state.myOrderPageNo + 1,
                    myOrderTotal: res.total,
                });
            })
            .catch(() => {
                this.setState({
                    myOrderLoading: false,
                });
            });
    };
    /*list infinite end---------------------------------------------------------------------------------------*/

    /*list infinite start---------------------------------------------------------------------------------------*/
    loadMoreDataMyList = () => {
        const {
            myListLoading,
            myListPageNo: pageNo,
            myListPageSize: pageSize,
        } = this.state;
        if (myListLoading) {
            return;
        }
        this.setState({
            myListLoading: true,
        });
        myList({ pageNo, pageSize })
            .then((res) => {
                this.setState({
                    myListLoading: false,
                    myList: [...this.state.myList, ...res.data],
                    myListPageNo: this.state.myListPageNo + 1,
                    myListTotal: res.total,
                });
            })
            .catch(() => {
                this.setState({
                    myListLoading: false,
                });
            });
    };
    /*list infinite end---------------------------------------------------------------------------------------*/

    /*list infinite start---------------------------------------------------------------------------------------*/
    loadMoreDataUserHistory = () => {
        const {
            userHistoryLoading,
            userHistoryPageNo: pageNo,
            userHistoryPageSize: pageSize,
        } = this.state;
        if (userHistoryLoading) {
            return;
        }
        this.setState({
            userHistoryLoading: true,
        });
        userHistory({ pageNo, pageSize })
            .then((res) => {
                this.setState({
                    userHistoryLoading: false,
                    userHistory: [...this.state.userHistory, ...res.data],
                    userHistoryPageNo: this.state.userHistoryPageNo + 1,
                    userHistoryTotal: res.total,
                });
            })
            .catch(() => {
                this.setState({
                    userHistoryLoading: false,
                });
            });
    };
    /*list infinite end---------------------------------------------------------------------------------------*/

    deleteSuccess = (type) => {
        switch (type) {
            case 'mylist':
                myList()
                    .then((result) => {
                        this.setState({
                            myList: result.data,
                        });
                    })
                    .catch(() => {});
                break;
            case 'history':
                userHistory()
                    .then((result) => {
                        this.setState({ userHistory: result.data });
                    })
                    .catch(() => {});
                break;
        }
    };

    render() {
        const { type } = this.props.match.params;
        const {
            userInfo,
            showChangPassword,
            /*list infinite start---------------------------------------------------------------------------------------*/
            myOrderList,
            myOrderTotal,
            /*list infinite end---------------------------------------------------------------------------------------*/
            /*list infinite start---------------------------------------------------------------------------------------*/
            myList,
            myListTotal,
            /*list infinite end---------------------------------------------------------------------------------------*/
            /*list infinite start---------------------------------------------------------------------------------------*/
            userHistory,
            userHistoryTotal,
            /*list infinite end---------------------------------------------------------------------------------------*/
        } = this.state;

        return (
            <div className="wrapper">
                <div className="navbar">
                    <Link
                        className={`item ${!type ? 'active' : ''} `}
                        data-index="0"
                        tabIndex="0"
                        role="button"
                        aria-label="profile"
                        to="/account"
                    >
                        profile
                    </Link>
                    <Link
                        className={`item ${
                            type === 'payrecord' ? 'active' : ''
                        } `}
                        data-index="1"
                        tabIndex="0"
                        role="button"
                        aria-label="payrecord"
                        to="/account/payrecord"
                    >
                        PayRecord
                    </Link>
                    <Link
                        className={`item ${type === 'mylist' ? 'active' : ''} `}
                        data-index="2"
                        tabIndex="0"
                        role="button"
                        aria-label="mylist"
                        to="/account/mylist"
                    >
                        MyList
                    </Link>
                    <Link
                        className={`item ${
                            type === 'history' ? 'active' : ''
                        } `}
                        data-index="3"
                        tabIndex="0"
                        role="button"
                        aria-label="history"
                        to="/account/history"
                    >
                        History
                    </Link>
                </div>
                <div className="Container">
                    <div className="Row row">
                        <div className="Col Col--12 Col--lg-6 Col--xxl-4 resetCol">
                            {!type && (
                                <div className="userProfile settingsContent">
                                    <div className="overlayDimmer"></div>
                                    <div className="userInfo">
                                        <div className="photoSection">
                                            <img src={default_profile_pic} />
                                        </div>
                                        <div className="demSection">
                                            {userInfo && (
                                                <Form
                                                    name="control-hooks"
                                                    initialValues={userInfo}
                                                    onFinish={(values) => {
                                                        console.log(
                                                            'Success:',
                                                            values
                                                        );
                                                        const { mobile } =
                                                            values;
                                                        changeInfo({
                                                            mobile,
                                                        }).then((r) => {
                                                            message.success(
                                                                r.msg
                                                            );
                                                        });
                                                    }}
                                                    onFinishFailed={(
                                                        errorInfo
                                                    ) => {
                                                        console.log(
                                                            'Failed:',
                                                            errorInfo
                                                        );
                                                    }}
                                                    autoComplete="off"
                                                >
                                                    <Form.Item
                                                        label="Mobile"
                                                        name="mobile"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Please input your mobile!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                    <Form.Item
                                                        label="Email"
                                                        name="email"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Please input your email!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                    <Form.Item
                                                        label="Gender"
                                                        name="gender"
                                                    >
                                                        <Select
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                        >
                                                            <Option value={1}>
                                                                Male
                                                            </Option>
                                                            <Option value={2}>
                                                                Female
                                                            </Option>
                                                        </Select>
                                                    </Form.Item>
                                                    <Form.Item
                                                        label="Registration Time"
                                                        name="createTime"
                                                        name="createTimeStr"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Please input your registerTime!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input disabled />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="Type"
                                                        name="type"
                                                    >
                                                        <Radio.Group>
                                                            {userInfo.type ===
                                                                0 && (
                                                                <Radio.Button
                                                                    value={0}
                                                                >
                                                                    Normal
                                                                </Radio.Button>
                                                            )}
                                                            {userInfo.type ===
                                                                1 && (
                                                                <Radio.Button
                                                                    value={1}
                                                                >
                                                                    Month
                                                                </Radio.Button>
                                                            )}
                                                            {userInfo.type ===
                                                                2 && (
                                                                <Radio.Button
                                                                    value={2}
                                                                >
                                                                    Year
                                                                </Radio.Button>
                                                            )}
                                                        </Radio.Group>
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {/* <Button
                                                            className="saveBtn Button Button--large Button__bg Button__content"
                                                            type="primary"
                                                            htmlType="submit"
                                                        >
                                                            Save
                                                        </Button> */}
                                                        <div className="saveBtn">
                                                            <button
                                                                className="Button Button--large"
                                                                htmltype="submit"
                                                            >
                                                                <div className="Button__bg"></div>
                                                                <div className="Button__content">
                                                                    Save
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </Form.Item>
                                                </Form>
                                            )}
                                        </div>
                                    </div>
                                    <div className="passwordSection">
                                        <h2>Change Password</h2>

                                        <div className="inputContainer">
                                            <div className="content">
                                                {showChangPassword && (
                                                    <Form autoComplete="off">
                                                        <Form.Item>
                                                            <Input.Password
                                                                placeholder="input new password"
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    this.setState(
                                                                        {
                                                                            newPassword:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        }
                                                                    );
                                                                }}
                                                            />
                                                        </Form.Item>
                                                    </Form>
                                                )}
                                                <div
                                                    style={{
                                                        textAlign: ' left',
                                                    }}
                                                >
                                                    <button
                                                        className="Button Button--large"
                                                        type="button"
                                                        onClick={() => {
                                                            const {
                                                                newPassword,
                                                                showChangPassword,
                                                            } = this.state;
                                                            if (
                                                                showChangPassword &&
                                                                newPassword.length >
                                                                    0
                                                            ) {
                                                                // 即将变成false
                                                                changePassword({
                                                                    password:
                                                                        newPassword,
                                                                }).then((r) => {
                                                                    message.success(
                                                                        r.msg
                                                                    );
                                                                });
                                                            } else {
                                                                // 即将变成true
                                                            }
                                                            this.setState({
                                                                newPassword: '',
                                                                showChangPassword:
                                                                    !showChangPassword,
                                                            });
                                                        }}
                                                    >
                                                        <div className="Button__bg"></div>
                                                        <div className="Button__content">
                                                            {!showChangPassword
                                                                ? 'Set New Password'
                                                                : 'Save'}
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {type === 'payrecord' && (
                                <div className="settingsContent parentalMain">
                                    <div
                                        id="scrollableDiv"
                                        style={{
                                            height: 'calc(100vh - 200px)',
                                            overflow: 'auto',
                                            padding: '0 16px',
                                        }}
                                    >
                                        <InfiniteScroll
                                            dataLength={myOrderList.length}
                                            next={this.loadMoreDataMyOrder}
                                            hasMore={
                                                myOrderList.length <
                                                myOrderTotal
                                            }
                                            loader={
                                                <Skeleton
                                                    avatar
                                                    paragraph={{ rows: 1 }}
                                                    active
                                                />
                                            }
                                            endMessage={
                                                <Divider plain>
                                                    It is all, nothing more 🤐
                                                </Divider>
                                            }
                                            scrollableTarget="scrollableDiv"
                                        >
                                            {/* {myOrderList.map((item, index) => {
                                                <PayRecordItem item={item} />;
                                            })} */}
                                            <List
                                                itemLayout="vertical"
                                                dataSource={myOrderList}
                                                renderItem={(item) => (
                                                    <List.Item key={item.id}>
                                                        <PayRecordItem
                                                            item={item}
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                        </InfiniteScroll>
                                    </div>
                                </div>
                            )}
                            {type === 'mylist' && (
                                <div className="settingsContent">
                                    <div className="contentArea">
                                        <div className="panelContainer">
                                            <div className="results-list">
                                                <div className="panelContainer">
                                                    <div className="table">
                                                        <div
                                                            id="scrollableDiv"
                                                            style={{
                                                                height: 'calc(100vh - 312px)',
                                                                overflow:
                                                                    'auto',
                                                                padding:
                                                                    '0 16px',
                                                            }}
                                                        >
                                                            <InfiniteScroll
                                                                dataLength={
                                                                    myList.length
                                                                }
                                                                next={
                                                                    this
                                                                        .loadMoreDataMyList
                                                                }
                                                                hasMore={
                                                                    myList.length <
                                                                    myListTotal
                                                                }
                                                                loader={
                                                                    <Skeleton
                                                                        avatar
                                                                        paragraph={{
                                                                            rows: 1,
                                                                        }}
                                                                        active
                                                                    />
                                                                }
                                                                endMessage={
                                                                    <Divider
                                                                        plain
                                                                    >
                                                                        It is
                                                                        all,
                                                                        nothing
                                                                        more 🤐
                                                                    </Divider>
                                                                }
                                                                scrollableTarget="scrollableDiv"
                                                            >
                                                                <List
                                                                    itemLayout="vertical"
                                                                    dataSource={
                                                                        myList
                                                                    }
                                                                    renderItem={(
                                                                        item
                                                                    ) => (
                                                                        <List.Item
                                                                            key={
                                                                                item.id
                                                                            }
                                                                        >
                                                                            <HistoryQueueTableRow
                                                                                deleteSuccess={
                                                                                    this
                                                                                        .deleteSuccess
                                                                                }
                                                                                type="mylist"
                                                                                key={
                                                                                    item.id
                                                                                }
                                                                                video={
                                                                                    item
                                                                                }
                                                                            />
                                                                        </List.Item>
                                                                    )}
                                                                />
                                                            </InfiniteScroll>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="btnArea">
                                            <button className="Button Button--large largeBtn">
                                                <div className="Button__bg"></div>
                                                {
                                                    <div
                                                        className="Button__content"
                                                        onClick={() => {
                                                            clearMyList().then(
                                                                (r) => {
                                                                    message.success(
                                                                        r.msg
                                                                    );
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        Delete All Watch History
                                                    </div>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {type === 'history' && (
                                <div className="historyMain settingsContent">
                                    <div className="contentArea">
                                        <div className="panelContainer">
                                            <div className="results-list">
                                                <div className="panelContainer">
                                                    <div className="table">
                                                        <div
                                                            id="scrollableDiv"
                                                            style={{
                                                                height: 'calc(100vh - 312px)',
                                                                overflow:
                                                                    'auto',
                                                                padding:
                                                                    '0 16px',
                                                            }}
                                                        >
                                                            <InfiniteScroll
                                                                dataLength={
                                                                    userHistory.length
                                                                }
                                                                next={
                                                                    this
                                                                        .loadMoreDataUserHistory
                                                                }
                                                                hasMore={
                                                                    userHistory.length <
                                                                    userHistoryTotal
                                                                }
                                                                loader={
                                                                    <Skeleton
                                                                        avatar
                                                                        paragraph={{
                                                                            rows: 1,
                                                                        }}
                                                                        active
                                                                    />
                                                                }
                                                                endMessage={
                                                                    <Divider
                                                                        plain
                                                                    >
                                                                        It is
                                                                        all,
                                                                        nothing
                                                                        more 🤐
                                                                    </Divider>
                                                                }
                                                                scrollableTarget="scrollableDiv"
                                                            >
                                                                <List
                                                                    itemLayout="vertical"
                                                                    dataSource={
                                                                        userHistory
                                                                    }
                                                                    renderItem={(
                                                                        item,
                                                                        index
                                                                    ) => (
                                                                        <List.Item
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            <HistoryQueueTableRow
                                                                                deleteSuccess={
                                                                                    this
                                                                                        .deleteSuccess
                                                                                }
                                                                                type="history"
                                                                                key={
                                                                                    index
                                                                                }
                                                                                video={
                                                                                    item
                                                                                }
                                                                            />
                                                                        </List.Item>
                                                                    )}
                                                                />
                                                            </InfiniteScroll>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="btnArea">
                                            <button className="Button Button--large largeBtn">
                                                <div className="Button__bg"></div>
                                                {
                                                    <div
                                                        className="Button__content"
                                                        onClick={() => {
                                                            clearHistory().then(
                                                                (r) => {
                                                                    message.success(
                                                                        r.msg
                                                                    );
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        Delete My List
                                                    </div>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({ ...state.ping }),
    (dispatch) => {
        return {
            changeIsHidePartOfHeader: (payload) =>
                dispatch({ type: 'CHANGE_IS_HIDE_PART_OF_HEADER', payload }),
            dispatch,
        };
    }
)(withRouter(Home));