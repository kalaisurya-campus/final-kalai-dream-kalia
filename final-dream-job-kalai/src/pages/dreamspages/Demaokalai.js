import React, { Component } from 'react';
import DemoSampleCodeFunction from '../../components/dreams/demoyourapplicaionsample/DemoSampleCodeFunction';
import { withRouter } from 'react-router';
class Demaokalai extends Component {
    render() {
        return (
            <div>
                <DemoSampleCodeFunction/>
            </div>
        );
    }
}

export default withRouter(Demaokalai);