import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { getSectors } from '../redux/sectors/sectors';
import SectorItem from './SectorItem';

const SectorsList = () => {
  const dispatch = useDispatch();
  const sectors = useSelector((state) => state.sectors);
  useEffect(() => {
    dispatch(getSectors());
  }, []);

  return (
    <Table>
      {/* <h1>Sectors</h1> */}
      <thead>
        <tr>
          <th>Sector</th>
          <th>Market Cap</th>
          <th>Number of Stocks</th>
        </tr>
      </thead>
      <tbody>
        {sectors.map((sector) => (
          <SectorItem key={sector.sector_id} sector={sector} />
        ))}
      </tbody>
    </Table>
  );
};

export default SectorsList;
