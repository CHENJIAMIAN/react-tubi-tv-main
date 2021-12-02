import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="Container container">
                    <div className="Row topRow">

                        <div className="Col Col--4 Col--lg-3 Col--xl-1-5 Col--xxl-2 followUs">
                            <div className="followUsContainer">
                            </div>
                        </div>
                    </div>
                    <div className="bottomSection">
                        <div className="finePrint">
                            <div className="copyright">
                                <div>Copyright © 2021 XXX, Inc.</div>
                                <div>
                                    XXX is a registered trademark of XXX, Inc.
                                    <br />
                                    All rights reserved.
                                </div>
                            </div>
                        </div>
                        <div className="signature">
                            Made with
                            <svg
                                className="svgIcon"
                                preserveAspectRatio="xMidYMid meet"
                                style={{ fill: 'currentcolor' }}
                                viewBox="0 0 10 9"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M9.024 2.58C8.88 1.163 7.87 0 6.448 0c-.766 0-1.453.335-1.924.866C4.05.336 3.364 0 2.6 0 1.175 0 .165 1.162.023 2.58c-.11 1.086.132 2.537 1.197 3.91 1.106 1.424 2.946 2.318 2.946 2.318.227.115.48.103.694 0 0 0 1.86-.894 2.967-2.318C8.89 5.117 9.132 3.666 9.024 2.58"
                                ></path>
                            </svg>
                            in San Francisco
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
