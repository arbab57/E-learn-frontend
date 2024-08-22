import React from "react";

const Error = () => {
  return (
    <>
      <div className="mt-6 p-7">
        <div className="flex justify-center mt-4 ">
          <h1 className="text-[4.03rem]"> 404 Error </h1>
        </div>

        <div className="flex justify-center ">
          <h1 className="text-[1.03rem] hover:text-red-600">
            {" "}
            Page Not Found{" "}
          </h1>{" "}
        </div>

        <div className="mx-auto">
          <img
            className="mx-auto"
            src="https://thrivemyway.com/wp-content/uploads/2022/10/System-Generated-Fake-Error-Messages-scaled-e1667236077389.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Error;
