import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../JS/actions/orderAction';

const Commander = () => {

 const cartItems = useSelector(state => state.cartReducer.cartItems);
 const totalAmount = useSelector(state => state.cartReducer.totalAmount);
  const [orderDetails, setOrderDetails] = useState({
    address: '',
    
  });
 const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setOrderDetails(prevState => ({
        ...prevState, [name]: value
      }))
    };
const [processing, setProcessing] = useState(false);
    const handlePlaceOrder = () => {
      if (!orderDetails.address) {
        alert('Please fill in all fields');
        return;
      }
         if (cartItems.length === 0) {
        alert('Your cart is empty, add items to checkout')
        return;
      };
setProcessing(true);

console.log(orderDetails.address)
      const newOrder = {
        products: cartItems.map(item => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
        })),
        total: totalAmount,
        shippingAddress : orderDetails.address,
       
      };

      dispatch(addOrder(newOrder, navigate));
      setProcessing(false)
    };




  const styles = {
    container: {
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      backgroundColor: '#FAFAFA',
    },
    heading: {
    //   textAlign: 'left',
      color:"#3B4B8C",
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    formSection: {
      marginBottom: '15px',
      display: 'flex',
      flexDirection: 'column',
      
    },
    label: {
         textAlign: 'left',
      marginBottom: '5px',
     // fontWeight: 'bold',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
    },
       totalAmount: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#1e3c72',
        marginBottom: '20px',
      },
    
    button: {
   backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    
  };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

  return (
    <form style={styles.container} >
      <h3 style={styles.heading}>Livraison à domicile </h3>

     
      <div style={styles.formSection}>
        <label style={styles.label}>Addresse de Livraison</label>
        <input
          type="text"
          name="address"
          placeholder="Enter the address"
          value={orderDetails.address}
          onChange={handleInputChange}
          required
          style={styles.input}
        />
      </div>
      
          {/* onChange={handleInputChange}       */}
      <label style={styles.totalAmount}>Total : {totalAmount} $</label>

      {/* <button type="submit" style={styles.button}>
        Confirmer votre commande
      </button> */}
      <button
  type="button" // ← Important : empêche le rechargement du formulaire
  onClick={handlePlaceOrder}
  disabled={processing}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  style={{
    ...styles.button,
    ...(processing ? styles.buttonDisabled : {}),
    ...(isHovered ? styles.buttonHover : {}),
  }}
>
  {processing ? 'Processing...' : 'Confirmer votre commande'}
</button>

      {processing && <p style={styles.processingMessage}>Your order is being processed...</p>}
      {cartItems.length === 0 && <p style={styles.noItemsMessage}>No items in the cart to order</p>}
    </form>
  );
};


export default Commander
