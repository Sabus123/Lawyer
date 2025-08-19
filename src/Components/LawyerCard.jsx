import React from "react";
import { PiIdentificationCardThin } from "react-icons/pi";
import { Link } from "react-router";

const LawyerCard = ({ lawyer }) => {
  const {
    name,
    speciality,
    licenseNumber,
    availability,
    experience,
    image,
    id,
  } = lawyer || {};
  return (
    
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Movie" className="w-50 h-50 rounded-4xl" />
      </figure>
      <div className="flex mb-2 absolute right-0 top-0">
        <button className="btn btn-wide rounded-4xl h-5 gap-x-2 w-auto text-green-400">
          Available
        </button>
        <button className="btn btn-wide rounded-4xl h-5 gap-x-2 w-auto text-blue-500">
          {experience}+ experience
        </button>
      </div>
      <div className="card-body">
        <h2 className="card-title text-black font-bold text-xl">{name}</h2>
        <p className="font-bold">{speciality}</p>
        <p>License No : {licenseNumber}</p>
        <div className="card-actions justify-end">
          <Link to={`/lawyer-detailse/${id}`}>
            <button className="btn btn-wide rounded-2xl">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
