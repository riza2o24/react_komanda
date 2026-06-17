import { useCart } from "../../context/CartContext";
import { IoBagHandleOutline, IoCloseCircleOutline } from "react-icons/io5"; // Cleaned up icons here
import "./SideBar.css";
import { Link } from "lucide-react";

const CartSidebar = ({ open, onClose }) => {
  const { cartItems, removeFromCart, getSubtotal } = useCart();

  return (
    <>
      {open && <div className="overlay" onClick={onClose}></div>}

      <div className={`cart-sidebar ${open ? "show" : ""}`}>
        {/* Header Section */}
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-bag-btn" onClick={onClose}>
            <IoBagHandleOutline size={24} className="text-[#9F9F9F]" />
          </button>
        </div>
        
        <div className="header-divider"></div>

        {/* Content Item Scroll Workspace */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="text-center text-[#9F9F9F] mt-10">Your cart is empty.</div>
          ) : (
            cartItems.map((item) => {
              const adjustedPrice = item.price ? item.price * 1000 : 250000;
              return (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-img-bg">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p>
                      {item.quantity} × <span className="price-text">Rs. {adjustedPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                    </p>
                  </div>
                  {/* Changed TiDeleteCircular to IoCloseCircleOutline to fix the crash */}
                  <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                    <IoCloseCircleOutline size={26} color="#9F9F9F" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Dynamic Pricing Footer summary panel */}
        <div className="cart-footer-sticky">
          <div className="subtotal">
            <span className="subtotal-label">Subtotal</span>
            <span className="subtotal-price">
              Rs. {getSubtotal().toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
          </div>

          <div className="footer-divider"></div>

          <div className="cart-buttons">
            <button>Cart</button>
            <button>Checkout</button>
            <Link to={'/compare'}><button>Comparison</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
