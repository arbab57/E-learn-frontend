import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import Loader from "../components/General/Loader";
import PaymentCard from "../components/PaymentCard";
import Review from "../components/Review";
import VideoPlayer from "../components/VideoPlayer";
import Rating from "../components/General/Rating";
import { Context } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const CoursePage = () => {
  const [course, setCourse] = useState({
    id: "66cc7229f42611600c93c2e2",
    data: {
      details: {
        category: "Backend Development",
        title: "Introduction to Node.js",
        price: 129.99,
        rating: 4.2,
        numOfReviews: 17,
        img: "https://plus.unsplash.com/premium_photo-1661284886711-4eaee4fa7771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      mentor: "66cc7228f42611600c93c0c2",
      duration: 43012820,
      description:
        "Understand ethical hacking and penetration testing to identify and address security vulnerabilities. The course covers techniques for conducting security assessments, finding weaknesses, and implementing measures to improve overall system security.",
      reviews: [
        {
          rating: 4,
          review:
            "Great course overall. The material was useful, but a few more interactive elements would enhance the experience.",
          _id: "66cc7229f42611600c93c2e3",
          date: 1724674601023,
          user: {
            _id: "66cc722bf42611600c93c622",
            name: "user-9",
            email: "user-9@gmail.com",
          },
        },
        {
          rating: 5,
          review:
            "Fantastic course! The hands-on projects and quizzes really helped reinforce the concepts learned.",
          _id: "66cc7229f42611600c93c2e4",
          date: 1724674601023,
          user: {
            _id: "66cc722cf42611600c93c630",
            name: "user-16",
            email: "user-16@gmail.com",
          },
        },
        {
          rating: 5,
          review:
            "Outstanding course! The practical projects were very helpful in applying the concepts learned.",
          _id: "66cc7229f42611600c93c2e5",
          date: 1724674601023,
          user: {
            _id: "66cc722df42611600c93c642",
            name: "user-25",
            email: "user-25@gmail.com",
          },
        },
        {
          rating: 3,
          review:
            "The course was adequate but lacked interactive components. More hands-on activities would be beneficial.",
          _id: "66cc7229f42611600c93c2e6",
          date: 1724674601023,
          user: {
            _id: "66cc722df42611600c93c640",
            name: "user-24",
            email: "user-24@gmail.com",
          },
        },
        {
          rating: 4,
          review:
            "Great course overall. The material was useful, but a few more interactive elements would enhance the experience.",
          _id: "66cc7229f42611600c93c2e7",
          date: 1724674601023,
          user: {
            _id: "66cc722cf42611600c93c62c",
            name: "user-14",
            email: "user-14@gmail.com",
          },
        },
        {
          rating: 4,
          review:
            "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
          _id: "66cc7229f42611600c93c2e8",
          date: 1724674601023,
          user: {
            _id: "66cc722ef42611600c93c64a",
            name: "user-29",
            email: "user-29@gmail.com",
          },
        },
        {
          rating: 4,
          review:
            "Good course overall. The instructor was clear and concise, though some areas felt a bit rushed.",
          _id: "66cc7229f42611600c93c2e9",
          date: 1724674601023,
          user: {
            _id: "66cc722df42611600c93c63c",
            name: "user-22",
            email: "user-22@gmail.com",
          },
        },
        {
          rating: 4,
          review:
            "Very good course. The material was relevant, but a few sections could have been more engaging.",
          _id: "66cc7229f42611600c93c2ea",
          date: 1724674601023,
          user: {
            _id: "66cc722cf42611600c93c634",
            name: "user-18",
            email: "user-18@gmail.com",
          },
        },
        {
          rating: 3,
          review:
            "The course covered basic concepts but lacked depth in some areas. More detailed content would be useful.",
          _id: "66cc7229f42611600c93c2eb",
          date: 1724674601023,
          user: {
            _id: "66cc722df42611600c93c63c",
            name: "user-22",
            email: "user-22@gmail.com",
          },
        },
        {
          rating: 5,
          review:
            "Outstanding course! The practical projects were very helpful in applying the concepts learned.",
          _id: "66cc7229f42611600c93c2ec",
          date: 1724674601023,
          user: {
            _id: "66cc722cf42611600c93c62a",
            name: "user-13",
            email: "user-13@gmail.com",
          },
        },
        {
          rating: 5,
          review:
            "Highly recommended! The course was well-organized, and the instructor's teaching style was very effective.",
          _id: "66cc7229f42611600c93c2ed",
          date: 1724674601023,
          user: {
            _id: "66cc722ef42611600c93c644",
            name: "user-26",
            email: "user-26@gmail.com",
          },
        },
        {
          rating: 3,
          review:
            "The course provided basic information but lacked depth in certain areas. More detailed content would be beneficial.",
          _id: "66cc7229f42611600c93c2ee",
          date: 1724674601023,
          user: {
            _id: "66cc722cf42611600c93c62a",
            name: "user-13",
            email: "user-13@gmail.com",
          },
        },
        {
          rating: 5,
          review:
            "An outstanding course with clear explanations and practical applications. I feel much more confident in the subject.",
          _id: "66cc7229f42611600c93c2ef",
          date: 1724674601023,
          user: {
            _id: "66cc722bf42611600c93c624",
            name: "user-10",
            email: "user-10@gmail.com",
          },
        },
        {
          rating: 5,
          review:
            "Exceptional course! The instructor was knowledgeable, and the content was well-organized and relevant.",
          _id: "66cc7229f42611600c93c2f0",
          date: 1724674601023,
          user: {
            _id: "66cc722cf42611600c93c62c",
            name: "user-14",
            email: "user-14@gmail.com",
          },
        },
        {
          rating: 4,
          review:
            "Good course with useful material. A few more examples and hands-on activities would make it even better.",
          _id: "66cc7229f42611600c93c2f1",
          date: 1724674601024,
          user: {
            _id: "66cc722df42611600c93c640",
            name: "user-24",
            email: "user-24@gmail.com",
          },
        },
        {
          rating: 5,
          review: "good",
          user: {
            _id: "66d05d8673e3cbafbdb882b5",
            name: "1",
            email: "1@gmail.com",
          },
          _id: "66d05dd573e3cbafbdb8833c",
          date: 1724931541843,
        },
        {
          rating: 4,
          review: "Good.. ",
          user: {
            _id: "66cc787cb0d15b4465e34f22",
            name: "Wardaa",
            email: "wardamujahid225@gmail.com",
          },
          _id: "66d5a8acbf0acc644fa8b0f5",
          date: 1725278380956,
        },
      ],
      lessons: [
        {
          title: "Introduction to Node.js",
          desc: "Basics of Node.js and its features",
          duration: 3600000,
          img: "https://images.unsplash.com/photo-1614064643087-96ce7f0737c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          video: "66cc7228f42611600c93c137",
          _id: "66cc7229f42611600c93c2f2",
        },
        {
          title: "Node.js Modules and NPM",
          desc: "Using Node.js modules and NPM for package management",
          duration: 5400000,
          img: "https://plus.unsplash.com/premium_photo-1670213989449-0df2d16d712c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          video: "66cc7228f42611600c93c137",
          _id: "66cc7229f42611600c93c2f3",
        },
        {
          title: "Building RESTful APIs with Node.js",
          desc: "Creating RESTful APIs using Node.js",
          duration: 7200000,
          img: "https://images.unsplash.com/photo-1617240016072-d92174e44171?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          video: "66cc7228f42611600c93c137",
          _id: "66cc7229f42611600c93c2f4",
        },
        {
          title: "Advanced Node.js Concepts",
          desc: "Exploring advanced concepts in Node.js",
          duration: 10800000,
          img: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          video: "66cc7228f42611600c93c137",
          _id: "66cc7229f42611600c93c2f5",
        },
      ],
    },
    mentor: {
      name: "Mike Johnson",
      title: "Full-Stack Web Developer",
      img: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: "66cc7228f42611600c93c0c2",
    },
  });
  const [videoId, setVideoId] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bought, setBought] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [buy, setBuy] = useState(false);
  const [review, setReview] = useState(false);
  const [delRev, setDelRev] = useState(false);
  const [courseId, setCourseId] = useState(() => {
    const id = JSON.parse(localStorage.getItem("courseId"));
    return id;
  });

  const { setMentorId } = useContext(Context);
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const { response, status } = await WebHandler(
  //       `${URLS.GETCOURSEBYID}${courseId}`,
  //       "GET"
  //     );
  //     setCourse(response);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [review, delRev, buy]);

  // useEffect(() => {
  //   const checkBought = async () => {
  //     const { response, status } = await WebHandler(`${URLS.CHECKBOUGHT}${courseId}`, "GET");
  //     if (status === 200) {
  //       setBought(true)
  //     }
  //   }
  //   checkBought()
  // }, [])

  const getVideo = (id) => {
    setVideoId(id);
    setShowVideo(true);
  };

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 3600000);
    const minutes = Math.floor((duration % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  const mentorHandle = async (mentorId) => {
    setMentorId(mentorId);
    navigate("/mentor-details");
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
        {course && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src={course?.data?.details.img}
                alt={course?.data?.details.title}
                className="rounded-lg shadow-lg w-full object-cover h-64 md:h-full"
              />
            </div>
            <div className="md:w-1/2 ">
              <h1 className="text-3xl font-bold text-gray-800">
                {course?.data?.details.title}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {course?.data?.details.category}
              </p>
              <p className="mt-4 text-gray-700">{course?.data?.description}</p>
              <p className="mt-6 text-xl font-semibold text-blue-600">
                ${course?.data?.details.price}
              </p>
              <div className="flex items-center mt-4 ">
                <div className="flex items-center gap-1 ">
                  <FaStar className="text-yellow-500" />
                  <span className="font-medium">
                    {course?.data?.details.rating}
                  </span>
                </div>
                <span className="ml-2 text-gray-500">
                  ({course?.data?.details.numOfReviews} Reviews)
                </span>
              </div>
              {showBuy && (
                <PaymentCard
                  courseId={course.id}
                  setBuy={setBuy}
                  course={course?.data?.details}
                  setShowBuy={setShowBuy}
                />
              )}
              <div className="mt-6">
                {!bought && (
                  <button
                    onClick={() => setShowBuy(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Buy Course
                  </button>
                )}
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
              <p
                onClick={() => mentorHandle(course.mentor.id)}
                className="text-gray-700 font-bold cursor-pointer"
              >
                {course.mentor.name}
              </p>
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
          <div className="mt-12 cursor-pointer">
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
            {bought && <Rating setReview={setReview} courseId={courseId} />}
            <div className="mt-4 space-y-6">
              {course.data.reviews.map((review, index) => (
                <Review
                  review={review}
                  setDelRev={setDelRev}
                  courseId={courseId}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CoursePage;
