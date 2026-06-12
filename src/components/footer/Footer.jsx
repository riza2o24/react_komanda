
function Footer() {
  return (
    <div className="w-[1440px]  pt-[50px] pb-[50px]  px-[100px] bg-[#ffffff] h-[505px] m-auto">
      <div className="flex  gap-[200px]">
        {/* 1 */}
        <ul>
            <li className="font-[700] text-[24px] text-[#000000] mb-[50px]">Funiro.</li>

            <p className="w-[285px] font-[400] text-[16px] text-[#9F9F9F] ">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </ul>

        {/* 2 */}
        <ul>
            <li className="font-[500] mb-[55px] text-[16px] text-[#9F9F9F]">Links</li>

            <p className="font-[500] mb-[45px] text-[16px] text-[#000000]">Home</p>

            <p className="font-[500] mb-[45px] text-[16px] text-[#000000]">Shop</p>

            <p className="font-[500] mb-[45px] text-[16px] text-[#000000]">About</p>

            <p className="font-[500] mb-[45px] text-[16px] text-[#000000]">Contact</p>
        </ul>

        {/* 3 */}
        <ul>
            <li className="font-[500] mb-[55px] text-[16px] text-[#9F9F9F]">Help</li>

            <p className="font-[500] mb-[45px] text-[16px] text-[#000000]">Payment Options</p>

            <p className="font-[500] mb-[45px] text-[16px] text-[#000000]">Returns</p>

            <p className="font-[500] mb-[45px] text-[16px] text-[#000000]">Privacy Policies</p>
        </ul>

        {/* 4 */}
        <ul>
            <li className="font-[500] mb-[55px] text-[16px] text-[#9F9F9F]">Newsletter</li>

            <p className="font-[500] mb-[45px] text-[16px] text-[#000000]">SUBSCRIBE</p>
        </ul>
      </div>

      <div className="w-[100%] px-[100] h-[2px] bg-[#D9D9D9] mb-[35px]"></div>

      <p className="font-[500]  text-[16px] text-[#000000]" >2023 furino. All rights reverved</p>
    </div>
  )
}

export default Footer
