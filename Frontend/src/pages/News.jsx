import { useState } from "react";
import { motion } from "framer-motion";

const dummyNews = [
  {
    id: 1,
    title: "Electronic drum business cards built on RP2040",
    desc: "A project worth making noise about",
    author: "David Crookes",
    date: "20th Nov 2025",
    comments: 3,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/Zero-2-HERO-Large-800x400.jpeg",
  },
  {
    id: 2,
    title: "How thousands of students are growing plants in space",
    desc: "Sowing seeds of discovery in space",
    author: "Ashley Whittaker",
    date: "19th Nov 2025",
    comments: 0,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/50946076_2190714414301489_9100185777735729152_n-800x400.jpg",
  },
  {
    id: 3,
    title: "What can you build with Raspberry Pi Zero?",
    desc: "Smaller, affordable & able to run a full OS",
    author: "Phil King",
    date: "17th Nov 2025",
    comments: 30,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 4,
    title: "AI-powered plant growth tracking system",
    desc: "Automation in controlled farming",
    author: "Ritu Sharma",
    date: "12th Nov 2025",
    comments: 4,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 5,
    title: "Mini IoT Satellite Simulator",
    desc: "A hands-on space tech learning experience",
    author: "Krishna Kumar",
    date: "10th Nov 2025",
    comments: 12,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/IMG_0489-800x400.jpeg",
  },
  {
    id: 6,
    title: "New robotics kit for beginners",
    desc: "Affordable STEM learning for everyone",
    author: "Aaklan Team",
    date: "5th Nov 2025",
    comments: 9,
    img: "https://www.raspberrypi.com/app/uploads/2025/08/SenS2-Internals-Large-800x400.jpeg",
  },
  {
    id: 7,
    title: "Electronic drum business cards built on RP2040",
    desc: "A project worth making noise about",
    author: "David Crookes",
    date: "20th Nov 2025",
    comments: 3,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/Zero-2-HERO-Large-800x400.jpeg",
  },
  {
    id: 8,
    title: "How thousands of students are growing plants in space",
    desc: "Sowing seeds of discovery in space",
    author: "Ashley Whittaker",
    date: "19th Nov 2025",
    comments: 0,
    img: "https://www.raspberrypi.com/app/uploads/2025/11/50946076_2190714414301489_9100185777735729152_n-800x400.jpg",
  },
  {
    id: 9,
    title: "What can you build with Raspberry Pi Zero?",
    desc: "Smaller, affordable & able to run a full OS",
    author: "Phil King",
    date: "17th Nov 2025",
    comments: 30,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 10,
    title: "AI-powered plant growth tracking system",
    desc: "Automation in controlled farming",
    author: "Ritu Sharma",
    date: "12th Nov 2025",
    comments: 4,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/edgeberry-main-Large-600x400.jpeg",
  },
  {
    id: 11,
    title: "Mini IoT Satellite Simulator",
    desc: "A hands-on space tech learning experience",
    author: "Krishna Kumar",
    date: "10th Nov 2025",
    comments: 12,
    img: "https://www.raspberrypi.com/app/uploads/2025/09/IMG_0489-800x400.jpeg",
  },
  {
    id: 12,
    title: "New robotics kit for beginners",
    desc: "Affordable STEM learning for everyone",
    author: "Aaklan Team",
    date: "5th Nov 2025",
    comments: 9,
    img: "https://www.raspberrypi.com/app/uploads/2025/08/SenS2-Internals-Large-800x400.jpeg",
  },
];

const ITEMS_PER_PAGE = 6;


export default function News() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;

  const currentItems = dummyNews.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(dummyNews.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="px-6 mt-10 lg:px-20 py-10 bg-gradient-to-br from-red-50 via-orange-50 to-blue-50">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 bg-clip-text text-transparent">
          News
        </h1>
        <p className="text-gray-700 mt-1 text-lg font-medium">
          Updates from{" "}
          <span className="font-bold text-blue-600">Leela By Aaklan</span>
        </p>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mb-8">
        <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:opacity-90 transition">
          🔎 Search Archive
        </button>
        <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md hover:opacity-90 transition">
          📡 RSS Feed
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl bg-white shadow-xl hover:shadow-2xl border overflow-hidden transform hover:-translate-y-2 transition duration-300"
          >
            <img src={item.img} alt="" className="w-full h-48 object-cover" />

            <div className="p-5">
              <h2 className="font-bold text-lg hover:underline cursor-pointer text-gray-900">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-2">{item.desc}</p>

              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <p>
                  {item.author} • {item.date}
                </p>
                <p>{item.comments} comments</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-6 py-2 rounded-xl border bg-white shadow ${
            currentPage === 1 ? "opacity-40" : "hover:bg-gray-50"
          }`}
        >
          ← Previous
        </button>

        <span className="font-semibold text-lg">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-6 py-2 rounded-xl border bg-white shadow ${
            currentPage === totalPages ? "opacity-40" : "hover:bg-gray-50"
          }`}
        >
          Next →
        </button>
      </div>

      {/* EXTRA SECTIONS */}

      {/* Trending Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text mb-6">
          🔥 Trending Today
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Robotics", "AI Projects", "STEM Courses"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white rounded-xl shadow-md text-lg font-medium"
            >
              ⭐ {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-24 p-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-2">Join Our Newsletter</h2>
        <p className="opacity-90">
          Stay updated with the latest innovations, projects, and announcements
          from Leela By Aaklan.
        </p>

        <div className="mt-5 flex justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-xl text-black w-64"
          />
          <button className="px-6 py-2 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition">
            Subscribe →
          </button>
        </div>
      </div>
    </div>
  );
}
