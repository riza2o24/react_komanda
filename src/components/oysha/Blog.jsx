import { Search } from "lucide-react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import icon6 from "../../assets/icon6.png"
import icon7 from "../../assets/icon7.png"
import icon8 from "../../assets/icon8.png"
import icon9 from "../../assets/icon9.png"
const posts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
    title: "Going all-in with millennial design",
    date: "14 OCT 2022",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    title: "Exploring new ways of decorating",
    date: "14 OCT 2022",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    title: "Handmade pieces that took time to make",
    date: "14 OCT 2022",
  },
];

export default function Blog() {
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
        <h1 className="text-4xl font-bold">About</h1>
        <p className="text-sm mt-2">Home &gt; About</p>
      </div>

      {/* Content */}
      <div className="flex justify-between px-24 py-16">
        {/* Left */}
        <div className="w-[820px] space-y-12">
          {posts.map((post) => (
            <div key={post.id}>
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[450px] object-cover rounded-md"
              />

              <div className="flex gap-4 text-gray-500 text-sm mt-4">
                <span>Admin</span>
                <span>{post.date}</span>
              </div>

              <h2 className="text-3xl font-semibold mt-3">
                {post.title}
              </h2>

              <p className="text-gray-500 mt-4 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, beatae. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolore, nemo.
              </p>

              <button className="mt-5 border-b border-black pb-1">
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-[300px]">
          <div className="relative">
            <input
              type="text"
              className="w-full border rounded-md p-3 pr-10"
            />
            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="mt-12">
            <h3 className="font-bold text-xl mb-6">Categories</h3>

            <div className="space-y-4 text-gray-500">
              <div className="flex justify-between">
                <span>Crafts</span>
                <span>2</span>
              </div>

              <div className="flex justify-between">
                <span>Design</span>
                <span>8</span>
              </div>

              <div className="flex justify-between">
                <span>Handmade</span>
                <span>7</span>
              </div>

              <div className="flex justify-between">
                <span>Interior</span>
                <span>1</span>
              </div>

              <div className="flex justify-between">
                <span>Wood</span>
                <span>6</span>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-bold text-xl mb-6">Recent Posts</h3>

            {posts.map((item) => (
              <div key={item.id} className="flex gap-3 mb-5">
                <img
                  src={item.img}
                  alt=""
                  className="w-20 h-20 object-cover rounded"
                />

                <div>
                  <h4 className="text-sm font-medium">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    03 Aug 2022
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 pb-16">
        <button className="w-10 h-10 bg-yellow-600 text-white rounded">
          1
        </button>

        <button className="w-10 h-10 bg-gray-100 rounded">
          2
        </button>

        <button className="w-10 h-10 bg-gray-100 rounded">
          3
        </button>

        <button className="px-5 h-10 bg-gray-100 rounded">
          Next
        </button>
      </div>
    </div>
    <div className="w-[1440px]   px-[55px] bg-[#FAF3EA] h-[270px] flex items-center justify-between m-auto" >
            
            <img src={icon6} alt="icons" />
            <img src={icon7} alt="icons" />
            <img src={icon8} alt="icons" />
            <img src={icon9} alt="icons" />
    </div>

        <Footer/>
    </div>
  );
}