import {FETCH_EXCHANGE_RATE} from "./types";
import {AppDispatch} from "./store";


export function fetchExchangeRate () {
  return async (dispatch: AppDispatch) => {
    const api = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    const response = await fetch(api);
    const exchangeRates = await response.json();
    dispatch({
      type: FETCH_EXCHANGE_RATE,
      payload: exchangeRates,
    })
  }
}