import React from 'react';
import { Col } from 'react-bootstrap';
import bigIntToStr from '../helpers/bigIntToStr';

const MainHeader = (props) => {
  const { sectors } = props;

  const TotalMarketCap = sectors
    .map((sector) => sector.sector_mkt_cap)
    .reduce((a, b) => a + b, 0);

  const TotalStocks = sectors
    .map((sector) => sector.sector_num_stocks)
    .reduce((a, b) => a + b, 0);

  return (
    <Col>
      <p>{bigIntToStr(TotalMarketCap)}</p>
      <p>{TotalStocks}</p>
    </Col>
  );
};

export default MainHeader;
