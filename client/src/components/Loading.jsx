


import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // optionnel : fond semi-transparent
        zIndex: 9999
      }}
    >
     <Spinner animation="border" variant="primary" />
      <p style={{ marginTop: 10, fontSize: 16, color: '#116EFD' }}>Chargement...</p>
    </div>
  );
}

export default Loading;
