import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import bigIntToStr from '../../helpers/bigIntToStr';

const SectorItem = (props) => {
  const { sector } = props;

  return (
    <Col>
      <NavLink to={`/${sector.sector_name}`}>
        <Card
          bg="primary"
          key="primary"
          text='white'
          style={{ width: '13rem' }}
          className="mb-1"
        >
        <Card.Header>{sector.sector_name}</Card.Header>
        <Card.Body>
          <Card.Title>{sector.sector_num_stocks === 1 ? `${sector.sector_num_stocks} stock` : `${sector.sector_num_stocks} stocks`}</Card.Title>
          <Card.Text>Market Cap: {bigIntToStr(sector.sector_mkt_cap)}</Card.Text>
        </Card.Body>
        </Card>
      </NavLink>
    </Col>
  );
};

SectorItem.propTypes = {
  sector: PropTypes.shape({
    sector_id: PropTypes.string,
    sector_name: PropTypes.string,
    sector_mkt_cap: PropTypes.number,
    sector_num_stocks: PropTypes.number,
  }).isRequired,
};

export default SectorItem;
