import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SinglePage.css";
import axios from "axios";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import CartSidebar from "./CartSideBar";
import { Link } from "react-router-dom";
import icon6 from "../../assets/icon6.png"
import icon7 from "../../assets/icon7.png"
import icon8 from "../../assets/icon8.png"
import icon9 from "../../assets/icon9.png"




const SinglePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <h1 className="text-center mt-10 font-bold">Loading...</h1>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="w-full bg-white font-sans antialiased relative">
      <Header />

      {/* Cart Sidebar Implementation Overlay */}
      <CartSidebar open={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Breadcrumb Navigation Bar */}
      <div className="w-[1440px] h-[100px] m-auto bg-[#F9F1E7] flex items-center px-[100px] gap-[25px] text-[16px]">
        <span className="text-[#9F9F9F] cursor-pointer">Home</span>
        <span className="text-[#000000]">{">"}</span>
        <span className="text-[#9F9F9F] cursor-pointer">Shop</span>
        <span className="text-[#000000]">{">"}</span>
        <div className="h-[30px] w-[2px] bg-[#9F9F9F]"></div>
        <span className="text-[#000000] font-medium">{product.title}</span>
      </div>

      {/* Main Product Presentation View */}
      <section className="w-[1440px] m-auto px-[100px] py-[40px] flex gap-[105px]">
        {/* Left Side: Images Workspace */}
        <div className="flex gap-[30px]">
          <div className="flex flex-col gap-[16px]">
            {product.images?.slice(0, 4).map((img, idx) => (
              <div key={idx} className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-[10px] overflow-hidden flex items-center justify-center cursor-pointer">
                <img src={img} alt="" className="object-cover w-full h-full" />
              </div>
            ))}
          </div>

          <div className="w-[481px] h-[500px] bg-[#F9F1E7] rounded-[10px] overflow-hidden flex items-center justify-center">
            <img src={product.thumbnail} alt={product.title} className="object-contain w-full h-full p-4" />
          </div>
        </div>

        {/* Right Side: Configuration & Details */}
        <div className="w-[606px]">
          <h1 className="text-[42px] text-[#000000] mb-[4px]">{product.title}</h1>
          <h2 className="text-[24px] font-medium text-[#9F9F9F] mb-[15px]">
            Rs. {((product.price ? product.price * 1000 : 250000)).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </h2>

          <div className="flex items-center gap-[15px] mb-[15px]">
            <div className="text-[#FFC700] text-[18px]">★★★★★</div>
            <div className="h-[20px] w-[1px] bg-[#9F9F9F]"></div>
            <span className="text-[#9F9F9F] text-[13px]">5 Customer Reviews</span>
          </div>

          <p className="text-[13px] text-[#000000] leading-[20px] mb-[22px] w-[424px]">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Product Sizes Selectors */}
          <div className="mb-[18px]">
            <h4 className="text-[14px] text-[#9F9F9F] mb-[12px]">Size</h4>
            <div className="flex gap-[16px]">
              <button className="w-[30px] h-[30px] bg-[#B88E2F] text-white rounded-[5px] text-[13px]">L</button>
              <button className="w-[30px] h-[30px] bg-[#F9F1E7] text-black rounded-[5px] text-[13px] hover:bg-[#B88E2F] hover:text-white transition">XL</button>
              <button className="w-[30px] h-[30px] bg-[#F9F1E7] text-black rounded-[5px] text-[13px] hover:bg-[#B88E2F] hover:text-white transition">XS</button>
            </div>
          </div>

          {/* Color Palette Toggles */}
          <div className="mb-[32px]">
            <h4 className="text-[14px] text-[#9F9F9F] mb-[12px]">Color</h4>
            <div className="flex gap-[16px]">
              <span className="w-[30px] h-[30px] rounded-full bg-[#816DFB] cursor-pointer ring-offset-2 ring-1 ring-[#816DFB]"></span>
              <span className="w-[30px] h-[30px] rounded-full bg-[#000000] cursor-pointer"></span>
              <span className="w-[30px] h-[30px] rounded-full bg-[#B88E2F] cursor-pointer"></span>
            </div>
          </div>

          {/* Action Operations Area */}
          <div className="flex gap-[18px] pb-[60px] border-b border-[#D9D9D9] mb-[40px]">
            <div className="w-[123px] h-[64px] border border-[#9F9F9F] rounded-[10px] flex items-center justify-between px-[15px]">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-[20px] text-black">-</button>
              <span className="text-[16px] font-medium text-black">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="text-[20px] text-black">+</button>
            </div>

            <button onClick={handleAddToCart} className="w-[215px] h-[64px] border border-black rounded-[15px] text-[20px] hover:bg-black hover:text-white transition">
              Add To Cart
            </button>

            {/* /Shohruhbekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}
            <Link to="/compare">
              <button className="w-[215px] h-[64px] border border-black rounded-[15px] text-[20px] hover:bg-black hover:text-white transition">
                + Compare
              </button>
            </Link>
          </div>

          <div className="flex flex-col gap-[12px] text-[16px] text-[#9F9F9F]">
            <div className="flex"><span className="w-[100px]">SKU</span><span className="mr-3">:</span><span>SS001</span></div>
            <div className="flex"><span className="w-[100px]">Category</span><span className="mr-3">:</span><span className="capitalize">{product.category}</span></div>
            <div className="flex"><span className="w-[100px]">Tags</span><span className="mr-3">:</span><span>Sofa, Chair, Home, Shop</span></div>
            <div className="flex items-center">
              <span className="w-[100px]">Share</span>
              <span className="mr-3">:</span>
              <div className="flex gap-[20px] text-black text-[18px]">
                <FaFacebook className="cursor-pointer hover:text-[#B88E2F]" />
                <FaLinkedin className="cursor-pointer hover:text-[#B88E2F]" />
                <FaTwitter className="cursor-pointer hover:text-[#B88E2F]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Tabs */}
      <section className="w-[1440px] m-auto border-t border-[#D9D9D9] pt-[48px] pb-[65px] px-[100px]">
        <div className="flex justify-center gap-[52px] mb-[36px]">
          <button className="text-[24px] font-medium text-black">Description</button>
          <button className="text-[24px] text-[#9F9F9F]">Additional Information</button>
          <button className="text-[24px] text-[#9F9F9F]">Reviews [5]</button>
        </div>
        <div className="w-[1026px] m-auto flex flex-col gap-[30px] text-[16px] text-[#9F9F9F] text-justify leading-[24px]">
          <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
        </div>
      </section>

         <div className="w-[1440px]   px-[55px] bg-[#FAF3EA] h-[270px] flex items-center justify-between m-auto" >
                    
                    <img src={icon6} alt="icons" />
                    <img src={icon7} alt="icons" />
                    <img src={icon8} alt="icons" />
                    <img src={icon9} alt="icons" />
            </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
