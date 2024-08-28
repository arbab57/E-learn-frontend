import React, { useRef, useState, useEffect } from "react";
import { WebHandler } from "../../data/remote/WebHandler";
import { URLS } from "../../data/remote/URL";
import useClickOutside from "../../Hooks/UseClickOutside";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ setSetting }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => setSetting(false));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { response, status } = await WebHandler(URLS.USERDETAILS, "GET");
        setUser(response);
        console.log(response, status);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const onClose = () => {
    setSetting(false);
    navigate("/user-details");
  };

  return (
    <div className="flex justify-center items-center w-screen fixed top-0 left-0 bg-black bg-opacity-40 h-screen">
      <div
        ref={modalRef}
        className="rounded-xl bg-white p-6 max-w-lg w-full shadow-lg"
      >
        <div className="flex justify-center">
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0"></div>
              <div className="p-8">
                <div className="uppercase tracking-wide content-center bg-[#0DAFE6] text-white rounded-xl text-center text-xl font-semibold p-3">
                  USER DETAILS
                </div>
                <div className="mt-5">
                  <p className="block mt-1 text-lg leading-tight font-medium text-gray-500">
                    Name:{" "}
                    <span className="font-bold text-xl text-black">
                      {user?.name || "loading"}
                    </span>
                  </p>
                  <p className="block mt-1 text-lg leading-tight font-medium text-gray-500">
                    Email:{" "}
                    <span className="font-bold text-xl text-black">
                      {" "}
                      {user?.email || "loading..."}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
