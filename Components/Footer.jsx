import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "support@blockfundr.com",
    "blockfund@gmail.com",
    "Contact us",
  ];
  const usefulLinks = ["Home", "About BlockFundr", "Company Bio"];

  return (
    <footer className="text-white bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h6 className="mb-6 font-semibold uppercase text-lg">BlockFundr</h6>
          <p className="text-gray-300">
            Make your transaction safely and securely.

          </p>
        </div>

        <div>
          <h6 className="mb-6 font-semibold uppercase text-lg">Products</h6>
          {productList.map((item, index) => (
            <p key={index} className="mb-3">
              <a
                href="#!"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                {item}
              </a>
            </p>
          ))}
        </div>

        <div>
          <h6 className="mb-6 font-semibold uppercase text-lg">Useful Links</h6>
          {usefulLinks.map((item, index) => (
            <p key={index} className="mb-3">
              <a
                href="#!"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                {item}
              </a>
            </p>
          ))}
        </div>

        <div>
          <h6 className="mb-6 font-semibold uppercase text-lg">Contact</h6>
          {contactList.map((item, index) => (
            <p key={index} className="mb-3">
              <a
                href="#!"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                {item}
              </a>
            </p>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 text-center py-6">
        <span className="text-gray-400">© 2023 Copyright: </span>
        <a
          href="https://blockfundr.com/"
          className="text-teal-400 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          BlockFundr
        </a>
      </div>
    </footer>
  );
};

export default Footer;




// import React from "react";

// const Footer = () => {
//   const productList = ["Market", "ERC20 Token", "Donation"];
//   const contactList = [
//     "support@cryptoking.com",
//     "info@example.com",
//     "Contact us",
//   ];
//   const usefullLink = ["Home", "About Us", "Company Bio"];
//   return (
//     <footer class="text-center text-white backgroundMain lg:text-left">
//       <div class="mx-6 py-10 text-center md:text-left">
//         <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           <div class="">
//             <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
//               BlockFundR
//             </h6>
//             <p>
//               Empowering innovation through decentralized funding.
//               We keep your identity private.
//             </p>
//           </div>
//           <div class="">
//             <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
//               Products
//             </h6>
//             {productList.map((el, i) => (
//               <p class="mb-4" key={i + 1}>
//                 <a href="#!">{el}</a>
//               </p>
//             ))}
//           </div>
//           <div class="">
//             <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
//               Useful links
//             </h6>
//             {usefullLink.map((el, i) => (
//               <p class="mb-4" key={i + 1}>
//                 <a href="#!">{el}</a>
//               </p>
//             ))}
//           </div>
//           <div>
//             <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
//               Contact
//             </h6>
//             {contactList.map((el, i) => (
//               <p class="mb-4" key={i + 1}>
//                 <a href="#!">{el}</a>
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div class="backgroundMain p-6 text-center">
//         <span>© 2025 Copyright:</span>
//         <a class="font-semibold " href="https://tailwind-elements.com/">
//           BlockFundR
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;