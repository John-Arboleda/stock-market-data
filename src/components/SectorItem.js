import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SectorItem = (props) => {
  const { sector } = props;
  // const badgeClass = sector.isReserved ? 'reserveBadge' : 'reserveBadgeDisabled';

  return (
    <tr>
      <th><NavLink to={`/${sector.sector_name}`}>{sector.sector_name}</NavLink></th>
      <th>{sector.sector_mkt_cap}</th>
      <th>{sector.sector_num_stocks}</th>
    </tr>
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
