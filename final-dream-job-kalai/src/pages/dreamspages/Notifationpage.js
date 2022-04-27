import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Notification from '../../components/dreams/notification/Notification';

class Notifationpage extends Component {
    render() {
        return (
            <div>
                <Notification/>
            </div>
        );
    }
}

export default withRouter(Notifationpage);