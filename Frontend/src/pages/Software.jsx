import React, { useState } from "react";
import { motion } from "framer-motion";

const Software = () => {
  const [activeTab, setActiveTab] = useState("all");

  const softwareData = {
    featured: [
      {
        id: 1,
        title: "Leela By Aaklan Imager",
        description:
          "Leela Imager is the quick and easy way to install LeelaOS and other operating systems to a microSD card, ready to use with your Leela board.",
        image:
          "https://e7.pngegg.com/pngimages/316/624/png-clipart-macbook-pro-macos-high-sierra-macos-sierra-computer-desktop-pc-television-electronics.png",
        category: "Installation Tool",
        downloads: [
          { platform: "macOS", link: "#" },
          { platform: "Windows", link: "#" },
          { platform: "Debian/Ubuntu", link: "#" },
        ],
        command: "sudo apt install leela-imager",
      },
    ],
    remote: [
      {
        id: 2,
        title: "Leela By Aaklan Connect",
        description:
          "Leela Connect gives you free, simple, out-of-the-box access to your Leela board from anywhere in the world. It is a secure remote access solution for LeelaOS.",
        image:
          "https://assets.raspberrypi.com/static/8057d76506a316d61e3a3291090b9618/89c0d/monitor.webp",
        category: "Remote Access",
      },
    ],
    os: [
      {
        id: 3,
        title: "LeelaOS",
        description:
          "LeelaOS is our official operating system. Continuously updated by our in-house software engineering team, it offers backwards compatibility for all our computers.",
        image:
          "https://e7.pngegg.com/pngimages/113/983/png-clipart-computer-cases-housings-laptop-computer-monitors-desktop-computers-pc-computer-network-electronics-thumbnail.png",
        category: "Operating System",
      },
    ],
    pico: [
      {
        id: 4,
        title: "MicroPython",
        description:
          "A full implementation of the Python 3 programming language that runs directly on Leela Pico-series microcontrollers.",
        image:
          "https://e7.pngegg.com/pngimages/660/680/png-clipart-metatrader-4-electronic-trading-platform-computer-software-retail-foreign-exchange-trading-trader-electronics-web-design.png",
        category: "Development",
      },
      {
        id: 5,
        title: "C/C++ SDK",
        description:
          "For power users and professional developers, we provide a complete C/C++ SDK and Visual Studio Code integration.",
        image:
          "https://e7.pngegg.com/pngimages/864/102/png-clipart-macbook-pro-imac-hackintosh-macos-high-sierra-apple-text-media.png",
        category: "Development",
      },
    ],
  };

  const softwareSources = [
    { name: "LeelaOS Kernel", license: "GPL v2", version: "1.0.0" },
    { name: "Leela Imager", license: "Apache 2.0", version: "2.1.0" },
    { name: "Pico SDK", license: "BSD-3-Clause", version: "1.3.0" },
    { name: "MicroPython Port", license: "MIT", version: "1.2.0" },
  ];

  const allSoftware = [
    ...softwareData.featured,
    ...softwareData.remote,
    ...softwareData.os,
    ...softwareData.pico,
  ];

  const filteredSoftware =
    activeTab === "all" ? allSoftware : softwareData[activeTab];

  return (
    <div className="mt-16 bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Leela By Aaklan Software
          </h1>
          <p className="text-lg text-gray-600">
            From our operating system to our GitHub repos, explore the software
            that powers our technology.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex space-x-1 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "all"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              All Software
            </button>
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "featured"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Installation Tools
            </button>
            <button
              onClick={() => setActiveTab("remote")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "remote"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Remote Access
            </button>
            <button
              onClick={() => setActiveTab("os")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "os"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Operating Systems
            </button>
            <button
              onClick={() => setActiveTab("pico")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "pico"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Development Tools
            </button>
          </div>
        </motion.div>

        {/* Software Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Leela Imager - Featured */}
          {activeTab === "all" || activeTab === "featured" ? (
            <section className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Leela By Aaklan Imager
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-lg text-gray-600 mb-4">
                    Leela Imager is the quick and easy way to install{" "}
                    <strong>LeelaOS</strong> and other operating systems to a
                    microSD card, ready to use with your Leela board.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Download and install Leela Imager on a computer with an SD
                    card reader. Insert the microSD card you'll use with your
                    Leela board into the reader and run Leela Imager.
                  </p>

                  <div className="space-y-3 mb-6">
                    <a
                      href="#"
                      className="block text-red-600 font-semibold hover:text-red-700"
                    >
                      Download for macOS
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 font-semibold hover:text-gray-700"
                    >
                      Download for Windows
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 font-semibold hover:text-gray-700"
                    >
                      Download for Debian or Ubuntu (x86_64)
                    </a>
                  </div>

                  <p className="text-gray-600">
                    To install on <strong>LeelaOS</strong>, type{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                      sudo apt install leela-imager
                    </code>{" "}
                    into a terminal window
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={softwareData.featured[0].image}
                    alt="Leela Imager"
                    className="max-w-xs h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Leela By Aaklan
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>Redefiner in header</div>
                  <div>Redefiner in header</div>
                  <div>GENDER ECHOES</div>
                  <div>GENDER SPEED</div>
                  <div>GENDER CONTROL</div>
                  <div>Source</div>
                </div>
              </div>
            </section>
          ) : null}

          {/* Leela Connect */}
          {activeTab === "all" || activeTab === "remote" ? (
            <section className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Leela By Aaklan Connect
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Access your Leela board from anywhere
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-600 mb-6">
                    Leela Connect gives you free, simple, out-of-the-box access
                    to your Leela board from anywhere in the world. It is a
                    secure remote access solution for LeelaOS, allowing you to
                    connect to your Leela desktop and command line directly from
                    any browser.
                  </p>
                  <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                    Find out more
                  </button>
                </div>
                <div className="flex justify-center">
                  <img
                    src={softwareData.remote[0].image}
                    alt="Leela Connect"
                    className="max-w-xs h-auto rounded-lg"
                  />
                </div>
              </div>
            </section>
          ) : null}

          {/* LeelaOS */}
          {activeTab === "all" || activeTab === "os" ? (
            <section className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">LeelaOS</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-600 mb-6">
                    LeelaOS is our official operating system. Continuously
                    updated by our in-house software engineering team, it offers
                    backwards compatibility for all our computers, so you can
                    benefit from a fully optimised OS whether you're using a
                    Leela 5, a Leela 1, or any model in between.
                  </p>
                  <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
                    View all download options
                  </button>
                </div>
                <div className="flex justify-center">
                  <img
                    src={softwareData.os[0].image}
                    alt="LeelaOS"
                    className="max-w-xs h-auto rounded-lg"
                  />
                </div>
              </div>
            </section>
          ) : null}

          {/* Leela Pico */}
          {activeTab === "all" || activeTab === "pico" ? (
            <section className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Leela By Aaklan Pico
              </h2>

              {/* MicroPython */}
              <div className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      MicroPython
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A full implementation of the Python 3 programming language
                      that runs directly on Leela Pico-series microcontrollers.
                    </p>
                    <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                      Find out more
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={softwareData.pico[0].image}
                      alt="MicroPython"
                      className="max-w-xs h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* C/C++ SDK */}
              <div className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      C/C++ SDK
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For power users and professional developers, we provide a
                      complete C/C++ SDK and Visual Studio Code integration.
                    </p>
                    <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                      Find out more
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={softwareData.pico[1].image}
                      alt="C/C++ SDK"
                      className="max-w-xs h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Software Sources */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Software sources
                </h3>
                <p className="text-gray-600 mb-6">
                  Leela By Aaklan strives to open-source as much code as
                  possible to ensure it is adaptable and easy to use. We develop
                  and support software specifically for our products, focusing
                  our energy on providing the optimal user experience.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                          Name
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                          License
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                          Version
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {softwareSources.map((source, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-200 hover:bg-gray-50"
                        >
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {source.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {source.license}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {source.version}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button className="mt-4 px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  View sources
                </button>
              </div>
            </section>
          ) : null}

          {/* Individual Software Cards for Grid View */}
          {activeTab === "all" &&
            filteredSoftware.map((software, index) => (
              <motion.div
                key={software.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="flex justify-center">
                    <img
                      src={software.image}
                      alt={software.title}
                      className="max-w-xs h-32 object-contain"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {software.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{software.description}</p>
                    <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-sm">
                      Find out more
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Need help with installation or have questions about our software?
            </p>
            <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Software;
