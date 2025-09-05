import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { listingDataContext } from "../Context/ListingContext";

function ListingPage2() {
  let navigate = useNavigate();
  let { category, setCategory } = useContext(listingDataContext);

  const categories = [
    {
      key: "villa",
      label: "Villa",
      icon: <GiFamilyHouse className="w-7 h-7" />,
    },
    {
      key: "farmHouse",
      label: "Farm House",
      icon: <FaTreeCity className="w-7 h-7" />,
    },
    {
      key: "poolHouse",
      label: "Pool House",
      icon: <MdOutlinePool className="w-7 h-7" />,
    },
    {
      key: "rooms",
      label: "Rooms",
      icon: <MdBedroomParent className="w-7 h-7" />,
    },
    {
      key: "flat",
      label: "Flat",
      icon: <BiBuildingHouse className="w-7 h-7" />,
    },
    { key: "pg", label: "PG", icon: <IoBedOutline className="w-7 h-7" /> },
    { key: "cabin", label: "Cabin", icon: <GiWoodCabin className="w-7 h-7" /> },
    {
      key: "shops",
      label: "Shops",
      icon: <SiHomeassistantcommunitystore className="w-7 h-7" />,
    },
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-start relative overflow-auto px-4">
      {/* Back button */}
      <div
        className="absolute top-6 left-6 w-12 h-12 bg-gray-700/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-600 transition"
        onClick={() => navigate("/listingpage1")}
      >
        <FaArrowLeftLong className="w-6 h-6 text-white" />
      </div>

      {/* Heading */}
      <h1 className="mt-20 text-xl md:text-3xl font-semibold text-gray-100">
        Which of these best describes your place?
      </h1>

      {/* Category selector */}
      <div className="mt-10 max-w-4xl w-full flex flex-wrap items-center justify-center gap-6">
        {categories.map((item) => (
          <div
            key={item.key}
            className={`w-44 h-28 flex flex-col items-center justify-center rounded-xl border-2 transition-all duration-200 cursor-pointer
            ${
              category === item.key
                ? "border-red-500 bg-gray-800/60 shadow-lg scale-105"
                : "border-gray-600 bg-gray-800/30 hover:bg-gray-700/40 hover:border-gray-400"
            }`}
            onClick={() => setCategory(item.key)}
          >
            <div className="text-gray-100 mb-2">{item.icon}</div>
            <h3 className="text-sm md:text-base">{item.label}</h3>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className={`px-10 py-3 mt-12 rounded-lg font-medium text-lg shadow-md transition-all duration-200 absolute right-6 bottom-6 
          ${
            category
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-gray-600 cursor-not-allowed text-gray-300"
          }`}
        onClick={() => navigate("/listingpage3")}
        disabled={!category}
      >
        Next
      </button>
    </div>
  );
}

export default ListingPage2;
