import React from 'react';
import Hero from 'src/components/Hero.js';
import Main from 'src/components/Main.js';
import Film from 'src/components/Film.js';
import HistoryQueueTableRow from 'src/components/HistoryQueueTableRow.js';
import Footer from 'src/components/Footer.js';
import 'src/style/web-auth.css';
import { Link, withRouter } from 'react-router-dom';
import {
    userInfo,
    myList,
    userHistory,
    clearMyList,
    clearHistory,
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

const { Option } = Select;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            myList: [],
            userHistory: [],
            historyOrMyList: 'history',
            showDeleteOverlay: false,
        };
    }
    componentDidMount() {
        if (this.props.isStayFormLogin) {
            this.props.changeIsStayFormLogin(false);
        }
        userInfo()
            .then((result) => {
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

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        const { type } = this.props.match.params;
        const {
            userInfo,
            myList,
            userHistory,
            historyOrMyList,
            showDeleteOverlay,
        } = this.state;

        return (
            <div className="wrapper">
                <div className="navbar">
                    <Link
                        className={`item ${type === 'index' ? 'active' : ''} `}
                        data-index="0"
                        tabindex="0"
                        role="button"
                        aria-label="profile"
                        to="/account/index"
                    >
                        profile
                    </Link>
                    <Link
                        className={`item ${
                            type === 'parental' ? 'active' : ''
                        } `}
                        data-index="1"
                        tabindex="0"
                        role="button"
                        aria-label="parental controls"
                        to="/account/parental"
                    >
                        parental controls
                    </Link>
                    <Link
                        className={`item ${
                            type === 'notifications' ? 'active' : ''
                        } `}
                        data-index="2"
                        tabindex="0"
                        role="button"
                        aria-label="notifications"
                        to="/account/notifications"
                    >
                        notifications
                    </Link>
                    <Link
                        className={`item ${
                            type === 'history' ? 'active' : ''
                        } `}
                        data-index="3"
                        tabindex="0"
                        role="button"
                        aria-label="history &amp; my list"
                        to="/account/history"
                    >
                        history &amp;my list
                    </Link>
                </div>
                <div className="Container">
                    <div className="Row row">
                        <div className="Col Col--9 Col--lg-6 Col--xxl-4 resetCol">
                            {type === 'index' && (
                                <div className="userProfile settingsContent">
                                    <div className="overlayDimmer"></div>
                                    <h1>My Account</h1>
                                    <div className="userInfo">
                                        <div className="photoSection">
                                            <img src="https://cdn.adrise.tv/tubitv-assets/img/default_profile_pic.png" />
                                        </div>
                                        <div className="demSection">
                                            {userInfo && (
                                                <Form
                                                    name="control-hooks"
                                                    initialValues={userInfo}
                                                    onFinish={this.onFinish}
                                                    onFinishFailed={
                                                        this.onFinishFailed
                                                    }
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
                                                        label="RegisterTime"
                                                        name="createTime"
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
                                                            <Radio.Button
                                                                value={0}
                                                            >
                                                                Normal
                                                            </Radio.Button>
                                                            <Radio.Button
                                                                value={1}
                                                            >
                                                                Month
                                                            </Radio.Button>
                                                            <Radio.Button
                                                                value={2}
                                                            >
                                                                Year
                                                            </Radio.Button>
                                                        </Radio.Group>
                                                    </Form.Item>
                                                    <Form.Item
                                                        wrapperCol={{
                                                            offset: 4,
                                                            span: 4,
                                                        }}
                                                    >
                                                        <Button
                                                            className="saveBtn Button Button--large Button__bg Button__content"
                                                            type="primary"
                                                            htmlType="submit"
                                                        >
                                                            Save
                                                        </Button>
                                                    </Form.Item>
                                                </Form>
                                            )}
                                        </div>
                                        {/* <div className="saveBtn">
                                            <button className="Button Button--large">
                                                <div className="Button__bg"></div>
                                                <div className="Button__content">
                                                    Save
                                                </div>
                                            </button>
                                        </div> */}
                                    </div>
                                    <div className="passwordSection">
                                        <h2>Change Password</h2>

                                        <div className="inputContainer">
                                            <div className="content">
                                                <form novalidate="">
                                                    <div className="text">
                                                        It appears that you have
                                                        created this account
                                                        using single sign-on.
                                                        You’ll have to set a new
                                                        password first.
                                                    </div>
                                                    <div
                                                        style={{
                                                            'text-align':
                                                                'center',
                                                        }}
                                                    >
                                                        <button
                                                            className="Button Button--large"
                                                            type="button"
                                                        >
                                                            <div className="Button__bg"></div>
                                                            <div className="Button__content">
                                                                Set New Password
                                                            </div>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="delTop" className="accountDelMain">
                                        <h2 className="sectionHead">
                                            DELETE MY ACCOUNT
                                        </h2>
                                        <div className="content">
                                            <div className="sectionInfo">
                                                <p>
                                                    Deleting your account from
                                                    Tubi will remove your list
                                                    and history and unlink the
                                                    devices associated with it.
                                                </p>
                                                <p>
                                                    Please allow up to 48 hours
                                                    before your request is
                                                    processed.
                                                </p>
                                            </div>
                                            <div className="btnArea">
                                                <button className="Button Button--large Button--inverse">
                                                    <div className="Button__bg"></div>
                                                    <div className="Button__content">
                                                        Delete Account
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {type === 'parental' && (
                                <div class="settingsContent parentalMain">
                                    <h1>Parental Controls</h1>

                                    <div class="text">
                                        It appears that you have created this
                                        account using single sign-on. You’ll
                                        have to set a new password first.
                                    </div>
                                    <div
                                        style={{
                                            'text-align': ' left;',
                                        }}
                                    >
                                        <button
                                            class="Button Button--large"
                                            type="button"
                                        >
                                            <div class="Button__bg"></div>
                                            <div class="Button__content">
                                                Set New Password
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )}
                            {type === 'notifications' && (
                                <div class="settingsContent">
                                    <h1>Notifications</h1>
                                    <div class="head">
                                        Select which type of communication you
                                        would like to receive from Tubi.{' '}
                                    </div>

                                    <div class="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="Weekly newsletter"
                                                checked=""
                                            />
                                            Weekly newsletter
                                        </label>
                                    </div>

                                    <div class="btnArea">
                                        <button class="Button Button--large">
                                            <div class="Button__bg"></div>
                                            <div class="Button__content">
                                                Save
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )}
                            {type === 'history' && (
                                <div class="historyMain settingsContent">
                                    <h1>Continue Watching &amp; My List</h1>
                                    <div class="text">
                                        Manage your Watching History and List
                                    </div>
                                    <div class="contentArea">
                                        <div class="tabsMain">
                                            <ul class="tabs">
                                                <li
                                                    data-index="0"
                                                    class={`tabHeader ${
                                                        historyOrMyList ===
                                                        'history'
                                                            ? 'active'
                                                            : ''
                                                    }`}
                                                    onClick={() => {
                                                        this.setState({
                                                            historyOrMyList:
                                                                'history',
                                                        });
                                                    }}
                                                >
                                                    CONTINUE WATCHING
                                                </li>
                                                <li
                                                    data-index="1"
                                                    class={`tabHeader ${
                                                        historyOrMyList ===
                                                        'mylist'
                                                            ? 'active'
                                                            : ''
                                                    }`}
                                                    onClick={() => {
                                                        this.setState({
                                                            historyOrMyList:
                                                                'mylist',
                                                        });
                                                    }}
                                                >
                                                    MY LIST
                                                </li>
                                            </ul>
                                            <div class="panelContainer">
                                                <div className="results-list">
                                                    <div class="panelContainer">
                                                        <div class="table">
                                                            {historyOrMyList ===
                                                                'history' &&
                                                                userHistory.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => {
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
                                                            {historyOrMyList ===
                                                                'mylist' &&
                                                                myList.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => {
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
                                        </div>
                                        <div class="btnArea">
                                            <button class="Button Button--large largeBtn">
                                                <div class="Button__bg"></div>
                                                {historyOrMyList ===
                                                    'mylist' && (
                                                    <div
                                                        class="Button__content"
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
                                                )}
                                                {historyOrMyList ===
                                                    'history' && (
                                                    <div
                                                        class="Button__content"
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
                                                )}
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
