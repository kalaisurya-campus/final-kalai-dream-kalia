import React, { Component } from 'react';
import Animated from '../../components/dreams/animated/Animated';
import {withRouter} from 'react-router-dom';
class Animateds extends Component {
    render() {
        return (
            <div>
                <Animated/>
            </div>
        );
    }
}

export default withRouter(Animateds);