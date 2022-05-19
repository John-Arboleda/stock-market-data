import React from 'react';
import PropTypes from 'prop-types';

const SectorItem = (props) => {
  const { sector } = props;
  // const badgeClass = sector.isReserved ? 'reserveBadge' : 'reserveBadgeDisabled';

  return (
    <tr>
      <th><h3>{sector.sector_name}</h3></th>
    </tr>
  );
};

SectorItem.propTypes = {
  sector: PropTypes.shape({
    sector_id: PropTypes.string,
    sector_name: PropTypes.string,
  }).isRequired,
};

export default SectorItem;
