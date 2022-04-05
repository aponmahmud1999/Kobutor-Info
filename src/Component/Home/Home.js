import React from 'react';
import CustomReview from '../CustomReview/CustomReview';
import './Home.css';

const Home = () => {
    return (
      <div className="mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className="p-5 lg:mt-10">
            <h1 className="text-3xl font-bold px-10">Kobutor</h1>
            <h1 className="text-3xl pt-5 px-10 font-bold text-indigo-600">
              Information about Kobutor
            </h1>
            <p className="flex justify-center text-justify px-10 pt-5">
            Pigeons are gentle, plump, small-billed birds with a skin saddle (cere) between the bill and forehead. All pigeons strut about with a characteristic bobbing of the head. Because of their long wings and powerful flight muscles, they are strong, swift fliers.
            </p>
            <button className="mt-5 mx-10 bg-indigo-200 rounded p-3 font-bold">
               Demo
            </button>
          </div>
          <div>
            <img
              className="mx-10 img-size"
              src="https://cdn2.vectorstock.com/i/1000x1000/85/41/pigeon-city-bird-cartoon-funny-vector-31918541.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <CustomReview />
        </div>
      </div>
    );
};

export default Home;