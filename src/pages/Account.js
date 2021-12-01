import React from 'react';
import Hero from 'src/components/Hero.js';
import Main from 'src/components/Main.js';
import Film from 'src/components/Film.js';
import HistoryQueueTableRow from 'src/components/HistoryQueueTableRow.js';
import Footer from 'src/components/Footer.js';
import 'src/style/web-auth.css';
import { Link, withRouter } from 'react-router-dom';
import {
    changeInfo,
    userInfo,
    myList,
    userHistory,
    clearMyList,
    clearHistory,
    changePassword,
} from 'src/utils/request.js';
import {
    Select,
    Form,
    Input,
    Checkbox,
    message,
    Button,
    Space,
    Radio,
} from 'antd';
import default_profile_pic from 'src/img/default_profile_pic.png';

const { Option } = Select;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            myList: [],
            userHistory: [],
            showChangPassword: false,
            newPassword: '',
        };
    }
    componentDidMount() {
        if (this.props.isStayFormLogin) {
            this.props.changeIsStayFormLogin(false);
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
            .catch((err) => {});
        myList()
            .then((result) => {
                this.setState({ myList: result.data });
            })
            .catch((err) => {});
        userHistory()
            .then((result) => {
                this.setState({ userHistory: result.data });
            })
            .catch((err) => {});
    }
    componentWillUnmount() {
        window.scrollTo({ top: 0 });
    }

    render() {
        const { type } = this.props.match.params;
        const { userInfo, myList, userHistory, showChangPassword } = this.state;

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
                        <div className="Col Col--9 Col--lg-6 Col--xxl-4 resetCol">
                            {!type && (
                                <div className="userProfile settingsContent">
                                    <div className="overlayDimmer"></div>
                                    <h1>My Account</h1>
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
                                                    <Form.Item
                                                        wrapperCol={{
                                                            offset: 4,
                                                            span: 4,
                                                        }}
                                                    >
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
                                    <h1>PayRecord</h1>
                                </div>
                            )}
                            {type === 'mylist' && (
                                <div className="settingsContent">
                                    <h1>My List</h1>
                                    <div className="contentArea">
                                        <div className="panelContainer">
                                            <div className="results-list">
                                                <div className="panelContainer">
                                                    <div className="table">
                                                        {myList.map(
                                                            (item, index) => {
                                                                return (
                                                                    <HistoryQueueTableRow
                                                                        type="mylist"
                                                                        key={
                                                                            index
                                                                        }
                                                                        video={
                                                                            item
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        )}
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
                                    <h1>History</h1>
                                    <div className="contentArea">
                                        <div className="panelContainer">
                                            <div className="results-list">
                                                <div className="panelContainer">
                                                    <div className="table">
                                                        {userHistory.map(
                                                            (item, index) => {
                                                                return (
                                                                    <HistoryQueueTableRow
                                                                        type="history"
                                                                        key={
                                                                            index
                                                                        }
                                                                        video={
                                                                            item
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        )}
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
                <Footer />
            </div>
        );
    }
}

export default withRouter(Home);
