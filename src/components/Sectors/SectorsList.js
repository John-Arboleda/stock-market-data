import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { getSectors } from '../../redux/sectors/sectors';
import SectorItem from './SectorItem';
import MainHeader from '../MainHeader';

const SectorsList = () => {
  const dispatch = useDispatch();
  const sectors = useSelector((state) => state.sectors);
  useEffect(() => {
    dispatch(getSectors());
  }, []);

  return (
    <Container className="p-0">
      <Row>
        <MainHeader sectors={sectors} />
      </Row>
      <Row xs={2} md={3} className="g-0">
        {sectors.map((sector) => (
          <SectorItem key={sector.sector_id} sector={sector} />
        ))}
      </Row>
    </Container>
  );
};

export default SectorsList;
