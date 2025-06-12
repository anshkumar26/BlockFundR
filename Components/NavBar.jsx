import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CroudFunding";
import { Logo, Menu } from "../Components/index";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["White Paper", "Projects", "Donations", "Team"];

  return (
    <header className="bg-[#0f172a]/80 backdrop-blur-md text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Logo color="text-white" />
          <span>BlockFundr</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center text-sm">
          {menuItems.map((item, index) => (
            <a
              href="#"
              key={index}
              className="hover:text-teal-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}

          {!currentAccount && (
            <button
              onClick={connectWallet}
              className="bg-gradient-to-r from-teal-400 to-blue-600 text-white px-5 py-2 rounded-full hover:opacity-90 transition"
            >
              Connect Wallet
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1e293b] text-white px-6 py-4 space-y-4 rounded-b-xl shadow-lg">
          {menuItems.map((item, index) => (
            <a
              href="#"
              key={index}
              className="block text-sm hover:text-teal-400 transition"
            >
              {item}
            </a>
          ))}
          {!currentAccount && (
            <button
              onClick={connectWallet}
              className="w-full bg-gradient-to-r from-teal-400 to-blue-600 text-white px-5 py-2 rounded-full hover:opacity-90 transition"
            >
              Connect Wallet
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default NavBar;






// import React, { useState, useContext } from "react";

// //INTERNAL IMPORT
// import { CrowdFundingContext } from "../Context/CroudFunding";
// import { Logo, Menu } from "../Components/index";

// const NavBar = () => {
//   const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuList = ["White Paper", "Project", "Donation", "Members"];
//   return (
//     <div class="backgroundMain ">
//       <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
//         <div class="relative flex items-center justify-between">
//           <div class="flex items-center">
//             <a
//               href="/"
//               aria-label="Company"
//               title="Company"
//               class="inline-flex items-center mr-8"
//             >
//               <Logo color="text-white" />
//               <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
//                 BlockFundR
//               </span>
//             </a>
//             <ul class="flex items-center hidden space-x-8 lg:flex">
//               {menuList.map((el, i) => (
//                 <li key={i + 1}>
//                   <a
//                     href="/"
//                     aria-label="Our product"
//                     title="Our product"
//                     class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
//                   >
//                     {el}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {!currentAccount && (
//             <ul class="flex items-center hidden space-x-8 lg:flex">
//               <li>
//                 <button
//                   onClick={() => connectWallet()}
//                   class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background"
//                   aria-label="Sign up"
//                   title="Sign up"
//                 >
//                   Connect Wallet
//                 </button>
//               </li>
//             </ul>
//           )}

//           <div class="lg:hidden z-40">
//             <button
//               aria-label="Open Menu"
//               title="Open Menu"
//               class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <Menu />
//             </button>
//             {isMenuOpen && (
//               <div class="absolute top-0 left-0 w-full">
//                 <div class="p-5 bg-white border rounded shadow-sm">
//                   <div class="flex items-center justify-between mb-4">
//                     <div>
//                       <a
//                         href="/"
//                         aria-label="Company"
//                         title="Company"
//                         class="inline-flex items-center"
//                       >
//                         <Logo color="text-black" />
//                         <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
//                           Company
//                         </span>
//                       </a>
//                     </div>
//                     <div>
//                       <button
//                         aria-label="Close Menu"
//                         title="Close Menu"
//                         class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
//                           <path
//                             fill="currentColor"
//                             d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                   <nav>
//                     <ul class="space-y-4">
//                       {menuList.map((el, i) => (
//                         <li key={i + 1}>
//                           <a
//                             href="/"
//                             aria-label="Our product"
//                             title="Our product"
//                             class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                           >
//                             {el}
//                           </a>
//                         </li>
//                       ))}
//                       <li>
//                         <a
//                           href="/"
//                           class="inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
//                           aria-label="Sign up"
//                           title="Sign up"
//                         >
//                           Connect Wallet
//                         </a>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
