import sectorsReducer, {GET_SECTORS} from '../redux/sectors/sectors';

describe('Get Sectors', () => {
  test('Action GET_SECTORS should return a list of sectors', () => {
    const initialState = [];
    const state = [
      {
        sector_id: '1',
        sector_name: 'Technology',
        sector_mkt_cap: 10000000,
        sector_num_stocks: 20
      },
      {
        sector_id: '2',
        sector_name: 'Financial Services',
        sector_mkt_cap: 20000000,
        sector_num_stocks: 30
      },
      {
        sector_id: '3',
        sector_name: 'Basic Materials',
        sector_mkt_cap: 20000000,
        sector_num_stocks: 50
      },
    ];

    const action = { type: GET_SECTORS, payload: state };
    const result = sectorsReducer(initialState, action);
    expect(result).toEqual(state);
  });
});