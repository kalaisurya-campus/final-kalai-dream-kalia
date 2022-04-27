import React, { Component } from 'react';
import Reviewapplication from '../../components/dreams/reviewapplication/Reviewapplication';
import {withRouter} from 'react-router-dom';
class Reviewapplications extends Component {
    render() {
        return (
            <div>
                <Reviewapplication/>
            </div>
        );
    }
}

export default withRouter(Reviewapplications);