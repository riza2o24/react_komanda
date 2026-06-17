import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Contact() {
  return (
    <div>
        <Header/>

    <div className="w-[1440px] mx-auto bg-white">
      {/* Hero */}
      <div
        className="h-[250px] flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513694203232-719a280e022f')",
        }}
      >
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-sm mt-2">Home &gt; Contact</p>
      </div>

      {/* Avatar */}
      <div className="relative">
        <div className="absolute -top-8 left-[320px] w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg">
          M
        </div>
      </div>

      {/* Content */}
      <div className="py-20">
        <h2 className="text-4xl font-bold text-center">
          Get In Touch With Us
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-xl mx-auto">
          For more information about our products & services, please feel free
          to drop us an email.
        </p>

        <div className="flex justify-center gap-32 mt-16">
          {/* Left */}
          <div className="space-y-10 w-[250px]">
            <div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <h3 className="font-semibold text-xl">Address</h3>
              </div>
              <p className="ml-7 text-gray-600">
                236 5th SE Avenue,
                <br />
                New York NY10000,
                <br />
                United States
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <h3 className="font-semibold text-xl">Phone</h3>
              </div>
              <p className="ml-7 text-gray-600">
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <FaClock />
                <h3 className="font-semibold text-xl">Working Time</h3>
              </div>
              <p className="ml-7 text-gray-600">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form className="w-[500px] space-y-6">
            <div>
              <label className="block mb-2 font-medium">Your name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full h-14 border rounded-lg px-4 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full h-14 border rounded-lg px-4 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full h-14 border rounded-lg px-4 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Hi! I'd like to ask about"
                className="w-full border rounded-lg p-4 outline-none"
              />
            </div>

            <button className="bg-yellow-600 text-white px-12 py-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

    <Footer/>
    </div>
  );
}