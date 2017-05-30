import dispatcher from './dispatcher';

export function appendCalculatorData(text) {
    dispatcher.dispatch({
        type: 'APPEND_DATA',
        text
    })
}

export function clearCalculatorData() {
    dispatcher.dispatch({
        type: 'CLEAR_DATA'
    })
}

export function calculateCalculatorData() {
    dispatcher.dispatch({
        type: 'CALCULATE_DATA'
    })
}

export function clearRecentData() {
    dispatcher.dispatch({
        type: 'CLEAR_RECENT'
    })
}