import React, { Component } from 'react';
import LoginSample from '../../components/dreams/samplelogin_form/LoginSample';
import {withRouter} from 'react-router-dom';
class SamplesLogin extends Component {
    render() {
        return (
            <div>
                <LoginSample/>
            </div>
        );
    }
}

export default withRouter(SamplesLogin);