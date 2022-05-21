import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const SectorItem = (props) => {
  const { sector } = props;
  // const badgeClass = sector.isReserved ? 'reserveBadge' : 'reserveBadgeDisabled';

  return (
    <Col xs={6} bg="darkblue">
      <h4><NavLink to={`/${sector.sector_name}`}>{sector.sector_name}</NavLink></h4>
      <p>Market Cap: {sector.sector_mkt_cap}</p>
      <p>{sector.sector_num_stocks === 1 ? `${sector.sector_num_stocks} stock` : `${sector.sector_num_stocks} stocks`}</p>
    </Col>
  );
};

SectorItem.propTypes = {
  sector: PropTypes.shape({
    sector_id: PropTypes.string,
    sector_name: PropTypes.string,
    sector_mkt_cap: PropTypes.string,
    sector_num_stocks: PropTypes.number,
  }).isRequired,
};

export default SectorItem;
