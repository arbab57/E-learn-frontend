import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import VideoPlayer from "../components/videoPlayer";
import Loader from "../components/General/Loader";

const CoursePage = () => {
  const [course, setCourse] = useState(null);
  const [videoId, setVideoId] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [courseId, setCourseId] = useState(()=> {
  const id =  JSON.parse(localStorage.getItem("courseId"))
  return id;
  })

 



  useEffect(() => {
    window.scrollTo(0,0)
    const fetchData = async () => {
      setLoading(true);
      const { response, status } = await WebHandler(
        `${URLS.GETCOURSEBYID}${courseId}`,
        "GET"
      );
      setCourse(response);
      setLoading(false);
    };
    fetchData();
  }, []);

  const getVideo = (id) => {
    setVideoId(id);
    setShowVideo(true);
  };

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 3600000);
    const minutes = Math.floor((duration % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };
  console.log(courseId)

  return (
    <>
      {loading && <Loader />}
      <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
        {course && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src={course.data.details.img}
                alt={course.data.details.title}
                className="rounded-lg shadow-lg w-full object-cover h-64 md:h-full"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-800">
                {course.data.details.title}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {course.data.details.category}
              </p>
              <p className="mt-4 text-gray-700">{course.data.description}</p>
              <p className="mt-6 text-xl font-semibold text-blue-600">
                ${course.data.details.price}
              </p>
              <div className="flex items-center mt-4">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span className="font-medium">
                    {course.data.details.rating}
                  </span>
                </div>
                <span className="ml-2 text-gray-500">
                  ({course.data.details.numOfReviews} Reviews)
                </span>
              </div>
              <div className="mt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Buy Course
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Mentor Section */}
        {course && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800">Mentor</h2>
            <div className="flex items-center gap-4 mt-4">
              <img
                src={course.mentor.img}
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="text-gray-700 font-bold">{course.mentor.name}</p>
            </div>
          </div>
        )}
        {/* Lessons Section */}
        {showVideo && (
          <VideoPlayer
            courseId={course.id}
            videoId={videoId}
            setShowVideo={setShowVideo}
          />
        )}
        {course && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800">Lessons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              {course.data.lessons.map((lesson, index) => (
                <div
                  key={index}
                  onClick={() => getVideo(lesson.video)}
                  className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-transform overflow-hidden hover:scale-110 duration-300"
                >
                  <img
                    src={lesson.img}
                    alt={lesson.title}
                    className="rounded-lg mb-4 w-full h-40 object-cover transition-transform duration-300"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{lesson.desc}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Duration: {formatDuration(lesson.duration)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Reviews Section */}
        {course && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800">Reviews</h2>
            <div className="mt-4 space-y-6">
              {course.data.reviews.map((review, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg shadow-md hover:shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <FaUser className="text-gray-500" />
                    <p className="font-semibold">{review.user.name}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span className="text-sm text-gray-600">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CoursePage;
