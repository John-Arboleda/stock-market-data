import React from 'react';
import { Card, Col } from 'react-bootstrap';
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
    <Card bg="primary" text="white">
    <Card.Body>
    <div className="p-3 text-center">
      <Card.Text className="p-3 text-center">
        Stock Market Watcher allows you to search over {TotalStocks}
        <span> </span>stocks from different sectors with a combined market cap of
        <span> </span>{bigIntToStr(TotalMarketCap)}
      </Card.Text>
    </div>
    </Card.Body>
    </Card>
    </Col>
  );
};

export default MainHeader;
