import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Row } from 'react-bootstrap';
import { getStocks } from '../../redux/stocks/stocks';
import StockItem from './StockItem';
import SectorHeader from '../Sectors/SectorHeader';

const StocksList = () => {
  const { sector } = useParams();
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks);
  useEffect(() => {
    dispatch(getStocks(sector));
  }, []);
  const [search, setSearch] = useState(stocks);

  const SearchHandler = (e) => {
    setSearch(
      stocks.filter((c) => c.company_name.toLowerCase().includes(e.target.value.toLowerCase())),
    );
  };

  return (
    <Container>
      <Row>
        <SectorHeader stocks={stocks} />
      </Row>
      <Row>
        <input type="text" placeholder="Search Company by Name" onChange={SearchHandler} />
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company Name</th>
              <th>Stock Price</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {search?.map((stock) => (
              <StockItem key={stock.stock_id} stock={stock} />
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default StocksList;
