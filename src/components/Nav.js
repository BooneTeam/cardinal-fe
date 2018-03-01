import React, {Component} from 'react';
import cardinalBlinkImage from '../cardinal-blink.png'
import {
    Link
} from 'react-router-dom'


class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardinalBlink: false,
            cardinalImg: "http://icons.veryicon.com/png/Animal/Animal%201/cardinal.png"

        };
        this.isBlinking = this.isBlinking.bind(this);
        this.timer = this.timer.bind(this);
    }


    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }


    componentDidMount() {
        var intervalId = setInterval(this.timer, 5000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    isBlinking() {
        return this.state.cardinalBlink ? "http://icons.veryicon.com/png/Animal/Animal%201/cardinal.png" : cardinalBlinkImage
    }

    timer() {
        let cardinalImg = this.isBlinking();
        this.setState({cardinalBlink: !this.state.cardinalBlink});
        this.setState({cardinalImg: cardinalImg});
        setTimeout(() => {
            let cardinalImg = this.isBlinking();
            this.setState({cardinalBlink: !this.state.cardinalBlink});
            this.setState({cardinalImg: cardinalImg});
        }, 115)
    }

    toggleListView() {
        this.props.setAnalyticViewType('student')
    }

    render() {
        const {isAuthenticated} = this.props.auth;

        return (
            <div className="uk-navbar-container tm-navbar-container" data-uk-sticky="media: 960"
                 style={{background:'#39f'}}>

                <div className="uk-container uk-container-expand">

                    <nav className="uk-navbar">

                        <div className="uk-navbar-left">
                            <Link to="/" className="uk-navbar-item uk-logo">
                                <img src={this.state.cardinalImg}
                                     alt="cardinal"
                                     style={{width:'15%'}}/>
                                <span className="wr-brand">CARDINAL</span>
                            </Link>
                        </div>

                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav uk-visible@m">
                                <li><Link to="/api-list" onClick={this.toggleApiListView}>API List</Link></li>
                                <li><a href="./docs/introduction">Documentation</a></li>
                                <li><a href="./docs/introduction">Contribute</a></li>
                            </ul>
                            {
                                !isAuthenticated() && (
                                    <div className="uk-navbar-item uk-visible@m">
                                        <a className="uk-button uk-button-default tm-button-default uk-icon"
                                           to="/download"
                                           data-activeClass="page-active" onClick={this.login.bind(this)}>
                                            <canvas data-uk-icon="icon: happy" width="20" height="20"></canvas>
                                            <span> Sign Up </span>
                                        </a>
                                    </div>)
                            }
                            {
                                !isAuthenticated() && (
                                    <div className="uk-navbar-item uk-visible@m">
                                        <a className="uk-button uk-button-default tm-button-default uk-icon"
                                           onClick={this.login.bind(this)}
                                           data-activeClass="page-active" onClick={this.login.bind(this)}>
                                            <canvas data-uk-icon="icon: happy" width="20" height="20"></canvas>
                                            <span> Log In </span>
                                        </a>
                                    </div>
                                )}
                            {
                                isAuthenticated() && (
                                    <div className="uk-navbar-item uk-visible@m">
                                        <a className="uk-button uk-button-default tm-button-default uk-icon"
                                           bsStyle="primary"
                                           onClick={this.logout.bind(this)}
                                        >
                                            <canvas data-uk-icon="icon: sign-in" width="20" height="20"></canvas>
                                            <span>Log Out</span>
                                        </a>
                                    </div>
                                )
                            }
                            <a className="uk-navbar-toggle uk-hidden@m" data-uk-navbar-toggle-icon href="#offcanvas"
                               data-uk-toggle></a>
                        </div>

                    </nav>

                </div>

            </div>
        )
    }
}

export default Nav