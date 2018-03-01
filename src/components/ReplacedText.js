import React, {Component} from 'react';
import $ from 'jquery'
import MainPoint from './MainPoint'
import AnimatedText from './AnimatedText'

class ReplacedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: 100,
            usedComponent: 'main_point'
        };
        this.timer = this.timer.bind(this);
        // Operations usually carried out in componentWillMount go here
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    componentWillUpdate() {
        $('.wr-api-replaced-text').removeClass('animated slideOutLeft');
        $('.wr-api-replaced-text').addClass('animated slideInRight');
    }

    componentDidUpdate() {
        $('.wr-api-replaced-text').removeClass('animated slideOutLeft');
        $('.wr-api-replaced-text').addClass('animated slideInRight');
        // $('.wr-api-replaced-text').addClass('animated slideInLeft');
        // this.renderD3(this.props.id + this.state.name);
    }

    componentDidMount() {
        var intervalId = setInterval(this.timer, 15000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    timer() {
        var newCount = this.state.currentCount - 1;

        console.log(this.state);

        console.log(this.state.usedComponent === 'typist');
        $('.wr-api-replaced-text').removeClass('animated slideInLeft');
        $('.wr-api-replaced-text').addClass('animated slideOutLeft');
        setTimeout(() => {
            if (this.state.usedComponent === 'typist') {
                this.setState({currentCount: newCount, usedComponent: 'main_point'});
            } else {
                this.setState({currentCount: newCount, usedComponent: 'typist'});
            }
        }, 1000);
    }


    render() {
        if (this.state.usedComponent === 'main_point') {
            return (<div key="MainPoint" className="wr-api-replaced-text"><MainPoint/></div>)
        } else {
            return (<div key="AnimatedText" className="wr-api-replaced-text"><AnimatedText/></div>)
        }

    }
}

export default ReplacedText