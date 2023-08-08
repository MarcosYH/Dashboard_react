import React, { useState } from "react";
import Logo from "../assets/logo.png";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 w-64 h-screen transition-transform ${
          showSidebar ? "translate-x-0 bg-white" : "-translate-x-full "
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className=" w-64 flex-none h-screen border-r">
          {/* Button to close sidebar */}
          <button
            type="button"
            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
            onClick={closeSidebar}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className=" p-10">
            <img src={Logo} alt="Logo" className=" h-20" />
          </div>

          <nav className=" mt-4">
            {/* Dashboard-link */}
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
            {/* Laboratoires-link */}
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
                Laboratoires
              </a>
            </div>
            {/*  Parcours_d'apprentissages-link */}
            <div className="hover:bg-[#0A2FB6] mx-2 bg-[#F0F0F0] flex dash_link p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="23"
                viewBox="0 0 29 23"
                fill="none"
              >
                <path
                  d="M28.401 8.47976C29.1997 8.09245 29.1997 6.83397 28.401 6.44666L15.7016 0.278552C15.3187 0.0921109 14.9099 0 14.5 0C14.0901 0 13.6813 0.0932206 13.2984 0.279662L0.599033 6.44666C-0.199678 6.83508 -0.199678 8.09245 0.599033 8.47976L6.5029 11.3474V15.0318C6.5029 16.2925 7.14466 17.4456 8.1603 18.0094C10.1566 19.1169 12.3278 19.6707 14.5 19.6707C16.6722 19.6707 18.8434 19.1169 20.8387 18.0094C21.8553 17.4456 22.4971 16.2925 22.4971 15.0318V11.3474L26.4957 9.40531V17.4511C25.9439 17.4511 25.496 17.9483 25.496 18.5609V21.8902C25.496 22.5028 25.9439 23 26.4957 23H27.4953C28.0471 23 28.4949 22.5028 28.4949 21.8902V18.5609C28.4949 17.9483 28.0471 17.4511 27.4953 17.4511V8.91923L28.401 8.47976ZM21.4975 15.0318C21.4975 15.8775 21.0736 16.6388 20.3919 17.0172C18.5725 18.0271 16.5343 18.5609 14.5 18.5609C12.4657 18.5609 10.4275 18.0271 8.60813 17.0172C7.92638 16.6388 7.50253 15.8775 7.50253 15.0318V11.8335L13.2984 14.6479C13.6813 14.8343 14.0911 14.9275 14.5 14.9275C14.9099 14.9275 15.3187 14.8343 15.7016 14.6479L21.4975 11.8324V15.0318ZM15.3017 13.6313C15.0478 13.7545 14.7779 13.8178 14.5 13.8178C14.2221 13.8178 13.9532 13.7556 13.6983 13.6313L0.999888 7.46321L13.6983 1.2951C13.9532 1.17192 14.2221 1.10977 14.5 1.10977C14.7779 1.10977 15.0468 1.17192 15.3017 1.29621L28.0001 7.46321L26.8825 8.00589L15.3937 6.98601C15.2317 6.61423 14.8959 6.35344 14.5 6.35344C13.9482 6.35344 13.5004 6.85062 13.5004 7.46321C13.5004 8.0758 13.9482 8.57298 14.5 8.57298C14.8369 8.57298 15.1208 8.37544 15.3017 8.09134L24.9442 8.94808L15.3017 13.6313Z"
                  fill="#0B1719"
                />
              </svg>
              <a className="block pl-3 text-sm " href=" #">
                Parcours d'apprentissages
              </a>
            </div>

            <div className="hover:bg-[#0A2FB6] mx-2 bg-[#F0F0F0] flex dash_link p-2 rounded-md my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
              >
                <g clip-path="url(#clip0_122_25067)">
                  <path
                    d="M21 22.5H7C6.53603 22.4995 6.09122 22.3414 5.76315 22.0602C5.43508 21.7789 5.25053 21.3977 5.25 21V3C5.25046 2.6023 5.43499 2.221 5.76307 1.93978C6.09116 1.65856 6.53601 1.5004 7 1.5H21C21.464 1.50046 21.9088 1.65864 22.2368 1.93984C22.5649 2.22105 22.7495 2.60232 22.75 3V15.4636L18.375 13.5886L14 15.4636V3H7V21H21V18H22.75V21C22.7494 21.3977 22.5648 21.7789 22.2367 22.0601C21.9087 22.3413 21.4639 22.4995 21 22.5ZM18.375 11.9114L21 13.0364V3H15.75V13.0364L18.375 11.9114Z"
                    fill="#0B1719"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_122_25067">
                    <rect width="28" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <a className="block px-3 text-sm " href=" #">
                Cours
              </a>
            </div>

            <div className="hover:bg-[#0A2FB6] mx-2 bg-[#F0F0F0] flex dash_link p-2 rounded-md my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="23"
                viewBox="0 0 21 23"
                fill="none"
              >
                <path
                  d="M20.9089 20.8535L18.7159 16.9712C19.2717 15.9755 19.4396 14.8017 19.186 13.6847C18.9324 12.5677 18.276 11.5899 17.3481 10.947V1.0919C17.3481 0.802314 17.2357 0.524583 17.0357 0.319811C16.8356 0.11504 16.5642 0 16.2813 0H1.06233C0.922437 -1.31857e-06 0.783924 0.0282747 0.654739 0.0832052C0.525555 0.138136 0.408244 0.218638 0.309539 0.320093C0.210834 0.421547 0.132679 0.541955 0.0795615 0.674404C0.0264439 0.806853 -0.000590601 0.948734 9.78479e-06 1.0919V19.687C9.78479e-06 19.9753 0.111932 20.2519 0.311155 20.4557C0.510378 20.6596 0.780583 20.7742 1.06233 20.7742H8.83593L8.79033 20.8535C8.74504 20.9277 8.72103 21.0134 8.72103 21.1008C8.72103 21.1883 8.74504 21.274 8.79033 21.3481C8.83868 21.4239 8.90753 21.4837 8.98848 21.5202C9.06944 21.5566 9.159 21.5682 9.24626 21.5535L10.6642 21.3668L11.2159 22.7154C11.2488 22.7955 11.303 22.8646 11.3723 22.9149C11.4416 22.9652 11.5232 22.9946 11.608 23H11.6353C11.7157 23.0003 11.7947 22.9789 11.8643 22.9379C11.934 22.897 11.9918 22.8379 12.032 22.7667L14.0472 19.2017C14.3134 19.2521 14.5835 19.2786 14.8542 19.281C15.1264 19.2784 15.398 19.2518 15.6658 19.2017L17.6946 22.7667C17.7348 22.8379 17.7927 22.897 17.8623 22.9379C17.932 22.9789 18.011 23.0003 18.0913 23H18.1187C18.2034 22.9946 18.2851 22.9652 18.3543 22.9149C18.4236 22.8646 18.4778 22.7955 18.5108 22.7154L19.0624 21.3668L20.4804 21.5535C20.5654 21.5657 20.6521 21.5532 20.7305 21.5172C20.8089 21.4813 20.8758 21.4234 20.9234 21.3502C20.9711 21.2771 20.9976 21.1917 20.9998 21.1038C21.0021 21.0159 20.9801 20.9291 20.9363 20.8535H20.9089ZM1.06233 19.8409C1.02242 19.8409 0.984153 19.8247 0.955937 19.7958C0.927721 19.767 0.911869 19.7278 0.911869 19.687V1.0919C0.911852 1.05062 0.927556 1.01096 0.955649 0.981339C0.983741 0.951716 1.02201 0.934466 1.06233 0.933252H16.2721C16.3133 0.933252 16.3527 0.949967 16.3818 0.979721C16.4108 1.00947 16.4272 1.04983 16.4272 1.0919V10.4711C16.0282 10.314 15.6088 10.2181 15.1825 10.1864V2.67377C15.1825 2.55001 15.1344 2.43132 15.0489 2.34381C14.9634 2.2563 14.8475 2.20714 14.7265 2.20714H2.60793C2.48701 2.20714 2.37104 2.2563 2.28554 2.34381C2.20003 2.43132 2.152 2.55001 2.152 2.67377V18.1004C2.152 18.2242 2.20003 18.3429 2.28554 18.4304C2.37104 18.5179 2.48701 18.567 2.60793 18.567H10.0806L9.36025 19.8409H1.06233ZM10.3998 14.7221C10.4003 15.5109 10.6014 16.286 10.9834 16.9712L10.6049 17.6338H3.06386V3.14039H14.2706V10.2098C13.2012 10.3554 12.2197 10.8929 11.508 11.7226C10.7962 12.5523 10.4025 13.6179 10.3998 14.7221ZM11.6946 21.4881L11.3663 20.6809C11.3285 20.5913 11.2642 20.516 11.1824 20.4658C11.1006 20.4156 11.0055 20.3929 10.9104 20.4009L10.0624 20.5082L11.5943 17.7924C12.0222 18.2796 12.5479 18.6663 13.1353 18.9264L11.6946 21.4881ZM11.3116 14.7221C11.3125 14.0061 11.5208 13.3065 11.9101 12.7116C12.2994 12.1167 12.8523 11.6533 13.4989 11.38C14.1454 11.1066 14.8567 11.0356 15.5427 11.1758C16.2287 11.3161 16.8587 11.6613 17.353 12.1679C17.8473 12.6745 18.1839 13.3197 18.32 14.022C18.4561 14.7243 18.3858 15.4521 18.1179 16.1135C17.85 16.7749 17.3965 17.3401 16.8148 17.7378C16.2331 18.1355 15.5492 18.3477 14.8496 18.3477C13.9109 18.3465 13.011 17.964 12.3476 17.2841C11.6842 16.6043 11.3116 15.6828 11.3116 14.7221ZM18.8117 20.4009C18.7129 20.3877 18.6127 20.4079 18.5263 20.4584C18.4398 20.509 18.3719 20.5871 18.3329 20.6809L18.0047 21.4881L16.5594 18.9264C17.1648 18.6728 17.7082 18.2856 18.1506 17.7924L19.6825 20.5082L18.8117 20.4009Z"
                  fill="#0B1719"
                />
              </svg>
              <a className="block px-3 text-sm " href=" #">
                Réalisations
              </a>
            </div>
          </nav>
          <div className=" absolute bottom-0 w-60 mb-10">
            <div className="hover:bg-[#0A2FB6] mx-2 bg-[#F0F0F0] flex dash_link p-2 rounded-md my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
                  stroke="#667085"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.7273 13.7273C17.6063 14.0015 17.5702 14.3056 17.6236 14.6005C17.6771 14.8954 17.8177 15.1676 18.0273 15.3818L18.0818 15.4364C18.2509 15.6052 18.385 15.8057 18.4765 16.0265C18.568 16.2472 18.6151 16.4838 18.6151 16.7227C18.6151 16.9617 18.568 17.1983 18.4765 17.419C18.385 17.6397 18.2509 17.8402 18.0818 18.0091C17.913 18.1781 17.7124 18.3122 17.4917 18.4037C17.271 18.4952 17.0344 18.5423 16.7955 18.5423C16.5565 18.5423 16.3199 18.4952 16.0992 18.4037C15.8785 18.3122 15.678 18.1781 15.5091 18.0091L15.4545 17.9545C15.2403 17.745 14.9682 17.6044 14.6733 17.5509C14.3784 17.4974 14.0742 17.5335 13.8 17.6545C13.5311 17.7698 13.3018 17.9611 13.1403 18.205C12.9788 18.4489 12.8921 18.7347 12.8909 19.0273V19.1818C12.8909 19.664 12.6994 20.1265 12.3584 20.4675C12.0174 20.8084 11.5549 21 11.0727 21C10.5905 21 10.1281 20.8084 9.78708 20.4675C9.4461 20.1265 9.25455 19.664 9.25455 19.1818V19.1C9.24751 18.7991 9.15011 18.5073 8.97501 18.2625C8.79991 18.0176 8.55521 17.8312 8.27273 17.7273C7.99853 17.6063 7.69437 17.5702 7.39947 17.6236C7.10456 17.6771 6.83244 17.8177 6.61818 18.0273L6.56364 18.0818C6.39478 18.2509 6.19425 18.385 5.97353 18.4765C5.7528 18.568 5.51621 18.6151 5.27727 18.6151C5.03834 18.6151 4.80174 18.568 4.58102 18.4765C4.36029 18.385 4.15977 18.2509 3.99091 18.0818C3.82186 17.913 3.68775 17.7124 3.59626 17.4917C3.50476 17.271 3.45766 17.0344 3.45766 16.7955C3.45766 16.5565 3.50476 16.3199 3.59626 16.0992C3.68775 15.8785 3.82186 15.678 3.99091 15.5091L4.04545 15.4545C4.25503 15.2403 4.39562 14.9682 4.4491 14.6733C4.50257 14.3784 4.46647 14.0742 4.34545 13.8C4.23022 13.5311 4.03887 13.3018 3.79497 13.1403C3.55107 12.9788 3.26526 12.8921 2.97273 12.8909H2.81818C2.33597 12.8909 1.87351 12.6994 1.53253 12.3584C1.19156 12.0174 1 11.5549 1 11.0727C1 10.5905 1.19156 10.1281 1.53253 9.78708C1.87351 9.4461 2.33597 9.25455 2.81818 9.25455H2.9C3.2009 9.24751 3.49273 9.15011 3.73754 8.97501C3.98236 8.79991 4.16883 8.55521 4.27273 8.27273C4.39374 7.99853 4.42984 7.69437 4.37637 7.39947C4.3229 7.10456 4.18231 6.83244 3.97273 6.61818L3.91818 6.56364C3.74913 6.39478 3.61503 6.19425 3.52353 5.97353C3.43203 5.7528 3.38493 5.51621 3.38493 5.27727C3.38493 5.03834 3.43203 4.80174 3.52353 4.58102C3.61503 4.36029 3.74913 4.15977 3.91818 3.99091C4.08704 3.82186 4.28757 3.68775 4.50829 3.59626C4.72901 3.50476 4.96561 3.45766 5.20455 3.45766C5.44348 3.45766 5.68008 3.50476 5.9008 3.59626C6.12152 3.68775 6.32205 3.82186 6.49091 3.99091L6.54545 4.04545C6.75971 4.25503 7.03183 4.39562 7.32674 4.4491C7.62164 4.50257 7.9258 4.46647 8.2 4.34545H8.27273C8.54161 4.23022 8.77093 4.03887 8.93245 3.79497C9.09397 3.55107 9.18065 3.26526 9.18182 2.97273V2.81818C9.18182 2.33597 9.37338 1.87351 9.71435 1.53253C10.0553 1.19156 10.5178 1 11 1C11.4822 1 11.9447 1.19156 12.2856 1.53253C12.6266 1.87351 12.8182 2.33597 12.8182 2.81818V2.9C12.8193 3.19253 12.906 3.47834 13.0676 3.72224C13.2291 3.96614 13.4584 4.15749 13.7273 4.27273C14.0015 4.39374 14.3056 4.42984 14.6005 4.37637C14.8954 4.3229 15.1676 4.18231 15.3818 3.97273L15.4364 3.91818C15.6052 3.74913 15.8057 3.61503 16.0265 3.52353C16.2472 3.43203 16.4838 3.38493 16.7227 3.38493C16.9617 3.38493 17.1983 3.43203 17.419 3.52353C17.6397 3.61503 17.8402 3.74913 18.0091 3.91818C18.1781 4.08704 18.3122 4.28757 18.4037 4.50829C18.4952 4.72901 18.5423 4.96561 18.5423 5.20455C18.5423 5.44348 18.4952 5.68008 18.4037 5.9008C18.3122 6.12152 18.1781 6.32205 18.0091 6.49091L17.9545 6.54545C17.745 6.75971 17.6044 7.03183 17.5509 7.32674C17.4974 7.62164 17.5335 7.9258 17.6545 8.2V8.27273C17.7698 8.54161 17.9611 8.77093 18.205 8.93245C18.4489 9.09397 18.7347 9.18065 19.0273 9.18182H19.1818C19.664 9.18182 20.1265 9.37338 20.4675 9.71435C20.8084 10.0553 21 10.5178 21 11C21 11.4822 20.8084 11.9447 20.4675 12.2856C20.1265 12.6266 19.664 12.8182 19.1818 12.8182H19.1C18.8075 12.8193 18.5217 12.906 18.2778 13.0676C18.0339 13.2291 17.8425 13.4584 17.7273 13.7273Z"
                  stroke="#667085"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a className="block px-3 text-sm " href=" #">
                Settings
              </a>
            </div>

            <div className="hover:bg-[#0A2FB6] mx-2 bg-[#F0F0F0] flex dash_link p-2 rounded-md my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.13626 9.13628L4.92893 4.92896M4.92893 19.0711L9.16797 14.8321M14.8611 14.8638L19.0684 19.0711M19.0684 4.92896L14.8287 9.16862M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                  stroke="#667085"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a className="block px-3 text-sm " href=" #">
                Help
              </a>
            </div>

            <div className="hover:bg-[#0A2FB6] mx-2 bg-[#F0F0F0] flex dash_link p-2 rounded-md my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a className="block px-3 text-sm " href=" #">
                Déconnexion
              </a>
            </div>
          </div>
        </div>
      </aside>
      {/* <div className="p-4 lg:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          <svg
            className="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 1v16M1 9h16"
            />
          </svg>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          <svg
            className="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 1v16M1 9h16"
            />
          </svg>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div> */}
    </>
  );
}
