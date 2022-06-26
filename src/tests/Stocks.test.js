import stocksReducer, { GET_STOCKS } from '../redux/stocks/stocks';

describe('Get Sectors', () => {
  test('Action GET_STOCKS should return a list of stocks', () => {
    const initialState = [];
    const state = [
      {
        stock_id: '1',
        symbol: 'AAPL',
        company_name: 'Apple Inc.',
        stock_price: 140,
        market_cap: 223000000,
        sector: 'Technology',
      },
      {
        stock_id: '2',
        symbol: 'TSM',
        company_name: 'Taiwan Semiconductor Manufacturing Company Limited',
        stock_price: 90,
        market_cap: 47000000,
        sector: 'Technology',
      },
      {
        stock_id: '3',
        symbol: 'NVDA',
        company_name: 'NVIDIA Corporation',
        stock_price: 166,
        market_cap: 41000000,
        sector: 'Technology',
      },
    ];

    const action = { type: GET_STOCKS, payload: state };
    const result = stocksReducer(initialState, action);
    expect(result).toEqual(state);
  });
});
