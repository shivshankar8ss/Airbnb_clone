import React, { useContext } from "react";
import Nav from "../Component/Nav";
import Card from "../Component/Card";
import { listingDataContext } from "../Context/ListingContext";
import { defaultListings } from "../data/defaultListings"; // adjust path

function Home() {
  let { newListData } = useContext(listingDataContext);

  // Use API data if available, else default listings
  const displayListings =
    newListData.length > 0 ? newListData : defaultListings;

  return (
    <div>
      <Nav />
      <div className="w-[100vw] flex items-center justify-center gap-[25px] flex-wrap mt-[250px] md:mt-[180px]">
        {displayListings.map((list) => (
          <Card
            key={list._id}
            title={list.title}
            landMark={list.landMark}
            city={list.city}
            image1={list.image1}
            image2={list.image2}
            image3={list.image3}
            rent={list.rent}
            id={list._id}
            ratings={list.ratings}
            isBooked={list.isBooked}
            host={list.host}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
