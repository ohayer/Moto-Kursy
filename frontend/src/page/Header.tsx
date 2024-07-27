import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const references = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <header className="bg-gray-800 text-black p-4 items-center flex justify-between bg-wmain">
      <Logo />
      <div className="hidden md:flex items-center gap-4">
        {references.map((reference) => (
          <a
            key={reference.name}
            href={reference.link}
            className="text-black hover:text-gray-600 mx-2"
          >
            {reference.name}
          </a>
        ))}
        <a
          className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-600"
          href="/courses"
        >
          Find a Course
        </a>
      </div>

      <button
        className="md:hidden text-black"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="bg-white w-64 h-full p-4">
          <button
            className="text-black mb-4"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>
          {references.map((reference) => (
            <a
              key={reference.name}
              href={reference.link}
              className="block text-black hover:text-gray-600 my-2"
              onClick={() => setSidebarOpen(false)}
            >
              {reference.name}
            </a>
          ))}
          <a
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-600 block mt-4"
            href="/courses"
            onClick={() => setSidebarOpen(false)}
          >
            Find a Course
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
