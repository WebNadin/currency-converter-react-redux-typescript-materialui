import {FETCH_EXCHANGE_RATE} from "./types";

export interface IExchangeRate {
  ccy: string,
  base_ccy: string,
  buy: string,
  sale: string,
}

export interface FetchExchangeRateAction {
  type: typeof FETCH_EXCHANGE_RATE;
  payload: IExchangeRate[];
}

export type FetchExchangeRateState = {
  fetchedExchangeRates: IExchangeRate[];
};

export const converterReducer = (state: FetchExchangeRateState= {fetchedExchangeRates: []}, action: FetchExchangeRateAction) => {
  switch (action.type) {
    case FETCH_EXCHANGE_RATE:
    return {...state, fetchedExchangeRates: action.payload};
    default:
      return state;
  }
}