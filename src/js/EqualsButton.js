import React from "react";

import * as CalculatorActions from './CalculatorActions';

export default class EqualsButton extends React.Component {
    render() {
        return (
            <button value={this.props.buttonValue} className="btn btn-primary" id="equalsButton"
                    onClick={this.calculate.bind(this)}>
                {this.props.buttonName}
            </button>
        )
    }

    calculate() {
        CalculatorActions.calculateCalculatorData();
    }
}