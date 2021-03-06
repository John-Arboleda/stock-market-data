import { v4 as uuidv4 } from 'uuid';
import fetchData from '../APIcall';

const GET_STOCKS = 'stock-market-data/stocks/GET_STOCKS';

const initialState = [];

let isLoading = false;

export const getStocks = (sector) => async (dispatch) => {
  if (isLoading) return;
  const result = await fetchData();
  const stocks = result
    .filter((stock) => stock.sector === sector)
    .map((stock) => ({
      stock_id: uuidv4(),
      symbol: stock.symbol,
      company_name: stock.companyName,
      stock_price: `$ ${stock.price.toFixed(2)}`,
      market_cap: stock.marketCap,
    }));
  dispatch({
    type: GET_STOCKS,
    payload: stocks,
  });
  isLoading = true;
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCKS:
      return action.payload;
    default:
      return state;
  }
};

export { GET_STOCKS };
export default stocksReducer;
