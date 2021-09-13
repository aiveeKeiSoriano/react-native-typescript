import axios from "axios";
import { Dispatch } from "redux";

export enum ActionTypes {
    FAIL_ACTION = "FAIL_ACTION",
    COIN_RETRIEVED = "COIN_RETRIEVED"
}

interface FailAction {
    type: ActionTypes.FAIL_ACTION
}

export type CoinData = {
    name: string,
    image: string,
    price: number
}

interface CoinRetrivedAction {
    type: ActionTypes.COIN_RETRIEVED,
    payload: CoinData
}

export type Action =  FailAction | CoinRetrivedAction

const API = "https://api.coingecko.com/api/v3/coins/markets?ids=smooth-love-potion&vs_currency=php";

export const failAction = (): FailAction => ({
    type: ActionTypes.FAIL_ACTION
})

export const coinRetrived = (data: CoinData): CoinRetrivedAction => ({
    type: ActionTypes.COIN_RETRIEVED,
    payload: data
})

interface Response {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    fully_diluted_valuation?: number,
    total_volume: number,
    high_24h: number,
    low_24h: number,
    price_change_24h: number,
    price_change_percentage_24h: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    circulating_supply: number,
    total_supply: number,
    max_supply?: number,
    ath: 19.97,
    ath_change_percentage: number,
    ath_date: string,
    atl: number,
    atl_change_percentage: number,
    atl_date: string,
    roi?: number,
    last_updated: string
}

export const fetchCoin = () => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            let response = await axios.get<Response[]>(API)
            dispatch(coinRetrived({name: response.data[0].name, image: response.data[0].image, price: response.data[0].current_price}))
        }
        catch (e) {
            dispatch(failAction())
        }
    }
}