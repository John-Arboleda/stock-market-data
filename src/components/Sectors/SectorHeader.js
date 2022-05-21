import React from 'react';
import { Col } from 'react-bootstrap';
import bigIntToStr from '../../helpers/bigIntToStr';

const SectorHeader = (props) => {
  const { stocks } = props;

  const SectorMarketCap = stocks
    .map((stock) => stock.market_cap)
    .reduce((a, b) => a + b, 0);

  return (
    <Col>
      <p>{bigIntToStr(SectorMarketCap)}</p>
      <p>{stocks.length}</p>
    </Col>
  );
};

export default SectorHeader;
