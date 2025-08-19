import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addFavorite } from "../Utilies";

const LawyerDetailse = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(params);
  console.log(id);
  const singleLawyer = data.find((lawyer) => lawyer.id === parseInt(id));
  //   console.log(singleLawyer );
  const {
    name,
    speciality,
    experience,
    licenseNumber,
    availability,
    fees,
    image,
  } = singleLawyer || {};

  const handleFavorite = () =>{
    addFavorite(singleLawyer)
  }

  return (
    <div className="py-12">
      <div className="card bg-base-100 p shadow-sm">
        <div className="card-body text-center">
          <h2 className="text-black font-bold text-4xl text-center">
            Lawyer’s Profile Details
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
            amet ut. Suscipit sed est fermentum magna. Quis vitae tempus
            facilisis turpis imperdiet mattis donec dignissim volutpat.
          </p>
        </div>
      </div>

      <div className="card card-side mt-8 bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="Movie" className="w-50 h-50 rounded-4xl" />
        </figure>
        <div className="flex mb-2 absolute left-80 top-0">
          <button className="btn btn-wide rounded-4xl h-5 gap-x-2 w-auto text-blue-500">
            {experience}+ experience
          </button>
        </div>
        <div className="card-body">
          <h2 className="card-title text-black font-bold text-xl">{name}</h2>

          <div className="flex gap-x-0">
            <p className="font-bold">{speciality}</p>
            <p>License No : {licenseNumber}</p>
          </div>
          <p>
            Availability{" "}
            <button className="text-blue-500 bg-green-200 rounded-2xl">
              {availability}
            </button>
          </p>
          <div className="card-actions ">
            <p className="mr-8">
              Consultation Fee :
              <span className="text-green-500 ml-8">TK: {fees}</span>
            </p>

            <Link to={`/lawyer-detailse/${id}`}>
              {/* <button className="btn btn-wide rounded-2xl">View Details</button> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 mt-12 shadow-sm">
        <div className="card-body text-center">
          <h2 className="text-black font-bold text-4xl text-center">
            Book an Appointment
          </h2>
          <div className="flex justify-between">
            <h2>Availability</h2>
            <button className=" text-green-700 rounded-xl bg-blue-200">
              Lawyer Available Today
            </button>
          </div>
        </div>
        <button className="w-auto border-yellow-950 border-radius-2 bg-amber-100 rounded-2xl ml-3 mr-3 mb-3 h-9">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your.
        </button>

        <Link to='/favorites' className='text-center w-auto p-5'>
        <button onClick={handleFavorite} className="w-auto border-yellow-950 border-radius-2 bg-green-600 rounded-2xl ml-3 mr-3 mb-3 h-9 text-white">
          Book Appointment Now
        </button>
        </Link>

      </div>
    </div>
  );
};

export default LawyerDetailse;
