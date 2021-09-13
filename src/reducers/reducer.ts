import { Action, ActionTypes, CoinData } from "../actions/action"

export type State = {
    coin: CoinData
}

const initialState = {
    coin: {
        name: "",
        image: "",
        price: 0
    }
}

export default function Reducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.COIN_RETRIEVED:
            return { ...state, coin: action.payload }
        case ActionTypes.FAIL_ACTION:
            alert("Error")
            return state
        default:
            return state
    }
}