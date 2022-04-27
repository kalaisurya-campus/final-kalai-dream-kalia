import React, { Component } from 'react';
import Yourapplication from '../../components/dreams/yourapplication/Yourapplication';
import {withRouter} from 'react-router-dom';
class Yourapplications extends Component {
    render() {
        return (
            <div>
                <Yourapplication/>
            </div>
        );
    }
}

export default withRouter(Yourapplications);