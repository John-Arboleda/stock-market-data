import { v4 as uuidv4 } from 'uuid';
import fetchData from '../APIcall';

const GET_SECTORS = 'stock-market-data/sectors/GET_SECTORS';

const initialState = [];

let isLoading = false;

const marketCapToStr = (data, sector) => {
  const marketCapNum = data
    .filter((company) => company.sector === sector)
    .map((company) => company.marketCap)
    .reduce((a, b) => a + b);
  return marketCapNum > 1000000000000
    ? `$ ${(marketCapNum / 1000000000000).toFixed(2)} T`
    : `$ ${(marketCapNum / 1000000000).toFixed(2)} B`;
};

export const getSectors = () => async (dispatch) => {
  if (isLoading) return;
  const result = await fetchData();

  const uniqueSectors = [...new Set(result.map((data) => (data.sector)))].filter((item) => item !== '');
  const sectors = uniqueSectors.map((sector) => ({
    sector_id: uuidv4(),
    sector_name: sector,
    sector_mkt_cap: marketCapToStr(result, sector),
    sector_num_stocks: result.filter((company) => company.sector === sector).length,
  }));
  dispatch({
    type: GET_SECTORS,
    payload: sectors,
  });
  isLoading = true;
};

const sectorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SECTORS:
      return action.payload;
    default:
      return state;
  }
};

export { GET_SECTORS };
export default sectorsReducer;
