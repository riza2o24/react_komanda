import Footer from "../footer/Footer"
import Header from "../header/Header"
import iamge from "../../assets/image.png"
import iamge2 from "../../assets/image2.png"
import iamge3 from "../../assets/image3.png"
import { FaHeart, FaShareAlt } from "react-icons/fa"
import { MdCompareArrows } from "react-icons/md"
import { useEffect, useState } from "react"
import axios from "axios"
import Products from "../../assets/Products.png"

function Home() {
  const [card, setCard] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(res => setCard(res.data.products))
  }, [])

  return (
    <div>
      <Header/>
      <div className="baner w-[1440px] h-[700px] px-[55px] flex items-center mb-[55px] justify-between m-auto">
        {/* 1 */}
      <div>
        
      </div>

      {/* 2 */}
      <div className="w-[643px] rounded-[10px] px-[40px] py-[60px] h-[443px] bg-[#FFF3E3] ">
        <p className="font-[600] mb-[6px] text-[#333333] text-[16px] ">New Arrival</p>

        <h1  className="w-[389px] font-[700]  text-[#B88E2F] text-[52px] ">Discover Our New Collection</h1>

        <p className="w-[546px] font-[500] text-[#333333] text-[18px] mb-[25px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

        <button className="px-[70px] py-[25px] bg-[#B88E2F] text-[#fff] text-[16px] font-[700] ">BUY Now</button>
      </div>
      </div>

      <div className="w-[1440px] m-auto mb-[60px]">
        <h2 className="text-center  text-[#000000] text-[32px] font-[700]">Browse The Range</h2>
      <p className="text-center  text-[#000000] text-[20px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="w-[1440px] m-auto px-[100px] mb-[56px] flex items-center justify-between">
      <div>
        <img src={iamge} alt="image" />
        <p className="text-center mt-[20px] font-[600] text-[24px]">Dining</p>
      </div>

      <div>
        <img src={iamge2} alt="image" />
        <p className="text-center mt-[20px] font-[600] text-[24px]">Living</p>
      </div>

      <div>
        <img src={iamge3} alt="image" />
        <p className="text-center mt-[20px] font-[600] text-[24px]">Bedroom</p>
      </div>
      </div>

      <div className="w-[1440px] mt-[30px]  px-[100px] grid grid-cols-4 gap-[30px] flex items-center justify-between m-auto">
            {card.slice(0,12).map(item => (
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
                      <button className="px-[52px] py-[12px] bg-[#fff] text-[#B88E2F] text-[16px] font-[600] flex justify-center m-auto mb-[25px]">Add to cart</button>
      
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


            <div className="w-[1440px] flex items-center justify-center m-auto  mt-[50px]">
              <button className="px-[70px] py-[12px] border-1 border-[#B88E2F] text-[#B88E2F] font-[600] text-[16px] ">Show More</button>
            </div>


            <div className="w-[1440px] h-[670px] bg-[#FCF8F3]  pl-[100px] flex items-center justify-between m-auto mt-[100px] ">
              <div>
                <h1 className="font-[700] w-[422px] mb-[8px] text-[#3A3A3A] text-[40px] ">50+ Beautiful rooms inspiration</h1>

                <p className="w-[368px] font-[500] text-[16px] text-[#3A3A3A]">50+ Beautiful rooms inspiration Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>

                <button className="px-[36px] py-[12px] bg-[#B88E2F] font-[600] text-[16px] text-[#fff]">Explore More</button>
              </div>

              <img src={Products} alt="Products" />
            </div>
      <Footer/>
    </div>
  )
}

export default Home
