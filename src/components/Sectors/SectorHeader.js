import React from 'react';
import { Col, Card } from 'react-bootstrap';
import bigIntToStr from '../../helpers/bigIntToStr';

const SectorHeader = (props) => {
  const { stocks, sector } = props;

  const SectorMarketCap = stocks
    .map((stock) => stock.market_cap)
    .reduce((a, b) => a + b, 0);

  return (
    <Col className="p-0">
      <Card bg="primary" text="white">
      <Card.Body className="p-3 text-center">
        <Card.Title>{sector}</Card.Title>
        <Card.Text>
          <p className="m-0">Market Cap: {bigIntToStr(SectorMarketCap)}</p>
          <p className="m-0">{stocks.length} Stocks</p>
        </Card.Text>
      </Card.Body>
      </Card>
    </Col>
  );
};

export default SectorHeader;
