// // Card.jsx
// import React from "react";

// const Card = ({ name, description, imageUrl, isReligious }) => {
//   return (
//     <div className="">
//       <div
//         className={`p-3 py-4 overflow-hidden rounded-xl bg-white h-full ${
//           isReligious ? "bg-theme-sky" : "bg-white"
//         }`}
//       >
//         <span
//           className={`p-3 inline-block rounded-full ${
//             isReligious ? "bg-theme-sky" : "bg-theme-orange"
//           }`}
//         >
//           <img src={imageUrl} className="w-7" alt={name} />
//         </span>
//         <h4 className="text-base text-start font-semibold md:max-w-[300px]">
//           {name}
//         </h4>
//         <p className="text-xs mt-3 mb-0">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
// Card.jsx
import React from "react";

const Card = ({ name, description, imageUrl, isReligious }) => {
  return (
    <div className="relative group op rounded-xl overflow-hidden">
      <div
        className={`p-3 py-4 overflow-hidden rounded-xl h-full transition-all duration-300 ease-in-out ${
          isReligious ? "bg-theme-sky" : "bg-white"
        } group-hover:bg-white   group-hover:after:content-[''] group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-gradient-to-r group-hover:after:from-[#FA807C] group-hover:after:via-[#9070B7] group-hover:after:to-[#22A2E6] group-hover:after:opacity-15 group-hover:after:animate-wave group-hover:rounded-xl`}
      >
        <span
          className={`p-3 inline-block rounded-full ${
            isReligious ? "bg-theme-sky" : "bg-theme-orange"
          }`}
        >
          <img src={imageUrl} className="w-7" alt={name} />
        </span>
        <h4 className="text-base text-start font-semibold md:max-w-[300px]">
          {name}
        </h4>
        <p className="text-xs mt-3 mb-0">{description}</p>

        {/* SVG on hover */}
        <svg
          className="absolute top-1 right-1 w-24 h-24 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-25"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_441_306"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="54"
            height="54"
          >
            <rect
              x="0.334961"
              y="0.334961"
              width="53.33"
              height="53.33"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_441_306)">
            <path
              d="M2.55713 46.9987V15.8896C2.55713 14.0378 3.20524 12.4638 4.50145 11.1676C5.79767 9.87141 7.37164 9.2233 9.22338 9.2233C11.0751 9.2233 12.6491 9.87141 13.9453 11.1676C15.2415 12.4638 15.8896 14.0378 15.8896 15.8896V16.5562L27 7.00122L38.1105 16.5562V15.8896C38.1105 14.0378 38.7586 12.4638 40.0548 11.1676C41.351 9.87141 42.925 9.2233 44.7767 9.2233C46.6284 9.2233 48.2024 9.87141 49.4986 11.1676C50.7949 12.4638 51.443 14.0378 51.443 15.8896V46.9987H29.2221V35.8883C29.2221 35.2587 29.0092 34.731 28.5833 34.3051C28.1574 33.8792 27.6296 33.6662 27 33.6662C26.3705 33.6662 25.8427 33.8792 25.4168 34.3051C24.9909 34.731 24.778 35.2587 24.778 35.8883V46.9987H2.55713ZM42.5546 18.1116H46.9988V15.8896C46.9988 15.26 46.7858 14.7322 46.3599 14.3063C45.934 13.8804 45.4063 13.6675 44.7767 13.6675C44.1471 13.6675 43.6194 13.8804 43.1935 14.3063C42.7676 14.7322 42.5546 15.26 42.5546 15.8896V18.1116ZM7.0013 18.1116H11.4455V15.8896C11.4455 15.26 11.2325 14.7322 10.8066 14.3063C10.3807 13.8804 9.85297 13.6675 9.22338 13.6675C8.59379 13.6675 8.06604 13.8804 7.64014 14.3063C7.21425 14.7322 7.0013 15.26 7.0013 15.8896V18.1116ZM7.0013 42.5546H11.4455V22.5558H7.0013V42.5546ZM15.8896 42.5546H20.3338V35.8883C20.3338 34.0366 20.9819 32.4626 22.2781 31.1664C23.5743 29.8702 25.1483 29.2221 27 29.2221C28.8518 29.2221 30.4258 29.8702 31.722 31.1664C33.0182 32.4626 33.6663 34.0366 33.6663 35.8883V42.5546H38.1105V22.3891L27 12.8342L15.8896 22.3891V42.5546ZM42.5546 42.5546H46.9988V22.5558H42.5546V42.5546ZM27 25.8889C26.0742 25.8889 25.2872 25.5649 24.6391 24.9168C23.991 24.2687 23.6669 23.4817 23.6669 22.5558C23.6669 21.6299 23.991 20.8429 24.6391 20.1948C25.2872 19.5467 26.0742 19.2227 27 19.2227C27.9259 19.2227 28.7129 19.5467 29.361 20.1948C30.0091 20.8429 30.3332 21.6299 30.3332 22.5558C30.3332 23.4817 30.0091 24.2687 29.361 24.9168C28.7129 25.5649 27.9259 25.8889 27 25.8889Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Card;
