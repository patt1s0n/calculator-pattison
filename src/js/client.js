import React from "react";
import ReactDOM from "react-dom";

import Button from './Button';
import EqualsButton from './EqualsButton';
import OperatorButton from './OperatorButton';
import ClearAllButton from './ClearAllButton';
import ClearRecentButton from './ClearRecentButton';
import CalculatorStore from './CalculatorStore';

class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            calculatorState: CalculatorStore.getAllData(),
            calculatorSubState: CalculatorStore.getSubData(),
            calculatorShowAllData: CalculatorStore.getShowAllData()
        }
    }

    componentWillMount() {
        CalculatorStore.on('change', () => {
            this.setState({
                calculatorState: CalculatorStore.getAllData(),
                calculatorSubState: CalculatorStore.getSubData(),
                calculatorShowAllData: CalculatorStore.getShowAllData()
            })
        })
    }

    render() {
        let calcState;
        if (this.state.calculatorShowAllData) {
            calcState = this.state.calculatorState;
        } else {
            calcState = '';
        }

        return (
            <div className="container">
                <div className="row">
                    <div id="calculator" className="col-lg-5 col-lg-offset-3">
                        <div className="col-lg-12 text-center" id="calc-heading">
                            PATTISON CALCULATOR
                        </div>
                        <div id="values" className="col-lg-12">
                            <div id="subBox" className="col-lg-12">
                                {this.state.calculatorSubState}
                            </div>
                            <div id="valueBox" className="col-lg-12">
                                {calcState}
                            </div>
                        </div>
                        <div className="col-lg-12 button-row">
                            <div className="col-lg-3">
                                <ClearAllButton buttonName="AC" buttonValue="AC"/>
                            </div>
                            <div className="col-lg-3">
                                <ClearRecentButton buttonName="CE" buttonValue="CE"/>
                            </div>
                            <div className="col-lg-3">
                                <OperatorButton buttonName="÷" buttonValue="/"/>
                            </div>
                            <div className="col-lg-3">
                                <OperatorButton buttonName="x" buttonValue="*"/>
                            </div>
                        </div>
                        <div className="col-lg-12 button-row">
                            <div className="col-lg-3">
                                <Button buttonName="7" buttonValue="7"/>
                            </div>
                            <div className="col-lg-3">
                                <Button buttonName="8" buttonValue="8"/>
                            </div>
                            <div className="col-lg-3">
                                <Button buttonName="9" buttonValue="9"/>
                            </div>
                            <div className="col-lg-3">
                                <OperatorButton buttonName="-" buttonValue="-"/>
                            </div>
                        </div>
                        <div className="col-lg-12 button-row">
                            <div className="col-lg-3">
                                <Button buttonName="4" buttonValue="4"/>
                            </div>
                            <div className="col-lg-3">
                                <Button buttonName="5" buttonValue="5"/>
                            </div>
                            <div className="col-lg-3">
                                <Button buttonName="6" buttonValue="6"/>
                            </div>
                            <div className="col-lg-3">
                                <OperatorButton buttonName="+" buttonValue="+"/>
                            </div>
                        </div>
                        <div className="col-lg-12 button-row">
                            <div className="col-lg-3">
                                <Button buttonName="1" buttonValue="1"/>
                            </div>
                            <div className="col-lg-3">
                                <Button buttonName="2" buttonValue="2"/>
                            </div>
                            <div className="col-lg-3">
                                <Button buttonName="3" buttonValue="3"/>
                            </div>
                            <div className="col-lg-3">
                                <EqualsButton buttonName="=" buttonValue="="/>
                            </div>
                        </div>
                        <div className="col-lg-12 button-row">
                            <div className="col-lg-6">
                                <Button buttonName="0" buttonValue="0"/>
                            </div>
                            <div className="col-lg-3">
                                <Button buttonName="." buttonValue="."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
