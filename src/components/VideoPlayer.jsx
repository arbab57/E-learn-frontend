// import React, { useEffect, useState } from "react";
// import { WebHandler } from "../data/remote/WebHandler";
// import Loader from "./General/Loader";

// const VideoPlayer = ({ setShowVideo, videoId, courseId }) => {
//   const [video, setvideo] = useState("");
//   const [res, setRes] = useState("")
//   const [Loading, setLoading] = useState(false);

//   const base_url = import.meta.env.VITE_URL;

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const { response, status } = await WebHandler(
//         `${base_url}/courses/${courseId}/video/${videoId}`,
//         "GET"
//       );
//       if (status === 200) {
//         setLoading(false);
//         setvideo(response.link);
//       }else{
//         setRes(response.message)
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//     {Loading && <Loader/>}
//     <div className=" z-50 fixed top-0 left-0 bg-black bg-opacity-45 flex items-center justify-center w-screen h-screen">
//       <div className="h-{80} w-[60%] bg-white p-6 ">
//         <div className="flex justify-end p-2">
//           <div
//             onClick={() => setShowVideo(false)}
//             className="p-1 cursor-pointer bg-red-300 text-white text-xl"
//           >
//             X
//           </div>
//         </div>
//         {Loading ? (
//           <Loader />
//         ) : (
//           <iframe
//             width="100%"
//             height="315"
//             src={video}
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerpolicy="strict-origin-when-cross-origin"
//             allowfullscreen
//           ></iframe>
//         )}
//       </div>
//     </div>
//     </>
//   );
// };

// export default VideoPlayer;


import React, { useEffect, useState } from "react";
import { WebHandler } from "../data/remote/WebHandler";
import Loader from "./General/Loader";

const VideoPlayer = ({ setShowVideo, videoId, courseId }) => {
  const [video, setVideo] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const base_url = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { response, status } = await WebHandler(
        `${base_url}/courses/${courseId}/video/${videoId}`,
        "GET"
      );
      if (status === 200) {
        setLoading(false);
        setVideo(response.link);
      } else {
        setLoading(false);
        setMessage(response.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="z-50 fixed top-0 left-0 bg-black bg-opacity-45 flex items-center justify-center w-screen h-screen">
        <div className="h-80 w-[60%] bg-white p-6">
          <div className="flex justify-end p-2">
            <div
              onClick={() => setShowVideo(false)}
              className="p-1 cursor-pointer bg-red-300 text-white text-xl"
            >
              X
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : message ? (
            <div className="p-4 text-center">
              <h2>{message}</h2>
              <p>Please buy the course to access the video.</p>
            </div>
          ) : (
            <iframe
              width="100%"
              height="315"
              src={video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;