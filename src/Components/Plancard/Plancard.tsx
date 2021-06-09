import React from "react";
// import Button from "../Button/Button";

const Plancard = () => {
    return (
        <>
          <div className="mb-4 border border-gray-80 rounded overflow-hidden">
            <div className="w-full bg-gray-200 h-40"></div>
            <div className="p-2">
              <div className="flex justify-between">
                <span className="text-sm">Live yoga with goga</span>
                <span className="text-sm font-medium">50+ Enrolled</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-sm">Live yoga with goga</span>
                <span className="text-sm font-medium text-blue-500">INR 400</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm underline">View Details</span>
                <button className="text-sm text-white bg-yellow-600 px-3 py-1 rounded">Book Now</button>
              </div>
            </div>
          </div>
        </>
    );
};

export default Plancard;
