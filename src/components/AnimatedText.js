import React, {Component} from 'react';

import Typist from 'react-typist';

class AnimatedText extends Component {

    render() {
        return (
            // <p className="uk-margin-medium uk-text-lead wr-api-text-lead">
            //     ONE ENDPOINT FOR ALL API CALLS<br className="uk-visible@s"/>
            //     PICK AN API, CREATE AN ACTION, SEND YOUR PAYLOAD
            //     <br/>WE'LL TAKE CARE OF THE REST</p>
            <div className="uk-margin-medium uk-text-lead wr-api-text-lead">
                <Typist id="wr-api-typist-front">
                    $ npm install cardinal_api_js
                    <br />
                    <br />
                    CardinalAPI.post("AWS","s3","create_entry", <br/>
                    payload: id: 1, name: "Anything", description:
                    "neato
                    mosquito. bzzzz")
                    <br />
                    <br />
                </Typist>
            </div>
        );
    }
}

export default AnimatedText
