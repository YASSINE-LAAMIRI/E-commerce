import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import UserDetails from './UserDetails';
import ToSupp from './ToSupp';
import { getOneUser } from '../JS/actions/userAction';
import { useDispatch } from 'react-redux';

const User = ({ user }) => {
  const [details, setDetails] = useState(false);
  const [supprimer, setSupprimer] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: '18rem', position: 'relative' }} className="mb-3 shadow-sm">
        {/* <Card.Img variant="top" src={user.image} alt={user.name} style={{ height: '180px', objectFit: 'cover' }} /> */}

        {/* Icône poubelle en position absolue */}
        <FaTrashAlt
          className="delete-icon"
          title="Supprimer"
          onClick={() => setSupprimer(true)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: '#dc3545',
            cursor: 'pointer',
            fontSize: '1.3rem',
            transition: 'color 0.2s',
            zIndex: 10,
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#a71d2a')}
          onMouseLeave={e => (e.currentTarget.style.color = '#dc3545')}
        />

        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          {/* Tu peux décommenter si besoin */}
          {/* <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle> */}
          {/* <Card.Text>{user.phone}</Card.Text> */}

          <Button
            variant="dark"
            onClick={() => {
              setDetails(true);
              dispatch(getOneUser(user._id));
            }}
            style={{ width: '100%' }}
          >
            Voir détails
          </Button>
        </Card.Body>
      </Card>

      {/* Modale détails utilisateur */}
      <UserDetails show={details} handleClose={() => setDetails(false)} userId={user._id} />

      {/* Modale confirmation suppression */}
      <ToSupp show={supprimer} handleClose={() => setSupprimer(false)} user={user} />
    </div>
  );
};

export default User;
