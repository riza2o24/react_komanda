import React, { useState } from 'react';

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <svg className="w-7 h-7 text-yellow-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3L19.5 8 12 11.7 4.5 8 12 4.3zM4 9.5l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7l-7 3.5z"/>
        </svg>
        <span className="text-2xl font-bold text-gray-800">Furniro</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm">
        <a href="#" className="text-gray-700 hover:text-yellow-700">Home</a>
        <a href="#" className="text-gray-700 hover:text-yellow-700">Shop</a>
        <a href="#" className="text-gray-700 hover:text-yellow-700">About</a>
        <a href="#" className="text-gray-700 hover:text-yellow-700">Contact</a>
      </nav>
      <div className="flex items-center gap-5 text-gray-700">
        <a href="#" className="hover:text-yellow-700"><i className="far fa-user"></i></a>
        <a href="#" className="hover:text-yellow-700"><i className="fas fa-search"></i></a>
        <a href="#" className="hover:text-yellow-700"><i className="far fa-heart"></i></a>
        <a href="#" className="hover:text-yellow-700"><i className="fas fa-shopping-cart"></i></a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="py-16" style={{
    background: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Cart</h1>
      <div className="text-sm text-gray-600 flex items-center justify-center gap-2">
        <a href="#" className="hover:text-yellow-700">Home</a>
        <span><i className="fas fa-chevron-right text-xs"></i></span>
        <span>Cart</span>
      </div>
    </div>
  </section>
);

const BillingForm = () => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Billing details</h2>
    <form className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-600 mb-2">First Name</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700" />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-2">Last Name</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700" />
        </div>
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-2">Company Name (Optional)</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700" />
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-2">Country / Region</label>
        <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700">
          <option>Sri Lanka</option>
          <option>India</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Australia</option>
        </select>
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-2">Street address</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700" />
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-2">Town / City</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700" />
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-2">Province</label>
        <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700">
          <option>Western Province</option>
          <option>Central Province</option>
          <option>Southern Province</option>
          <option>Eastern Province</option>
        </select>
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-2">ZIP code</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700" />
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-2">Phone</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700" />
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-2">Email address</label>
        <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700" />
      </div>
      <div className="pt-2">
        <input type="text" placeholder="Additional information" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-700" />
      </div>
    </form>
  </div>
);

const OrderSummary = ({ onPlaceOrder }) => {
  const [payment, setPayment] = useState('bank');

  return (
    <div className="lg:pl-8">
      <div className="space-y-2">
        <div className="flex justify-between items-center pb-2">
          <h3 className="text-sm font-medium text-gray-800">Product</h3>
          <h3 className="text-sm font-medium text-gray-800">Subtotal</h3>
        </div>
        <div className="flex justify-between items-center text-xs text-gray-600 py-1">
          <span>Asgaard sofa <span className="text-gray-400">× 1</span></span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between items-center text-sm py-2 border-b border-gray-100">
          <span className="text-gray-700">Subtotal</span>
          <span className="text-gray-700">Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="text-gray-700 font-medium">Total</span>
          <span className="text-lg font-bold text-yellow-700">Rs. 250,000.00</span>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm">
        <div className="flex items-start gap-3">
          <input
            type="radio"
            name="payment"
            checked={payment === 'bank'}
            onChange={() => setPayment('bank')}
            className="mt-1"
          />
          <label className="text-gray-700 font-medium">Direct Bank Transfer</label>
        </div>
        <p className="text-xs text-gray-500 pl-6">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <div className="flex items-start gap-3">
          <input
            type="radio"
            name="payment"
            checked={payment === 'bank2'}
            onChange={() => setPayment('bank2')}
            className="mt-1"
          />
          <label className="text-gray-500 text-xs">Direct Bank Transfer</label>
        </div>
        <div className="flex items-start gap-3">
          <input
            type="radio"
            name="payment"
            checked={payment === 'cash'}
            onChange={() => setPayment('cash')}
            className="mt-1"
          />
          <label className="text-gray-500 text-xs">Cash On Delivery</label>
        </div>
        <p className="text-xs text-gray-500 pt-2">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold text-gray-700">privacy policy</span>.
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={onPlaceOrder}
          className="border border-gray-800 text-gray-800 font-medium px-12 py-3 rounded hover:bg-gray-800 hover:text-white transition-colors"
        >
          Place order
        </button>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-amber-50 py-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="flex items-center gap-3">
        <i className="fas fa-trophy text-2xl text-gray-800"></i>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">High Quality</h4>
          <p className="text-xs text-gray-600">crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <i className="fas fa-check-circle text-2xl text-gray-800"></i>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">Warranty Protection</h4>
          <p className="text-xs text-gray-600">Over 2 years</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <i className="fas fa-shipping-fast text-2xl text-gray-800"></i>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">Free Shipping</h4>
          <p className="text-xs text-gray-600">Order over 150 $</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <i className="fas fa-headset text-2xl text-gray-800"></i>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">24 / 7 Support</h4>
          <p className="text-xs text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6">Funiro.</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            400 University Drive Suite 200 Coral<br />
            Gables,<br />
            FL 33134 USA
          </p>
        </div>
        <div>
          <h4 className="text-xs text-gray-500 mb-6 uppercase">Links</h4>
          <ul className="space-y-6 text-sm">
            <li><a href="#" className="text-gray-800 font-medium hover:text-yellow-700">Home</a></li>
            <li><a href="#" className="text-gray-800 font-medium hover:text-yellow-700">Shop</a></li>
            <li><a href="#" className="text-gray-800 font-medium hover:text-yellow-700">About</a></li>
            <li><a href="#" className="text-gray-800 font-medium hover:text-yellow-700">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs text-gray-500 mb-6 uppercase">Help</h4>
          <ul className="space-y-6 text-sm">
            <li><a href="#" className="text-gray-800 font-medium hover:text-yellow-700">Payment Options</a></li>
            <li><a href="#" className="text-gray-800 font-medium hover:text-yellow-700">Returns</a></li>
            <li><a href="#" className="text-gray-800 font-medium hover:text-yellow-700">Privacy Policies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs text-gray-500 mb-6 uppercase">Newsletter</h4>
          <div className="flex items-center gap-2">
            <input type="email" placeholder="Enter Your Email Address" className="flex-1 border-b border-gray-300 text-sm py-2 focus:outline-none focus:border-gray-800" />
            <button className="text-sm font-medium text-gray-800 border-b border-gray-800 pb-2 hover:text-yellow-700">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 mt-10 pt-6 text-xs text-gray-500">
        2023 furino. All rights reverved
      </div>
    </div>
  </footer>
);

const Checkout = () => {
  const handlePlaceOrder = () => {
    alert('Thank you for your order!');
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <BillingForm />
          <OrderSummary onPlaceOrder={handlePlaceOrder} />
        </div>
      </section>
      <Features />
      <Footer />
    </div>
  );
};

export default Checkout;