import React, { Component } from 'react';
import Jobsapply from '../../components/dreams/jobsapply/Jobsapply';
import {withRouter} from 'react-router-dom';
class JobsApplypage extends Component {
    render() {
        return (
            <div>
                <Jobsapply/>
            </div>
        );
    }
}

export default withRouter(JobsApplypage);