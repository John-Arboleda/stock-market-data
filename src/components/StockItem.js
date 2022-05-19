import React from 'react';
import PropTypes from 'prop-types';

const StockItem = (props) => {
  const { stock } = props;
  // const badgeClass = stock.isReserved ? 'reserveBadge' : 'reserveBadgeDisabled';

  return (
    <tr>
      <th><h3>{stock.symbol}</h3></th>
      <th><p>{stock.company_name}</p></th>
      <th><p>{stock.market_cap}</p></th>
    </tr>
  );
};

StockItem.propTypes = {
  stock: PropTypes.shape({
    stock_id: PropTypes.string,
    symbol: PropTypes.string,
    company_name: PropTypes.string,
    market_cap: PropTypes.number,
  }).isRequired,
};

export default StockItem;
