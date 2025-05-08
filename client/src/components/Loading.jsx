import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
  <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
    <Spinner animation="border" variant='success' />

  </div> 
  )
 
}


export default Loading