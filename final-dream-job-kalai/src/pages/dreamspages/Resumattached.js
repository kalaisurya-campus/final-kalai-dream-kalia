import React, { Component } from 'react';
import Resumeattach from '../../components/dreams/resumattach/Resumeattach';
import {withRouter} from 'react-router-dom';
class Resumattached extends Component {
    render() {
        return (
            <div>
                <Resumeattach/>
            </div>
        );
    }
}

export default withRouter(Resumattached);