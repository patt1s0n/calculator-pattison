import {EventEmitter} from 'events';
import dispatcher from './dispatcher';

class CalculatorStore extends EventEmitter {
    constructor() {
        super();
        this.calculatorData = '';
        this.calculatorSubData = '0';
        this.showAllData = true;
    }

    getAllData() {
        return this.calculatorData;
    }

    getSubData() {
        return this.calculatorSubData;
    }

    getShowAllData() {
        return this.showAllData;
    }

    appendCalculatorData(text) {
        let regex = /[\/+*]/g;

        if (!this.showAllData && !text.operatorButton) {
            this.calculatorSubData = text.value;
            this.calculatorData = text.value;
            this.showAllData = true;
        } else if (this.calculatorData === '' && regex.exec(text.value) !== null) {

        } else {
            if (this.calculatorSubData === '0'){
                this.calculatorSubData = '';
            }

            this.showAllData = true;
            const value = text.value;
            const regex = /[\/+\-*]/g;
            const regex1 = /[\/+\-*]/g;

            //If the value trying to be appended is an operator AND the last value is also an operator
            //We replace the last operator with the new one
            if (regex.exec(value) !== null && regex1.exec(this.calculatorData.substr(-1, 1)) !== null) {
                let split = this.calculatorData.split('');

                split.splice(-1, 1);

                let string = split.join('');

                this.calculatorData = string + value;
            } else {
                this.calculatorData = this.calculatorData + text.value;
            }

            this.handleSubData(text);
        }

        this.emit("change");
    }

    handleSubData(text) {
        const regex = /[\/+\-*]/g;

        if (regex.exec(this.calculatorSubData) !== null) {
            this.calculatorSubData = text.value;
        } else if (text.operatorButton) {
            this.calculatorSubData = text.value;
        } else {
            this.calculatorSubData = this.calculatorSubData + text.value;
        }
    }

    clearMostRecent() {
        if (this.showAllData) {
            let regex = /[\/+\-*]/g;
            this.calculatorSubData = '0';

            if (regex.exec(this.calculatorData.substr(-1, 1)) !== null) {
                this.calculatorData = this.calculatorData.substr(0, this.calculatorData.length - 1);
            } else {

                let dataPieces = this.calculatorData.split('');
                let position = null;
                let i = dataPieces.length;
                for (i; i > -1; i--) {
                    let regex = /[\/+\-*]/g;
                    if (regex.exec(dataPieces[i]) !== null) {
                        position = i;
                        break;
                    }
                }

                if (position === null) {
                    this.calculatorData = '';
                } else {
                    this.calculatorData = this.calculatorData.substr(0, position + 1);
                }
            }

            this.emit("change");
        }
    }

    calculateCalculatorData() {
        if (parseInt(this.calculatorData.substr(-1, 1))) {
            this.showAllData = false;
            this.calculatorSubData = eval(this.calculatorData);
            this.calculatorData = eval(this.calculatorData);

            //Cast it back to string so we can use substr in appendCalculatorData()
            this.calculatorData = this.calculatorData.toString();

            this.emit("change");
        }
    }

    clearCalculatorData() {
        this.calculatorData = '';
        this.calculatorSubData = '0';

        this.emit("change");
    }

    handleActions(action) {
        switch (action.type) {
            case 'APPEND_DATA':
                this.appendCalculatorData(action.text);
                break;
            case 'CALCULATE_DATA':
                this.calculateCalculatorData();
                break;
            case 'CLEAR_DATA':
                this.clearCalculatorData();
                break;
            case 'CLEAR_RECENT':
                this.clearMostRecent();
                break;
        }
    }
}

const calculatorStore = new CalculatorStore();
dispatcher.register(calculatorStore.handleActions.bind(calculatorStore));

export default calculatorStore;