import React, { Component } from 'react';
import FormCode from '../../components/dreams/fomrvalidationcode/FormCode';
import {withRouter} from 'react-router-dom';
class FormCodes extends Component {
    render() {
        return (
            <div>
                <FormCode/>
            </div>
        );
    }
}

export default withRouter(FormCodes);