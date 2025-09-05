import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";

function ListingPage1() {
  let navigate = useNavigate();
  let {
    title,
    setTitle,
    description,
    setDescription,
    frontEndImage1,
    setFrontEndImage1,
    frontEndImage2,
    setFrontEndImage2,
    frontEndImage3,
    setFrontEndImage3,
    backEndImage1,
    setBackEndImage1,
    backEndImage2,
    setBackEndImage2,
    backEndImage3,
    setBackEndImage3,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
  } = useContext(listingDataContext);

  const handleImage1 = (e) => {
    let file = e.target.files[0];
    setBackEndImage1(file);
    setFrontEndImage1(URL.createObjectURL(file));
  };
  const handleImage2 = (e) => {
    let file = e.target.files[0];
    setBackEndImage2(file);
    setFrontEndImage2(URL.createObjectURL(file));
  };
  const handleImage3 = (e) => {
    let file = e.target.files[0];
    setBackEndImage3(file);
    setFrontEndImage3(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative px-4 py-10">
      {/* Form */}
      <form
        className="w-full max-w-2xl bg-white/70 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-8 flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/listingpage2");
        }}
      >
        {/* Back Button */}
        <button
          type="button"
          className="absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-md hover:scale-105 transition"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong className="text-white w-6 h-6" />
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Set Up Your Home
        </h1>

        {/* Title Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-lg font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="_bhk house or best title"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label htmlFor="des" className="text-lg font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="des"
            className="w-full p-3 h-24 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        {/* Images */}
        {[
          { label: "Image 1", handler: handleImage1 },
          { label: "Image 2", handler: handleImage2 },
          { label: "Image 3", handler: handleImage3 },
        ].map((img, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <label className="text-lg font-medium text-gray-700">
              {img.label}
            </label>
            <input
              type="file"
              className="w-full rounded-lg border border-gray-400 p-2 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              required
              onChange={img.handler}
            />
          </div>
        ))}

        {/* Rent */}
        <div className="flex flex-col gap-2">
          <label htmlFor="rent" className="text-lg font-medium text-gray-700">
            Rent
          </label>
          <input
            type="number"
            id="rent"
            className="w-full p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
            required
            onChange={(e) => setRent(e.target.value)}
            value={rent}
            placeholder="Rs.______/day"
          />
        </div>

        {/* City */}
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="text-lg font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="City, Country"
          />
        </div>

        {/* Landmark */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="landmark"
            className="text-lg font-medium text-gray-700"
          >
            Landmark
          </label>
          <input
            type="text"
            id="landmark"
            className="w-full p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
            required
            onChange={(e) => setLandmark(e.target.value)}
            value={landmark}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:opacity-90 transition mt-4"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default ListingPage1;
