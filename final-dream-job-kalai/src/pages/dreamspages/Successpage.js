import React, { Component } from 'react';
import Success from '../../components/dreams/success/Success';
import {withRouter} from 'react-router-dom';
class Successpage extends Component {
    render() {
        return (
            <div>
                <Success/>
            </div>
        );
    }
}

export default withRouter(Successpage);