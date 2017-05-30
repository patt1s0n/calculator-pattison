import React from "react";

import * as CalculatorActions from './CalculatorActions';

export default class OperatorButton extends React.Component {
    render() {
        return (
            <button value={this.props.buttonValue} className="btn btn-primary"
                    onClick={this.appendCalculatorData.bind(this)}>
                {this.props.buttonName}
            </button>
        )
    }

    appendCalculatorData() {
        CalculatorActions.appendCalculatorData({
            value: this.props.buttonValue,
            operatorButton: true
        });
    }
}