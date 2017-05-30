import React from "react";

import * as CalculatorActions from './CalculatorActions';

export default class ClearAllButton extends React.Component {
    render() {
        return (
            <button value={this.props.buttonValue} className="btn btn-primary"
                    onClick={this.clearCalculatorData.bind(this)}>
                {this.props.buttonName}
            </button>
        )
    }

    clearCalculatorData() {
        CalculatorActions.clearCalculatorData();
    }
}