import React, {Component} from 'react';

import ReplacedText from './ReplacedText'

class Home extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {currentPage: 'main'}
    // }


    render() {
        return (
            // <div className="uk-section-primary tm-section-texture">

            // <Nav/>
            <div>

                <div className="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center"
                     data-uk-height-viewport="offset-top: true; offset-bottom: true">
                    <div className="uk-width-1-1">
                        <div className="uk-container">
                            <img src="http://icons.veryicon.com/png/Animal/Animal%201/cardinal.png" alt="cardinal"
                                 style={{width:'15%'}}/>
                            <ReplacedText/>
                            <div className="uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center"
                                 data-uk-grid>
                                <div>
                                    <a className="uk-button uk-button-primary tm-button-primary uk-button-large tm-button-large uk-visible@s"
                                       href="./docs">Get Started</a>
                                    <a className="uk-button uk-button-primary tm-button-primary uk-hidden@s"
                                       href="./docs">Get Started</a>
                                </div>
                                <div>
                                    <a className="uk-button uk-button-default tm-button-default uk-button-large tm-button-large uk-visible@s"
                                       href="https://github.com/uikit/uikit">Github</a>
                                    <a className="uk-button uk-button-default tm-button-default uk-hidden@s"
                                       href="https://github.com/uikit/uikit">Github</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="uk-section-small">
                    <div className="uk-container uk-container-expand uk-text-center uk-position-relative">

                        <ul className="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom"
                            data-uk-margin>
                            <li>
                                <span>Version <span data-uikit-version></span></span>
                            </li>
                            <li>
                                <a href="https://github.com/uikit/uikit/stargazers"><span
                                    className="uk-margin-small-right" data-uk-icon="icon: star"></span><span
                                    data-uikit-stargazers>8100</span> Stargazers</a>
                            </li>
                            <li>
                                <a className="uk-text-lowercase" href="https://twitter.com/getuikit"><span
                                    className="uk-margin-small-right" data-uk-icon="icon: twitter"></span>@getuikit</a>
                            </li>
                            <li>
                                <a href="https://gitter.im/uikit/uikit"><span className="uk-margin-small-right"
                                                                              data-uk-icon="icon: gitter"></span>Community</a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

        );
    }
}

export default Home;
