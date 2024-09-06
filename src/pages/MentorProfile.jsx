import React, { useState, useEffect, useContext } from "react";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import { Context } from "../Context/Context";

const MentorProfile = () => {
  const { mentorId } = useContext(Context)
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMentorData = async () => {
      try {
        const { response, status } = await WebHandler(`${URLS.GETMENTOR}${mentorId}`, 'GET');
        if (status === 200) {
          setMentor(response); // Set the mentor data
          console.log(response)
        }
      } catch (error) {
        console.error("Error fetching mentor data:", error);
      }
    };

    fetchMentorData();
  }, []);

  if (!mentor) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">

        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="rounded-full w-32 h-32 object-cover mb-4 border-4 border-white"
          />
          <h2 className="text-3xl font-extrabold">{mentor.name}</h2>
          <p className="text-lg mt-1 italic">{mentor.title}</p>
        </div>

        <div className="p-6 bg-gray-50">
          <h3 className="text-2xl font-semibold mb-2">About</h3>
          <p className="text-gray-800 leading-relaxed">{mentor.about}</p>
        </div>

        <div className="p-6 bg-gray-50">
          <h3 className="text-2xl font-semibold mb-4">Reviews ({mentor.numOFReviews})</h3>
          <div className="space-y-4">
            {mentor.reviews.map((review) => (
              <div
                key={review._id}
                className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <p className="text-sm text-yellow-500">Rating: {review.rating} / 5</p>
                <p className="mt-2 text-gray-700">{review.review}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          <h3 className="text-2xl font-semibold mb-4">Courses ({mentor.numOfCourses})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentor.courses.map((course) => (
              <div
                key={course._id}
                className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <img
                  src={course.data.details.img}
                  alt={course.data.details.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-semibold">{course.data.details.title}</h4>
                <p className="text-sm text-gray-600">{course.data.details.category}</p>
                <p className="text-sm text-gray-800 font-medium">${course.data.details.price}</p>
                <p className="text-sm text-gray-600">
                  Rating: {course.data.details.rating} ({course.data.details.numOfReviews} reviews)
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          <h3 className="text-2xl font-semibold mb-4">Connect with {mentor.name}</h3>
          <div className="flex flex-wrap gap-4">
            {mentor.socialMedia.map((social) => (
              <a
                key={social._id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span className="font-medium">{social.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
