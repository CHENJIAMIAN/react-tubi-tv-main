import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div class="footer">
                <div class="Container container">
                    <div class="Row topRow">
                        <div class="iconAndPath">
                            <a class="ATag homeLink" href="/home">
                                <svg
                                    class="svgIcon tubi tubiIcon"
                                    preserveAspectRatio="xMidYMid meet"
                                    style={{ fill: 'currentcolor' }}
                                    viewBox="0 0 105 44"
                                >
                                    <path
                                        d="M55.5 12h-7v16a8 8 0 11-16 0V13a1 1 0 00-1-1h-7v16a16 16 0 0032 0V13a1 1 0 00-1-1zM24.1 40.96l-3.03-5.21a1 1 0 00-1.27-.42A8.05 8.05 0 018.54 28v-7a1 1 0 011-1H19.6a1 1 0 001-1v-6a1 1 0 00-1-1H9.54a1 1 0 01-1-1V1a1 1 0 00-1-1H.5v28c0 8.84 7.2 16 16.08 16 2.54 0 4.95-.59 7.1-1.64a1 1 0 00.42-1.4zM100.5 0a4 4 0 100 8 4 4 0 000-8zm3 12h-7v31a1 1 0 001 1h6a1 1 0 001-1V13a1 1 0 00-1-1zm-27 24a8 8 0 110-16 8 8 0 010 16zm0-24c-2.35 0-4.58.5-6.59 1.42a1 1 0 01-1.41-.92V1a1 1 0 00-1-1h-7v28a16 16 0 1016-16z"
                                        fill="currentcolor"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div class="breadcrumbWrapper"></div>
                        <div class="Col Col--4 Col--lg-3 Col--xl-1-5 Col--xxl-2 followUs">
                            <div class="followUsContainer">
                                <div class="iconsRow">
                                    <a
                                        href="https://www.facebook.com/tubitv"
                                        rel="noopener"
                                        target="_blank"
                                        class="ATag facebookIcon"
                                    >
                                        <svg
                                            class="svgIcon facebook"
                                            preserveAspectRatio="xMidYMid meet"
                                            style={{ fill: 'currentcolor' }}
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill="currentColor"
                                                fill-rule="evenodd"
                                                d="M2 0C.938 0 0 1.063 0 1.97v16.093C0 19.03 1.063 20 2 20h9v-8H8V9h3V7c-.318-2.573 1.26-3.98 4-4 .668.02 1.617.103 2 0v3h-2c-.957-.16-1.2.436-1 1v2h3l-1 3h-2v8h3.938c1.03 0 2.062-.938 2.062-1.938V1.97C20 1.03 18.937 0 17.937 0H2z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/tubi"
                                        rel="noopener"
                                        target="_blank"
                                        class="ATag instagramIcon"
                                    >
                                        <svg
                                            class="svgIcon"
                                            preserveAspectRatio="xMidYMid meet"
                                            style={{ fill: 'currentcolor' }}
                                            viewBox="0 0 20 20"
                                        >
                                            <g
                                                fill="currentColor"
                                                fill-rule="evenodd"
                                            >
                                                <path d="M10 0C7.284 0 6.944.012 5.877.06 4.813.11 4.087.278 3.45.525c-.658.256-1.216.598-1.772 1.153C1.123 2.234.78 2.792.525 3.45.278 4.086.11 4.812.06 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.05 1.065.218 1.79.465 2.428.256.658.598 1.216 1.153 1.77.556.558 1.114.9 1.772 1.155.636.248 1.363.417 2.427.464 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c1.064-.048 1.79-.217 2.428-.465.658-.255 1.216-.597 1.77-1.154.558-.554.9-1.112 1.155-1.77.248-.636.417-1.362.464-2.427.048-1.066.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.048-1.065-.217-1.79-.465-2.427-.255-.658-.597-1.216-1.154-1.772-.554-.555-1.112-.897-1.77-1.153C15.915.278 15.188.11 14.124.06 13.057.012 12.716 0 10 0m0 2c2.606 0 2.914.01 3.943.057.952.044 1.468.202 1.812.336.455.177.78.39 1.123.73.34.34.552.667.73 1.12.133.346.292.862.335 1.814C17.99 7.087 18 7.394 18 10s-.01 2.914-.057 3.943c-.043.952-.202 1.468-.335 1.812-.178.455-.39.78-.73 1.123-.343.34-.668.552-1.123.73-.344.133-.86.292-1.812.335-1.03.047-1.337.057-3.943.057s-2.914-.01-3.943-.057c-.952-.043-1.468-.202-1.813-.335-.454-.178-.78-.39-1.12-.73-.342-.343-.554-.668-.73-1.123-.135-.344-.293-.86-.337-1.812C2.01 12.913 2 12.606 2 10s.01-2.914.057-3.943c.044-.952.202-1.468.336-1.813.177-.454.39-.78.73-1.12.34-.342.667-.554 1.12-.73.346-.135.862-.293 1.814-.337C7.087 2.01 7.394 2 10 2"></path>
                                                <path d="M10 13c-1.657 0-3-1.343-3-3 0-1.656 1.343-3 3-3s3 1.344 3 3c0 1.657-1.343 3-3 3m0-8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m6 0c0 .553-.447 1-1 1-.553 0-1-.447-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://twitter.com/tubi"
                                        rel="noopener"
                                        target="_blank"
                                        class="ATag twitterIcon"
                                    >
                                        <svg
                                            class="svgIcon"
                                            preserveAspectRatio="xMidYMid meet"
                                            style={{ fill: 'currentcolor' }}
                                            viewBox="0 0 20 17"
                                        >
                                            <path
                                                d="M6 17c7.837 0 11.965-6.156 12-11-.035-.67-.035-.844 0-1 .756-.59 1.45-1.297 2-2-.75.218-1.543.433-2 1 .5-.978 1.14-1.77 1-3-.358.763-1.24 1.095-2 1C15.29.647 12.69.568 11 2c-1.03 1.084-1.48 2.555-1 4-3.45-.204-6.524-1.74-9-4C.303 3.584.86 5.945 3 7c-.99.11-1.63-.062-2 0-.2 1.6 1.178 3.255 3 4-.512-.202-1.146-.178-2 0 .777 1.35 2.318 2.478 4 3-1.38.635-3.175 1.246-5 1-.35.244-.675.223-1 0 1.877 1.37 4.06 2 6 2"
                                                fill="currentColor"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/tubi-tv/"
                                        rel="noopener"
                                        target="_blank"
                                        class="ATag linkedInIcon"
                                    >
                                        <svg
                                            class="svgIcon"
                                            preserveAspectRatio="xMidYMid meet"
                                            style={{ fill: 'currentcolor' }}
                                            viewBox="0 0 15 15"
                                        >
                                            <path d="M13.89 0H1.11A1.1 1.1 0 0 0 0 1.08v12.84A1.1 1.1 0 0 0 1.11 15h12.78A1.1 1.1 0 0 0 15 13.92V1.08A1.1 1.1 0 0 0 13.89 0zM4 13H2V5h2zm0-9H2V2h2zm9 9h-2.24V9.2c0-.91 0-2.07-1.17-2.07s-1.35 1-1.35 2V13H6V5.19h2.15v1.07A2.33 2.33 0 0 1 10.31 5C12.58 5 13 6.62 13 8.72z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Row lineRow">
                        <div class="Col Col--4 Col--lg-3 Col--xl-1-5 Col--xxl-2 line"></div>
                        <div class="Col Col--4 Col--lg-3 Col--xl-1-5 Col--xxl-2 line"></div>
                    </div>
                    <div class="Row listContainer">
                        <div class="Col Col--4 Col--lg-3 Col--xl-1-5 Col--xxl-2">
                            <ul class="links">
                                <li class="lh">COMPANY</li>
                                <li>
                                    <a
                                        href="https://corporate.tubitv.com"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://corporate.tubitv.com/company/careers/"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://corporate.tubitv.com/company/contact-us/"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="Col Col--4 Col--lg-3 Col--xl-1-5 Col--xxl-2">
                            <ul class="links">
                                <li class="lh">SUPPORT</li>
                                <li>
                                    <a class="ATag" href="/static/support">
                                        Contact Support
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://helpcenter.tubitv.com/web"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a class="ATag" href="/static/devices">
                                        Supported Devices
                                    </a>
                                </li>
                                <li>
                                    <a class="ATag" href="/activate">
                                        Activate Your Device
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="Col Col--4 Col--lg-3 Col--xl-1-5 Col--xxl-2">
                            <ul class="links">
                                <li class="lh">PARTNERS</li>
                                <li>
                                    <a
                                        href="https://corporate.tubitv.com/partners/advertisewithus/"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        Advertise with Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="ATag"
                                        href="mailto:partnerships@tubi.tv"
                                    >
                                        Partner with Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="Col Col--4 Col--lg-3 Col--xl-1-5 Col--xxl-2">
                            <ul class="links">
                                <li class="lh">GET THE APPS</li>
                                <li>
                                    <a
                                        href="https://itunes.apple.com/app/tubi-tv-watch-free-movies/id886445756?mt=8"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        iOS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.tubitv"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        Android
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://channelstore.roku.com/details/41468/tubi-tv"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        Roku
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.amazon.com/Tubi-Inc-Free-Movies-TV/dp/B075NTHVJW"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        Amazon Fire
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="Col Col--4 Col--lg-3 Col--xl-1-5 Col--xxl-2">
                            <ul class="links">
                                <li class="lh">PRESS</li>
                                <li>
                                    <a
                                        href="https://corporate.tubitv.com/press-releases/"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        Press Releases
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://corporate.tubitv.com/press-releases/tubi-in-the-news/"
                                        rel="noopener"
                                        target="_self"
                                        class="ATag"
                                    >
                                        Tubi in the News
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="Col Col--4 Col--lg-3 Col--xl-1-5 Col--xxl-2">
                            <ul class="links">
                                <li class="lh">LEGAL</li>
                                <li>
                                    <a class="ATag" href="/static/privacy">
                                        Privacy Policy (Updated)
                                    </a>
                                </li>
                                <li>
                                    <a class="ATag" href="/static/terms">
                                        Terms of Use (Updated)
                                    </a>
                                </li>
                                <li>
                                    <a class="ATag" href="/privacy/donotsell">
                                        Do Not Sell My Personal Information
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="bottomSection">
                        <div class="downloadLinks">
                            <a
                                href="https://itunes.apple.com/app/tubi-tv-watch-free-movies/id886445756?mt=8"
                                rel="noopener"
                                target="_blank"
                                class="ATag appStoreBadge"
                            >
                                <img
                                    src="//d0.tubitv.com/web-k8s/dist/img/fe61624a15f4.svg"
                                    alt="App Store - Apple"
                                ></img>
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.tubitv"
                                rel="noopener"
                                target="_blank"
                                class="ATag googleBadge"
                            >
                                <img
                                    src="//d0.tubitv.com/web-k8s/dist/img/c7a700d8388d.svg"
                                    alt="Google Play"
                                ></img>
                            </a>
                        </div>
                        <div class="finePrint">
                            <div class="copyright">
                                <div>Copyright © 2021 Tubi, Inc.</div>
                                <div>
                                    Tubi is a registered trademark of Tubi, Inc.{' '}
                                    <br />
                                    All rights reserved.
                                </div>
                            </div>
                            <div class="additionalFinePrint">
                                Device ID: 37611f93-1966-4b56-b828-f5fb779a42b0
                            </div>
                        </div>
                        <div class="signature">
                            Made with
                            <svg
                                class="svgIcon"
                                preserveAspectRatio="xMidYMid meet"
                                style={{ fill: 'currentcolor' }}
                                viewBox="0 0 10 9"
                            >
                                <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
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
