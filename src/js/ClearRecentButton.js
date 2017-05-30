import React from "react";

import * as CalculatorActions from './CalculatorActions';

export default class ClearRecentButton extends React.Component {
    render() {
        return (
            <button value={this.props.buttonValue} className="btn btn-primary"
                    onClick={this.clearRecent.bind(this)}>
                {this.props.buttonName}
            </button>
        )
    }

    clearRecent() {
        CalculatorActions.clearRecentData();
    }
}