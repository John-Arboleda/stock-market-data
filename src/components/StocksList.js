import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { getStocks } from '../redux/stocks/stocks';
import StockItem from './StockItem';

const StocksList = () => {
  const { sector } = useParams();
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks);
  useEffect(() => {
    dispatch(getStocks(sector));
  }, []);

  return (
    <Table>
      {/* <h1>Stocks</h1> */}
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Company Name</th>
          <th>Sector</th>
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
