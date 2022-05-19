import { v4 as uuidv4 } from 'uuid';
import fetchData from '../APIcall';

const GET_SECTORS = 'stock-market-data/sectors/GET_SECTORS';

const initialState = [];

let isLoading = false;

export const getSectors = () => async (dispatch) => {
  if (isLoading) return;
  const result = await fetchData();
  const uniqueSectors = [...new Set(result.map((data) => (data.sector)))];
  const sectors = uniqueSectors.map((sector) => ({
    sector_id: uuidv4(),
    sector_name: sector,
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
