import React, { Component } from 'react';
import Jobsforyou from '../../components/dreams/jobsforyou/Jobsforyou';
import {withRouter} from 'react-router-dom';
class Jobsforyous extends Component {
    render() {
        return (
            <div>
                <Jobsforyou/>
            </div>
        );
    }
}

export default withRouter(Jobsforyous);