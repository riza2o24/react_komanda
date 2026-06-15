import Footer from "../footer/Footer"
import Header from "../header/Header"


import sofa1 from "../../assets/sofa1.png";
import sofa2 from "../../assets/sofa2.png";
import rr from "../../assets/rr.png";
import bac from "../../assets/bac.png";

const Compare = () => {
  return (

     <div className="font-poppins w-full bg-white">
      <Header/>
      {/* 1. Banner */}
      <section className="bg-cover m-auto w-[1440px] relative bg-center text-center py-20 mb-30" >
        <img src={bac} className="flex absolute mt-[-80px]" alt="rasm" />
        <h1 className="text-4xl font-semibold z-1 text-black">
          Product Comparison
        </h1>
        <p className="text-gray-500 mt-2 font-medium z-1">
          Home &gt; <span className="text-black">Comparison</span>
        </p>
      </section>

      {/* 2. Top Products Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-start mb-20">
        {/* Chap matn va havola */}
        <div className="md:col-span-1 py-4">
          <h2 className="text-2xl font-medium leading-tight mb-6 text-black">
            Go to Product <br />
            page for more <br />
            Products
          </h2>
          <a
            href="/"
            className="text-gray-400 font-medium underline underline-offset-8 decoration-2transition-colors"
          >
            View More
          </a>
        </div>

        {/* Asgaard Sofa Card */}
        <div className="md:col-span-1">
          <div className="bg-[#F9F1E7] p-5 rounded-xl flex items-center justify-center h-44 mb-4">
            <img
              src={sofa1}
              alt="Asgaard Sofa"
              className="max-h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-medium text-black">Asgaard Sofa</h3>
          <p className="font-medium text-lg mt-1 text-black">Rs. 250,000.00</p>
          <div className="flex items-center gap-2 text-sm text-black mt-2">
            <span className="font-medium">4.7</span>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <div className="w-[1px] h-4 bg-gray-300 mx-1"></div>
            <span className="text-gray-400 text-xs">204 Review</span>
          </div>
        </div>

        {/* Outdoor Sofa Set Card */}
        <div className="md:col-span-1">
          <div className="bg-[#F9F1E7] p-5 rounded-xl flex items-center justify-center h-44 mb-4">
            <img
              src={sofa2}
              alt="Outdoor Sofa Set"
              className="max-h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-medium text-black">Outdoor Sofa Set</h3>
          <p className="font-medium text-lg mt-1 text-black">Rs. 224,000.00</p>
          <div className="flex items-center gap-2 text-sm text-black mt-2">
            <span className="font-medium">4.2</span>
            <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
            <div className="w-[1px] h-4 bg-gray-300 mx-1"></div>
            <span className="text-gray-400 text-xs">145 Review</span>
          </div>
        </div>

        {/* O'ng tomon: Add Product Dropdown */}
        <div className="md:col-span-1 py-4">
          <h3 className="text-xl font-semibold mb-4 text-black">
            Add A Product
          </h3>
            <button className="bg-[#B88E2F] text-white px-4 py-3 rounded-md w-full font-medium appearance-none cursor-pointer outline-none text-sm text-center">Choose a Product</button>
        </div>
      </section>

      {/* 3. Comparison Table */}
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto mb-16">
        <table className="w-full border-collapse border-t border-gray-200">
          <tbody>
            {/* General bo'limi */}
            <tr>
              <td className="p-5 text-xl font-semibold text-black border-r border-gray-200 w-1/4">
                General
              </td>
              <td className="p-5 border-r border-gray-200 w-1/3"></td>
              <td className="p-5 w-1/3"></td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Sales Package
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                1 sectional sofa
              </td>
              <td className="p-5 text-black">
                1 Three Seater, 2 Single Seater
              </td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Model Number
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                TFCBLGRBL6SRHS
              </td>
              <td className="p-5 text-black">DTUBLGRBL566</td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Secondary Material
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                Solid Wood
              </td>
              <td className="p-5 text-black">Solid Wood</td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Configuration
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                L-shaped
              </td>
              <td className="p-5 text-black">L-shaped</td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Upholstery Material
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                Fabric + Cotton
              </td>
              <td className="p-5 text-black">Fabric + Cotton</td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Upholstery Color
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                Bright Grey & Lion
              </td>
              <td className="p-5 text-black">Bright Grey & Lion</td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Sales Package
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                1 sectional sofa
              </td>
              <td className="p-5 text-black">
                1 Three Seater, 2 Single Seater
              </td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Model Number
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                TFCBLGRBL6SRHS
              </td>
              <td className="p-5 text-black">DTUBLGRBL566</td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Secondary Material
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                Solid Wood
              </td>
              <td className="p-5 text-black">Solid Wood</td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Configuration
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                L-shaped
              </td>
              <td className="p-5 text-black">L-shaped</td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Upholstery Material
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                Fabric + Cotton
              </td>
              <td className="p-5 text-black">Fabric + Cotton</td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Upholstery Color
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                Bright Grey & Lion
              </td>
              <td className="p-5 text-black">Bright Grey & Lion</td>
            </tr>

            {/* Warranty bo'limi */}
            <tr>
              <td className="p-5 text-xl font-semibold text-black border-r border-gray-200">
                Warranty
              </td>
              <td className="p-5 border-r border-gray-200"></td>
              <td className="p-5"></td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Warranty Summary
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                1 Year Manufacturing Warranty
              </td>
              <td className="p-5 text-black">
                1.2 Year Manufacturing Warranty
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-5 text-gray-500 font-medium border-r border-gray-200">
                Domestic Warranty
              </td>
              <td className="p-5 text-black border-r border-gray-200">
                1 Year
              </td>
              <td className="p-5 text-black">3 Months</td>
            </tr>

            {/* Harid qilish tugmalari */}
            <tr>
              <td className="p-5 border-r border-gray-200"></td>
              <td className="p-5 border-r border-gray-200 text-center md:text-left">
                <button className="bg-[#B88E2F] hover:bg-[#a17a26] text-white text-sm font-medium px-8 py-4 rounded transition-colors shadow-sm">
                  Add To Cart
                </button>
              </td>
              <td className="p-5 text-center md:text-left">
                <button className="bg-[#B88E2F] hover:bg-[#a17a26] text-white text-sm font-medium px-8 py-4 rounded transition-colors shadow-sm">
                  Add To Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 4. Footer Xizmatlar Rasmi */}
      <section className="bg-[#FAF3EA] w-[1440px] m-auto py-14">
        <div className="mx-auto px-6">
          <img
            src={rr}
            alt="Features Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
<Footer/>
    </div>





  )
}

export default Compare