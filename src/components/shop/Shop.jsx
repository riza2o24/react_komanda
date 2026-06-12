import Header from "../header/Header"
import Rectangle from "../../assets/Rectangle.png"
import icon from "../../assets/icon.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import Line from "../../assets/Line.png"
import icon4 from "../../assets/icon4.png"
import icon5 from "../../assets/icon5.png"
import icon6 from "../../assets/icon6.png"
import icon7 from "../../assets/icon7.png"
import icon8 from "../../assets/icon8.png"
import icon9 from "../../assets/icon9.png"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import Footer from "../footer/Footer"
import { FaHeart, FaShareAlt } from "react-icons/fa"
import { MdCompareArrows } from "react-icons/md"
function Shop() {
  const [card, setCard] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(res => setCard(res.data.products))
  }, [])
  return (
    <div>
      <div className="h-[80px]">
        <Header/>
      </div>
      <div className='w-[1440px] bg-[#FFFFFF] flex items-center m-auto relative'>
        <img className=" absolute mt-[140px] " src={Rectangle} alt="image" />
        <div className="m-auto z-1">
            <h1 className="m-auto mt-[100px] font-[500] text-[48px] text-[#000000] text-center ">Shop</h1>
            <p className="font-[500] text-[16px] text-[#000000]  block text-center ">Home  |  <span className="font-[300] text-[16px] text-[#000000]">Shop</span></p> 
        </div>
      </div>

      <div  className='w-[1440px] bg-[#F9F1E7] mt-[130px] h-[100px]  px-[100px] flex items-center justify-between m-auto'>
        {/* 1 */}
      <div  className="flex items-center gap-[22px]">
        <img src={icon} alt="icon" />
        <p className="font-[400] text-[20px] text-[#000000]">Filter</p>
        <img src={icon2} alt="icon" />
        <img src={icon3} alt="icon" />

        <img src={Line} alt="line" />

        <p className="font-[400] text-[16px] text-[#000000]">Showing 1–16 of 32 results</p>
      </div>

      {/* 2 */}
      <div className="flex items-center gap-[22px]">
         <p className="font-[400] text-[20px] text-[#000000]">Show</p>
          <img src={icon4} alt="icon" />

         <p className="font-[400] text-[20px] text-[#000000]">Short by</p>
         <img src={icon5} alt="icon" />
      </div>
      </div>


      <div className="w-[1440px] mt-[30px]  px-[100px] grid grid-cols-4 gap-[30px] flex items-center justify-between m-auto">
      {card.slice(0,28).map(item => (
        <div className="products__card w-[285px] h-[445px] bg-[#F4F5F7] relative hidde" key={item.id}>
          <img className="w-[100%] h-[300px]" src={item.thumbnail} alt="thumbnail" />

          <div className="p-[16px]">
            <h3 className="font-[600] text-[24px] text-[#000000]">{item.title.split(" ").slice(0,1)}</h3>

            <p className="font-[500] mt-[8px] mb-[8px] text-[16px] text-[#898989]">{item.category}</p>

            <div className="flex items-center justify-between">
              <h3 className="font-[600] text-[20px] text-[#000000]">Rp ${item.dimensions.depth}</h3>

              <p className="font-[4x00] mt-[8px] mb-[8px] text-[16px] text-[#898989]">Rp ${item.dimensions.height}</p>

            </div>

            <div className="products__overlay w-[100%] absolute bg-[#3a3a3a50] z-1 h-[100%] mt-[-432px] ml-[-15px] flex justify-center items-center hidden">
              <div className="w-[100%]">
             <Link to={`/single/${item.id}`}>
                        <button className="px-[52px] py-[12px] bg-[#fff] text-[#B88E2F] text-[16px] font-[600] flex justify-center m-auto mb-[25px]">Add to cart</button>
                      </Link>

              <div className="flex items-center justify-between px-[20px]">
                <span className="flex items-center text-[#fff] gap-[2px] ">
                  <FaShareAlt  color="#fff"/>
                  Share
                </span>

                <span className="flex items-center text-[#fff] gap-[2px] ">
                  <MdCompareArrows  color="#fff"/>
                  Compare
                </span>

                <span className="flex items-center text-[#fff] gap-[2px] ">
                  <FaHeart  color="#fff"/>
                  Like
                </span>
              </div>
              </div>
            </div>

          </div>
        </div>
      ))

      }

      </div>

      <div className="mt-[70px] flex items-center justify-center gap-[38px] mb-[85px]">
        <div className="w-[60px] h-[60px] text-[#fff] rounded-[10px] bg-[#B88E2F] flex justify-center items-center">
          1
        </div>
        <div className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] flex justify-center items-center">
          2
        </div>
        <div className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] flex justify-center items-center">
          3
        </div>
        <div className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] flex justify-center items-center">
          Next
        </div>
      </div>

      <div className="w-[1440px]   px-[55px] bg-[#FAF3EA] h-[270px] flex items-center justify-between m-auto" >
        
        <img src={icon6} alt="icon" />
        <img src={icon7} alt="icon" />
        <img src={icon8} alt="icon" />
        <img src={icon9} alt="icon" />
      </div>

      <Footer/>
    </div>
  )
}

export default Shop
