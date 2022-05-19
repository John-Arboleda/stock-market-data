import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { getStocks } from '../redux/stocks/stocks';
import StockItem from './StockItem';

const StocksList = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks);
  useEffect(() => {
    dispatch(getStocks());
  }, []);

  return (
    <Table>
      {/* <h1>Stocks</h1> */}
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Company Name</th>
          <th>Market Cap</th>
          {/* <th>Status</th>
          <th>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => (
          <StockItem key={stock.stock_id} stock={stock} />
        ))}
      </tbody>
    </Table>
  );
};

export default StocksList;
