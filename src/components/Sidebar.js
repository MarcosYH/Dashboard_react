import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Sidebar.css";
export default function Sidebar() {
  return (
    <div className=" w-64 flex-none h-screen border-r">
      <div className=" p-10">
        <img src={Logo} alt="Logo" className=" h-20" />
      </div>
      <nav className=" mt-4">
        <div className="hover:bg-[#0A2FB6] mx-2 bg-[#F0F0F0] flex dash_link p-2 rounded-md">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 13V15M10 9V15M14 5V15M5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <a className="block px-4 text-sm " href=" #">
            Dashboard
          </a>
        </div>
        
        <div className="hover:bg-[#0A2FB6] mx-2 bg-[#F0F0F0] flex dash_link p-2 rounded-md my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="21"
            viewBox="0 0 25 21"
            fill="none"
          >
            <path
              d="M1 1H24.1111V15.0556H1V1Z"
              stroke="#0B1719"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5555 11.8611C9.66665 10.5833 5.33331 11.8611 5.33331 11.8611V5.47223C9.66665 2.91667 12.5555 5.47223 12.5555 5.47223M12.5555 11.8611V5.47223M12.5555 11.8611C12.5555 11.8611 16.8889 10.5833 19.7778 11.8611V5.47223C19.7778 5.47223 16.8889 2.91667 12.5555 5.47223"
              stroke="#0B1719"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.8333 16.333L7.5 20.1663H17.6111L13.2778 16.333H11.8333Z"
              fill="#0B1719"
              stroke="#0B1719"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <a className="block px-4 text-sm" href=" #">
            Contact
          </a>
        </div>
        <a className="block py-2 px-4 text-sm hover:bg-gray-700" href=" #">
          About
        </a>
      </nav>
    </div>
  );
}
