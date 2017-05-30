import React from "react";

import * as CalculatorActions from './CalculatorActions';

export default class Button extends React.Component {
    render() {
        return (
            <button value={this.props.buttonValue} className="btn btn-primary" id={'button-' + this.props.buttonName}
                    onClick={this.appendData.bind(this)}>
                {this.props.buttonName}
            </button>
        )
    }

    appendData() {
        CalculatorActions.appendCalculatorData({value: this.props.buttonValue});
    }
}