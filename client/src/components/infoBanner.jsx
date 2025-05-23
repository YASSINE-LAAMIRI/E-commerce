import { Row, Col, Container, NavLink } from 'react-bootstrap';
import { FaTruck, FaMoneyBillAlt, FaHeadset, FaPiggyBank } from 'react-icons/fa';

const items = [
  {
    icon: <FaTruck size={24} className="text-danger" />,
    title: 'LIVRAISON',
    subtitle: 'À DOMICILE',
  },
  {
    icon: <FaMoneyBillAlt size={24} className="text-danger" />,
    title: 'GARANTIE',
    subtitle: 'DE REMBOURSEMENT',
  },
  {
    icon: <FaHeadset size={24} className="text-danger" />,
    title: 'CONTACTEZ',
    link: '/contactez-nous',
    subtitle: '-NOUS',
  },
  {
    icon: <FaPiggyBank size={24} className="text-danger" />,
    title: 'PAIEMENT',
    subtitle: 'A LA LIVRAISON',
  },
];

const InfoBanner = () => {
  return (
    <Container fluid className="bg-white py-4 shadow rounded">
      <Row className="text-center d-flex justify-content-around align-items-center">
        {items.map((item, index) => (
          <Col
            key={index}
            md={3}
            className="d-flex align-items-center justify-content-center position-relative"
          >
            <div className="me-2">{item.icon}</div>
            <div className="text-start">
              <strong>{item.title}</strong>{' '}
              <span className="text-muted">{item.subtitle}</span>
            </div>

            {index < items.length - 1 && (
              <div
                className="position-absolute end-0 top-50 translate-middle-y"
                style={{ width: '1px', height: '40px', backgroundColor: '#ccc' }}
              ></div>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InfoBanner;
