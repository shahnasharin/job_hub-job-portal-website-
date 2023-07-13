import React from "react";
import Card1 from '../../assets/job5.jpeg'

function HomePage4Card() {
  return (
    <div className="p-5">
      <div className="max-w-sm p-6 bg-gray-100 border border-gray-100 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={Card1} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-400 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-800 dark:focus:ring-pink-500"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage4Card;
