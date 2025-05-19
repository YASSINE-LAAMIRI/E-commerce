import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,updateCartItem } from '../JS/actions/cartActions';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };


  const handleCommander = () => {
    navigate('/commander');
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateCartItem(productId, newQuantity));
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ textAlign: 'center', color: '#3b4b8c' }}>
        Your Cart <span role="img" aria-label="cart">🛒</span>
      </h1>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(({ product, quantity }) => (
            <div
              key={product._id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '25px',
                borderRadius: '15px',
                backgroundColor: '#fafafa',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
                margin: '20px 0',
              }}
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />

              {/* Details */}
              <div style={{ flex: 1, marginLeft: '20px' }}>
                <h3>{product.title}</h3>
                <p>Unit Price: ${product.price.toFixed(2)}</p>
              </div>

            {/* Quantity Control */}
<div style={{ display: 'flex', alignItems: 'center' }}>
  <button
    onClick={() => handleQuantityChange(product._id, quantity - 1)}
    style={{
      backgroundColor: '#f0f0f0',
      border: 'none',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      fontSize: '20px',
      color: '#3b4b8c',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s ease-in-out',
    }}
    disabled={quantity === 1}
    title="Decrease quantity"
  >
    −
  </button>

  <span
    style={{
      margin: '0 12px',
      fontSize: '18px',
      fontWeight: 'bold',
      minWidth: '24px',
      textAlign: 'center',
    }}
  >
    {quantity}
  </span>

  <button
    onClick={() => handleQuantityChange(product._id, quantity + 1)}
    style={{
      
       backgroundColor: '#f0f0f0',
      border: 'none',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      fontSize: '20px',
      color: '#3b4b8c',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s ease-in-out',
    }}
    title="Increase quantity"
  >
    +
  </button>
</div>

            

              {/* Remove Button */}
            <button
  onClick={() => handleRemove(product._id)}
  style={{
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    marginLeft: '20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(231, 76, 60, 0.6)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = 'none';
  }}
>
  Remove
</button>

            </div>
          ))}

          {/* Total */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '40px',
              padding: '30px',
              backgroundColor: '#fff',
              borderRadius: '20px',
              boxShadow: '0px 8px 20px rgba(0,0,0,0.1)',
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <h2>
              Total: <span style={{ color: 'deepskyblue' }}>${totalAmount.toFixed(2)}</span>
            </h2>
          
           <button
  onClick={handleCommander}
  style={{
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(46, 204, 113, 0.6)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = 'none';
  }}
>
  Commander 
</button>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
