import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { getSectors } from '../../redux/sectors/sectors';
import SectorItem from './SectorItem';

const SectorsList = () => {
  const dispatch = useDispatch();
  const sectors = useSelector((state) => state.sectors);
  useEffect(() => {
    dispatch(getSectors());
  }, []);

  return (
    <Container>
      <Row>
        {sectors.map((sector) => (
          <SectorItem key={sector.sector_id} sector={sector} />
        ))}
        </Row>
    </Container>
  );
};

export default SectorsList;
