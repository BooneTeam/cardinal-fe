import React, {Component} from 'react';
import {getApiServices} from '../utils/wr_api_api'


class ApiList extends Component {

    constructor(props) {
        super(props);
        this.state = {apiServices: []}

    }

    getApiServicesData() {
        getApiServices().then((apiServices) => {
            this.setState({apiServices});
        });
    }

    componentDidMount() {
        this.getApiServicesData()
    }


    render() {

        const {apiServices} = this.state;
        console.log(apiServices)
        let services = apiServices.map(function(service){
            return<div>{service.Name}</div>
        });

        return (
            <div>
                <div className="tm-sidebar-left">
                    <h3>Getting Started</h3>
                    <ul className="uk-nav uk-nav-default tm-nav">
                        <li className="uk-nav-header">Account</li>
                        <li className=""><a href="/docs/introduction">API's</a></li>
                        <li className=""><a href="/docs/introduction">Apps</a></li>
                        <li className=""><a href="/docs/introduction">Add Ons</a></li>
                        <li className=""><a href="/docs/introduction">Account</a></li>
                        <li className="uk-nav-header">Setup</li>
                        <li className=""><a href="/docs/introduction">Installation</a></li>
                        <li className=""><a href="/docs/introduction">Documentation</a></li>
                        <li className=""><a href="/docs/introduction">Contributing</a></li>
                        <li className="uk-nav-header">Available API's</li>
                        <li className=""><a href="/docs/installation"></a></li>
                        <li className=""><a href="/docs/less"></a>All</li>
                        <li className=""><a href="/docs/less"></a>Advertising</li>
                        <li className=""><a href="/docs/less"></a>Ecommerce</li>
                        <li className=""><a href="/docs/less"></a>Payments</li>
                        <li className=""><a href="/docs/less"></a>Misc</li>
                    </ul>
                </div>

                <div className="uk-section uk-section-small uk-text-center tm-main"
                     data-uk-height-viewport="offset-top: true; offset-bottom: true">
                    <div className="uk-container uk-section uk-section-small uk-flex uk-flex-center uk-text-center">
                        <form className="uk-search uk-search-large">
                            <span data-uk-search-icon></span>
                            <input className="uk-search-input" type="search" placeholder="Search..."/>
                        </form>
                        {services}
                    </div>
                    <div className="uk-container uk-section uk-section-small uk-flex uk-flex-center">
                        <div className="uk-child-width-1-4@m  uk-child-width-1-6@l uk-grid-small uk-grid-match"
                             data-uk-grid>
                            <div>
                                <div className="uk-card-small wr-faded-blue uk-card-body">
                                    <h3 className="uk-card-title">Twitter</h3>
                                    <img alt='Twitter' src="https://image.flaticon.com/icons/svg/124/124021.svg"/>
                                    <div className="uk-align-left">
                                        <canvas data-uk-icon="icon: plus-circle" width="20" height="20"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card-small uk-card-secondary uk-card-body">
                                    <h3 className="uk-card-title">AWS</h3>
                                    <img alt='AWS' src="https://image.flaticon.com/icons/svg/124/124022.svg"/>
                                    <div className="uk-align-left">
                                        <canvas data-uk-icon="icon: plus-circle" width="20" height="20"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card-small wr-faded-blue uk-card-body">
                                    <h3 className="uk-card-title">Lightspeed</h3>
                                    <img alt='Lightspeed'
                                         src="https://pbs.twimg.com/profile_images/524896501294583808/k7Wj9quA.jpeg"/>
                                    <div className="uk-align-left">
                                        <canvas data-uk-icon="icon: plus-circle" width="20" height="20"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card-small wr-faded-blue uk-card-body">
                                    <h3 className="uk-card-title">Shopify</h3>
                                    <img alt='Lightspeed'
                                         src="https://image.flaticon.com/icons/svg/196/196572.svg"/>
                                    <div className="uk-align-left">
                                        <canvas data-uk-icon="icon: plus-circle" width="20" height="20"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card-small uk-card-secondary uk-card-body">
                                    <h3 className="uk-card-title">Flickr</h3>
                                    <img alt='Flickr' src="https://image.flaticon.com/icons/svg/124/124014.svg"/>
                                    <div className="uk-align-left">
                                        <canvas data-uk-icon="icon: plus-circle" width="20" height="20"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card-small wr-faded-blue uk-card-body">
                                    <h3 className="uk-card-title">LinkedIn</h3>
                                    <img alt='LinkedIn' src="https://image.flaticon.com/icons/svg/124/124011.svg"/>
                                    <div className="uk-align-left">
                                        <canvas data-uk-icon="icon: plus-circle" width="20" height="20"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card-small uk-card-secondary">
                                    <div className="uk-card-header">
                                        <h3 className="uk-card-title">Pinterest</h3>
                                    </div>
                                    <div className="uk-card-body">
                                    <img  alt='Pinterest' src="https://image.flaticon.com/icons/svg/124/124039.svg"/>
                                </div>
                                <div className="uk-card-footer uk-align-left">
                                    <canvas data-uk-icon="icon: plus-circle" width="20" height="20"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
    }


}

export default ApiList;