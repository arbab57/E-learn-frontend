
import React, { useState } from 'react';
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
















const CourseDetails = async ({ course }) => {

  const [res, setRes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { response, status } = await WebHandler(URLS.COURSES, "GET");

        if (status === 200 && Array.isArray(response)) {
          // Check if response is an array and status is 200
          setRes(response);
          console.log(response)
        } else {
          setError(true);
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true); // Set error state if fetching fails
      }
    };

    fetchData();
  }, []);






  function convertTimestampToTime(timeInMS) {
    const timeInSeconds = timeInMS / 1000
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);

    return ` ${hours} hours and ${minutes} minutes`;
  }
  return (
    <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 font-roboto flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="lg:w-64 lg:h-64 w-full h-64 flex-shrink-0">
          {course.data.details.img ? (
            <img
              className="w-full h-full object-cover rounded-lg"
              src={course.data.details.img}
              alt="course"
            />
          ) : (
            <div className="bg-gray-200 shadow-inner w-full h-full rounded-lg flex items-center justify-center">
              <FaUser className="text-6xl text-blue-300" />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="text-gray-700">
            <h3 className="text-xl font-bold">{course.data.details.title}</h3>
            <h2 className="text-sm text-gray-500">{course.data.details.category}</h2>
          </div>

          <div className="text-sm text-gray-600 flex flex-col gap-2">
            <p><span className="font-semibold">Description:</span> {course.data.description}</p>
            <p><span className="font-semibold">Duration:</span> {convertTimestampToTime(course.data.duration)}</p>
            <p><span className="font-semibold">Mentor:</span> {course.data?.mentor?.name}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full lg:w-auto lg:ml-auto">
        <div className="text-gray-600 flex flex-col gap-1">
          <p className="text-nowrap"><span className="font-semibold ">No of Reviews:</span> {course.data.details.numOfReviews}</p>
          <p className="text-nowrap"><span className="font-semibold">Rating:</span> {course.data.details.rating}</p>
          <p className="text-nowrap"><span className="font-semibold">Price:</span> ${course.data.details.price}</p>
        </div>

        <div className="flex items-center justify-end gap-2 mt-4">

        </div>
      </div>
    </div>
  );
};


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const coursesPerPage = 4;

  const courses = {
    "page": 1,
    "limit": 10,
    "totalResults": 37,
    "totalPages": 4,
    "results": [
      {
        "id": "66c5e0d248ecb5b1e2dc97c7",
        "data": {
          "details": {
            "category": "Web Development",
            "title": "Introduction to HTML & CSS",
            // "description": "Master the basics of web development with HTML and CSS, learning how to create structured web pages and apply styling to elements. You'll gain a solid understanding of web design principles and the foundational skills needed to build visually appealing websites.",
            "price": 99.99,
            "rating": 4.3,
            "numOfReviews": 16,
            "img": "https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          "mentor": "66c5e0d148ecb5b1e2dc973a",
          "duration": 51763512,
          "description": "Master the basics of web development with HTML and CSS, learning how to create structured web pages and apply styling to elements. You'll gain a solid understanding of web design principles and the foundational skills needed to build visually appealing websites.",
          "reviews": [
            {
              "rating": 5,
              "review": "Incredible course with practical insights and clear instruction. I learned a lot and feel confident in the subject.",
              "_id": "66c5e0d248ecb5b1e2dc97c8",
              "date": 1724244178187
            },
            {
              "rating": 4,
              "review": "Good course with relevant information. The pace was steady, though some sections could be more engaging.",
              "_id": "66c5e0d248ecb5b1e2dc97c9",
              "date": 1724244178187
            },
            {
              "rating": 5,
              "review": "Highly recommended! The course was well-organized, and the instructor's teaching style was very effective.",
              "_id": "66c5e0d248ecb5b1e2dc97ca",
              "date": 1724244178187
            },
            {
              "rating": 5,
              "review": "An outstanding course with clear explanations and practical applications. I feel much more confident in the subject.",
              "_id": "66c5e0d248ecb5b1e2dc97cb",
              "date": 1724244178188
            },
            {
              "rating": 4,
              "review": "Good course with clear explanations. Additional interactive elements would improve the overall experience.",
              "_id": "66c5e0d248ecb5b1e2dc97cc",
              "date": 1724244178188
            },
            {
              "rating": 5,
              "review": "Excellent course! The material was well-organized and the instructor provided valuable feedback.",
              "_id": "66c5e0d248ecb5b1e2dc97cd",
              "date": 1724244178188
            },
            {
              "rating": 4,
              "review": "Good course overall. The instructor was clear and concise, though some areas felt a bit rushed.",
              "_id": "66c5e0d248ecb5b1e2dc97ce",
              "date": 1724244178188
            },
            {
              "rating": 5,
              "review": "Excellent course! The content was clear, and the projects were highly beneficial for applying what was learned.",
              "_id": "66c5e0d248ecb5b1e2dc97cf",
              "date": 1724244178188
            },
            {
              "rating": 4,
              "review": "Good course with relevant information. The pace was steady, though some sections could be more engaging.",
              "_id": "66c5e0d248ecb5b1e2dc97d0",
              "date": 1724244178188
            },
            {
              "rating": 4,
              "review": "A good course overall. The material was useful, but a few more interactive elements would enhance the experience.",
              "_id": "66c5e0d248ecb5b1e2dc97d1",
              "date": 1724244178188
            },
            {
              "rating": 5,
              "review": "Excellent course! The content was clear, and the projects were highly beneficial for applying what was learned.",
              "_id": "66c5e0d248ecb5b1e2dc97d2",
              "date": 1724244178188
            },
            {
              "rating": 5,
              "review": "Excellent course! The material was well-organized and the instructor provided valuable feedback.",
              "_id": "66c5e0d248ecb5b1e2dc97d3",
              "date": 1724244178188
            },
            {
              "rating": 4,
              "review": "Very good course. The material was relevant, but a few sections could have been more engaging.",
              "_id": "66c5e0d248ecb5b1e2dc97d4",
              "date": 1724244178188
            },
            {
              "rating": 3,
              "review": "The course was decent but could benefit from more interactive content and practical examples.",
              "_id": "66c5e0d248ecb5b1e2dc97d5",
              "date": 1724244178188
            },
            {
              "rating": 4,
              "review": "Very informative course. The material was relevant, though some sections felt a bit rushed.",
              "_id": "66c5e0d248ecb5b1e2dc97d6",
              "date": 1724244178188
            },
            {
              "rating": 3,
              "review": "The course was decent but could benefit from more interactive content and practical examples.",
              "_id": "66c5e0d248ecb5b1e2dc97d7",
              "date": 1724244178188
            }
          ],
          "lessons": [
            {
              "title": "Introduction to HTML",
              "desc": "Basics of HTML and its structure",
              "duration": 3600000,
              "img": "https://example.com/html-intro.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97d8"
            },
            {
              "title": "HTML Elements and Attributes",
              "desc": "Understanding different HTML elements and their attributes",
              "duration": 5400000,
              "img": "https://example.com/html-elements.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97d9"
            },
            {
              "title": "CSS Basics",
              "desc": "Introduction to CSS for styling web pages",
              "duration": 7200000,
              "img": "https://example.com/css-basics.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97da"
            },
            {
              "title": "CSS Layout Techniques",
              "desc": "Advanced CSS layout techniques and responsive design",
              "duration": 10800000,
              "img": "https://example.com/css-layout.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97db"
            }
          ]
        }
      },
      {
        "id": "66c5e0d248ecb5b1e2dc97dc",
        "data": {
          "details": {
            "category": "Web Development",
            "title": "JavaScript Essentials",
            "price": 119.99,
            "rating": 4.3,
            "numOfReviews": 19,
            "img": "https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          "mentor": "66c5e0d148ecb5b1e2dc973a",
          "duration": 56887650,
          "description": "Dive into JavaScript to grasp essential programming concepts such as variables, functions, loops, and events. This course is tailored to help you build a strong foundation in JavaScript, equipping you with the skills to create interactive and dynamic web applications.",
          "reviews": [
            {
              "rating": 5,
              "review": "Incredible course with detailed content and practical applications. The instructor did an excellent job.",
              "_id": "66c5e0d248ecb5b1e2dc97dd",
              "date": 1724244178190
            },
            {
              "rating": 4,
              "review": "Very good course with useful material. A few more examples and hands-on activities would improve it further.",
              "_id": "66c5e0d248ecb5b1e2dc97de",
              "date": 1724244178190
            },
            {
              "rating": 4,
              "review": "A comprehensive course with useful content. The instructor was knowledgeable, though some topics were a bit brief.",
              "_id": "66c5e0d248ecb5b1e2dc97df",
              "date": 1724244178190
            },
            {
              "rating": 4,
              "review": "Good course with practical examples. The pacing was generally good, though some sections felt a bit slow.",
              "_id": "66c5e0d248ecb5b1e2dc97e0",
              "date": 1724244178190
            },
            {
              "rating": 5,
              "review": "Fantastic course! The hands-on projects and quizzes really helped reinforce the concepts learned.",
              "_id": "66c5e0d248ecb5b1e2dc97e1",
              "date": 1724244178191
            },
            {
              "rating": 4,
              "review": "Great course overall. The material was useful, but a few more interactive elements would enhance the experience.",
              "_id": "66c5e0d248ecb5b1e2dc97e2",
              "date": 1724244178191
            },
            {
              "rating": 4,
              "review": "Very good course. The material was relevant, but a few sections could have been more engaging.",
              "_id": "66c5e0d248ecb5b1e2dc97e3",
              "date": 1724244178191
            },
            {
              "rating": 4,
              "review": "Good course overall. The instructor was clear and concise, though some areas felt a bit rushed.",
              "_id": "66c5e0d248ecb5b1e2dc97e4",
              "date": 1724244178191
            },
            {
              "rating": 5,
              "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
              "_id": "66c5e0d248ecb5b1e2dc97e5",
              "date": 1724244178191
            },
            {
              "rating": 3,
              "review": "The course provided basic information but lacked depth in certain areas. More detailed content would be beneficial.",
              "_id": "66c5e0d248ecb5b1e2dc97e6",
              "date": 1724244178191
            },
            {
              "rating": 4,
              "review": "Great course overall. Some topics were covered in more detail than others, but it was very informative.",
              "_id": "66c5e0d248ecb5b1e2dc97e7",
              "date": 1724244178191
            },
            {
              "rating": 5,
              "review": "An exceptional learning experience! The course was well-organized and provided in-depth knowledge on the topic.",
              "_id": "66c5e0d248ecb5b1e2dc97e8",
              "date": 1724244178191
            },
            {
              "rating": 5,
              "review": "Excellent course! The content was clear, and the projects were highly beneficial for applying what was learned.",
              "_id": "66c5e0d248ecb5b1e2dc97e9",
              "date": 1724244178191
            },
            {
              "rating": 4,
              "review": "A solid course that provides a good foundation. The real-world examples were especially helpful.",
              "_id": "66c5e0d248ecb5b1e2dc97ea",
              "date": 1724244178191
            },
            {
              "rating": 4,
              "review": "Great course with practical insights. The material was well-presented, though some topics could be more detailed.",
              "_id": "66c5e0d248ecb5b1e2dc97eb",
              "date": 1724244178191
            },
            {
              "rating": 4,
              "review": "A comprehensive course with useful content. The instructor was knowledgeable, though some topics were a bit brief.",
              "_id": "66c5e0d248ecb5b1e2dc97ec",
              "date": 1724244178191
            },
            {
              "rating": 5,
              "review": "Fantastic learning experience! The course was well-structured, and the practical exercises were very helpful.",
              "_id": "66c5e0d248ecb5b1e2dc97ed",
              "date": 1724244178191
            },
            {
              "rating": 4,
              "review": "A comprehensive course with useful content. The instructor was knowledgeable, though some topics were a bit brief.",
              "_id": "66c5e0d248ecb5b1e2dc97ee",
              "date": 1724244178191
            },
            {
              "rating": 4,
              "review": "Very informative with practical examples. A few more advanced topics would be a great addition.",
              "_id": "66c5e0d248ecb5b1e2dc97ef",
              "date": 1724244178191
            }
          ],
          "lessons": [
            {
              "title": "JavaScript Basics",
              "desc": "Introduction to JavaScript and its syntax",
              "duration": 3600000,
              "img": "https://example.com/js-basics.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97f0"
            },
            {
              "title": "JavaScript Functions",
              "desc": "Creating and using functions in JavaScript",
              "duration": 5400000,
              "img": "https://example.com/js-functions.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97f1"
            },
            {
              "title": "DOM Manipulation",
              "desc": "Interacting with the Document Object Model (DOM)",
              "duration": 7200000,
              "img": "https://example.com/dom-manipulation.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97f2"
            },
            {
              "title": "JavaScript ES6 Features",
              "desc": "Understanding new features introduced in ES6",
              "duration": 10800000,
              "img": "https://example.com/es6-features.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97f3"
            }
          ]
        }
      },
      {
        "id": "66c5e0d248ecb5b1e2dc97f4",
        "data": {
          "details": {
            "category": "Web Development",
            "title": "Responsive Web Design",
            "price": 149.99,
            "rating": 4.3,
            "numOfReviews": 4,
            "img": "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          "mentor": "66c5e0d148ecb5b1e2dc973a",
          "duration": 51051735,
          "description": "Explore techniques for making websites responsive and adaptable to various screen sizes and devices. Learn how to use flexible grids, media queries, and other responsive design principles to ensure a consistent and optimal user experience across different platforms.",
          "reviews": [
            {
              "rating": 5,
              "review": "Highly recommend this course! The instructor was engaging, and the content was relevant and practical.",
              "_id": "66c5e0d248ecb5b1e2dc97f5",
              "date": 1724244178192
            },
            {
              "rating": 5,
              "review": "Highly recommend this course! The clear explanations and practical exercises made learning enjoyable.",
              "_id": "66c5e0d248ecb5b1e2dc97f6",
              "date": 1724244178192
            },
            {
              "rating": 3,
              "review": "The course provided useful information but lacked depth in certain areas. More detailed content would be helpful.",
              "_id": "66c5e0d248ecb5b1e2dc97f7",
              "date": 1724244178192
            },
            {
              "rating": 4,
              "review": "Good course with practical examples. The pacing was generally good, though some sections felt a bit slow.",
              "_id": "66c5e0d248ecb5b1e2dc97f8",
              "date": 1724244178192
            }
          ],
          "lessons": [
            {
              "title": "Responsive Design Principles",
              "desc": "Fundamentals of creating responsive web designs",
              "duration": 3600000,
              "img": "https://example.com/responsive-principles.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97f9"
            },
            {
              "title": "Fluid Layouts",
              "desc": "Designing fluid and adaptive layouts",
              "duration": 5400000,
              "img": "https://example.com/fluid-layouts.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97fa"
            },
            {
              "title": "Media Queries",
              "desc": "Using media queries for responsive design",
              "duration": 7200000,
              "img": "https://example.com/media-queries.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97fb"
            },
            {
              "title": "Responsive Typography",
              "desc": "Adjusting typography for different screen sizes",
              "duration": 10800000,
              "img": "https://example.com/responsive-typography.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc97fc"
            }
          ]
        }
      },
      {
        "id": "66c5e0d248ecb5b1e2dc97fd",
        "data": {
          "details": {
            "category": "Web Development",
            "title": "Modern JavaScript Frameworks",
            "price": 179.99,
            "rating": 4.2,
            "numOfReviews": 15,
            "img": "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          "mentor": "66c5e0d148ecb5b1e2dc973a",
          "duration": 62657941,
          "description": "Get acquainted with modern JavaScript frameworks like React, Vue, and Angular. This course covers how these frameworks can streamline the development of dynamic and interactive web applications, including state management, component-based architecture, and routing.",
          "reviews": [
            {
              "rating": 5,
              "review": "Excellent course! The content was well-structured and the instructor's expertise was evident.",
              "_id": "66c5e0d248ecb5b1e2dc97fe",
              "date": 1724244178194
            },
            {
              "rating": 4,
              "review": "Very informative with practical examples. A few more advanced topics would be a great addition.",
              "_id": "66c5e0d248ecb5b1e2dc97ff",
              "date": 1724244178194
            },
            {
              "rating": 5,
              "review": "Outstanding course! The practical projects were very helpful in applying the concepts learned.",
              "_id": "66c5e0d248ecb5b1e2dc9800",
              "date": 1724244178194
            },
            {
              "rating": 4,
              "review": "Good course with useful material. A few more examples and hands-on activities would make it even better.",
              "_id": "66c5e0d248ecb5b1e2dc9801",
              "date": 1724244178194
            },
            {
              "rating": 4,
              "review": "Very informative with practical examples. A few more advanced topics would be a great addition.",
              "_id": "66c5e0d248ecb5b1e2dc9802",
              "date": 1724244178194
            },
            {
              "rating": 3,
              "review": "The course was helpful but needed more engaging content and practical examples to reinforce learning.",
              "_id": "66c5e0d248ecb5b1e2dc9803",
              "date": 1724244178194
            },
            {
              "rating": 4,
              "review": "A comprehensive course with useful content. The instructor was knowledgeable, though some topics were a bit brief.",
              "_id": "66c5e0d248ecb5b1e2dc9804",
              "date": 1724244178194
            },
            {
              "rating": 4,
              "review": "Well-structured and informative. Some areas could use more depth, but overall a great learning experience.",
              "_id": "66c5e0d248ecb5b1e2dc9805",
              "date": 1724244178194
            },
            {
              "rating": 4,
              "review": "A solid course with good content. The pace was good, but a few more interactive elements would enhance learning.",
              "_id": "66c5e0d248ecb5b1e2dc9806",
              "date": 1724244178194
            },
            {
              "rating": 5,
              "review": "One of the best courses I've taken. The content was relevant and the teaching style was engaging.",
              "_id": "66c5e0d248ecb5b1e2dc9807",
              "date": 1724244178194
            },
            {
              "rating": 3,
              "review": "The course was adequate but lacked interactive components. More hands-on activities would be beneficial.",
              "_id": "66c5e0d248ecb5b1e2dc9808",
              "date": 1724244178194
            },
            {
              "rating": 5,
              "review": "Outstanding course! The practical projects were very helpful in applying the concepts learned.",
              "_id": "66c5e0d248ecb5b1e2dc9809",
              "date": 1724244178194
            },
            {
              "rating": 5,
              "review": "One of the best courses I've taken. The content was relevant and the teaching style was engaging.",
              "_id": "66c5e0d248ecb5b1e2dc980a",
              "date": 1724244178194
            },
            {
              "rating": 4,
              "review": "Good course with useful material. A few more examples and hands-on activities would make it even better.",
              "_id": "66c5e0d248ecb5b1e2dc980b",
              "date": 1724244178194
            },
            {
              "rating": 4,
              "review": "A solid course that provides a good foundation. The real-world examples were especially helpful.",
              "_id": "66c5e0d248ecb5b1e2dc980c",
              "date": 1724244178194
            }
          ],
          "lessons": [
            {
              "title": "Introduction to Frameworks",
              "desc": "Overview of modern JavaScript frameworks",
              "duration": 3600000,
              "img": "https://example.com/frameworks-intro.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc980d"
            },
            {
              "title": "React Basics",
              "desc": "Getting started with React framework",
              "duration": 5400000,
              "img": "https://example.com/react-basics.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc980e"
            },
            {
              "title": "Vue.js Fundamentals",
              "desc": "Introduction to Vue.js and its features",
              "duration": 7200000,
              "img": "https://example.com/vue-fundamentals.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc980f"
            },
            {
              "title": "Angular Essentials",
              "desc": "Understanding the core concepts of Angular",
              "duration": 10800000,
              "img": "https://example.com/angular-essentials.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9810"
            }
          ]
        }
      },
      {
        "id": "66c5e0d248ecb5b1e2dc9811",
        "data": {
          "details": {
            "category": "Web Development",
            "title": "Building Web Applications",
            "price": 199.99,
            "rating": 4.2,
            "numOfReviews": 9,
            "img": "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          "mentor": "66c5e0d148ecb5b1e2dc973a",
          "duration": 47722972,
          "description": "Learn how to create comprehensive web applications from start to finish. This course addresses both front-end and back-end development, including setting up servers, managing databases, and deploying applications, providing a full-stack perspective on web development.",
          "reviews": [
            {
              "rating": 4,
              "review": "Very informative with practical examples. A few more advanced topics would be a great addition.",
              "_id": "66c5e0d248ecb5b1e2dc9812",
              "date": 1724244178195
            },
            {
              "rating": 4,
              "review": "Great course overall. Some topics were covered in more detail than others, but it was very informative.",
              "_id": "66c5e0d248ecb5b1e2dc9813",
              "date": 1724244178195
            },
            {
              "rating": 4,
              "review": "Good course overall. The instructor was clear and concise, though some areas felt a bit rushed.",
              "_id": "66c5e0d248ecb5b1e2dc9814",
              "date": 1724244178195
            },
            {
              "rating": 5,
              "review": "An exceptional learning experience! The course was well-organized and provided in-depth knowledge on the topic.",
              "_id": "66c5e0d248ecb5b1e2dc9815",
              "date": 1724244178196
            },
            {
              "rating": 4,
              "review": "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
              "_id": "66c5e0d248ecb5b1e2dc9816",
              "date": 1724244178196
            },
            {
              "rating": 5,
              "review": "Fantastic course! The hands-on projects and quizzes really helped reinforce the concepts learned.",
              "_id": "66c5e0d248ecb5b1e2dc9817",
              "date": 1724244178196
            },
            {
              "rating": 5,
              "review": "Outstanding course! The practical projects were very helpful in applying the concepts learned.",
              "_id": "66c5e0d248ecb5b1e2dc9818",
              "date": 1724244178196
            },
            {
              "rating": 3,
              "review": "Useful content, but the course could benefit from a faster pace and more engaging delivery.",
              "_id": "66c5e0d248ecb5b1e2dc9819",
              "date": 1724244178196
            },
            {
              "rating": 4,
              "review": "A good course overall. The material was useful, but a few more interactive elements would enhance the experience.",
              "_id": "66c5e0d248ecb5b1e2dc981a",
              "date": 1724244178196
            }
          ],
          "lessons": [
            {
              "title": "Introduction to Web Applications",
              "desc": "Basics of building web applications",
              "duration": 3600000,
              "img": "https://example.com/web-apps-intro.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc981b"
            },
            {
              "title": "Frontend vs Backend",
              "desc": "Understanding the difference between frontend and backend development",
              "duration": 5400000,
              "img": "https://example.com/frontend-backend.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc981c"
            },
            {
              "title": "Building RESTful APIs",
              "desc": "Creating RESTful APIs for web applications",
              "duration": 7200000,
              "img": "https://example.com/restful-apis.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc981d"
            },
            {
              "title": "Deploying Web Applications",
              "desc": "Deploying web applications to production environments",
              "duration": 10800000,
              "img": "https://example.com/deploying-web-apps.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc981e"
            }
          ]
        }
      },
      {
        "id": "66c5e0d248ecb5b1e2dc981f",
        "data": {
          "details": {
            "category": "Web Development",
            "title": "Web Security Fundamentals",
            "price": 159.99,
            "rating": 4,
            "numOfReviews": 5,
            "img": "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          "mentor": "66c5e0d148ecb5b1e2dc973a",
          "duration": 39836082,
          "description": "Gain an understanding of the fundamental principles of web security. This course teaches how to protect web applications from common vulnerabilities such as cross-site scripting (XSS) and SQL injection, ensuring that your applications are secure and resilient against attacks.",
          "reviews": [
            {
              "rating": 5,
              "review": "Fantastic course! The instructor was engaging, and the content was highly relevant and useful.",
              "_id": "66c5e0d248ecb5b1e2dc9820",
              "date": 1724244178197
            },
            {
              "rating": 4,
              "review": "Well-structured and informative. Some areas could use more depth, but overall a great learning experience.",
              "_id": "66c5e0d248ecb5b1e2dc9821",
              "date": 1724244178197
            },
            {
              "rating": 3,
              "review": "The course was decent but could benefit from more interactive content and practical examples.",
              "_id": "66c5e0d248ecb5b1e2dc9822",
              "date": 1724244178197
            },
            {
              "rating": 3,
              "review": "The course provided useful information but lacked depth in certain areas. More detailed content would be helpful.",
              "_id": "66c5e0d248ecb5b1e2dc9823",
              "date": 1724244178197
            },
            {
              "rating": 5,
              "review": "Highly recommended! The course was well-organized, and the instructor's teaching style was very effective.",
              "_id": "66c5e0d248ecb5b1e2dc9824",
              "date": 1724244178197
            }
          ],
          "lessons": [
            {
              "title": "Web Security Basics",
              "desc": "Introduction to web security concepts",
              "duration": 3600000,
              "img": "https://example.com/web-security-basics.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9825"
            },
            {
              "title": "Common Security Vulnerabilities",
              "desc": "Understanding common web security vulnerabilities",
              "duration": 5400000,
              "img": "https://example.com/security-vulnerabilities.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9826"
            },
            {
              "title": "Secure Coding Practices",
              "desc": "Best practices for writing secure code",
              "duration": 7200000,
              "img": "https://example.com/secure-coding.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9827"
            },
            {
              "title": "Web Application Firewalls",
              "desc": "Configuring and using web application firewalls",
              "duration": 10800000,
              "img": "https://example.com/web-firewalls.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9828"
            }
          ]
        }
      },
      {
        "id": "66c5e0d248ecb5b1e2dc9829",
        "data": {
          "details": {
            "category": "UI/UX Design",
            "title": "Introduction to UX Design",
            "price": 129.99,
            "rating": 4.3,
            "numOfReviews": 12,
            "img": "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          "mentor": "66c5e0d148ecb5b1e2dc9758",
          "duration": 36809767,
          "description": "Explore the principles of user experience (UX) design, focusing on how to create user-friendly interfaces. The course covers user research, usability testing, and designing intuitive user experiences to enhance overall satisfaction and effectiveness.",
          "reviews": [
            {
              "rating": 4,
              "review": "Very good course. The material was relevant, but a few sections could have been more engaging.",
              "_id": "66c5e0d248ecb5b1e2dc982a",
              "date": 1724244178198
            },
            {
              "rating": 4,
              "review": "A solid course that provides a good foundation. The real-world examples were especially helpful.",
              "_id": "66c5e0d248ecb5b1e2dc982b",
              "date": 1724244178198
            },
            {
              "rating": 4,
              "review": "Good course overall. The instructor was clear and concise, though some areas felt a bit rushed.",
              "_id": "66c5e0d248ecb5b1e2dc982c",
              "date": 1724244178198
            },
            {
              "rating": 4,
              "review": "Very good course. The material was relevant, but a few sections could have been more engaging.",
              "_id": "66c5e0d248ecb5b1e2dc982d",
              "date": 1724244178198
            },
            {
              "rating": 4,
              "review": "A comprehensive course with useful content. The instructor was knowledgeable, though some topics were a bit brief.",
              "_id": "66c5e0d248ecb5b1e2dc982e",
              "date": 1724244178198
            },
            {
              "rating": 5,
              "review": "An outstanding course with clear explanations and practical applications. I feel much more confident in the subject.",
              "_id": "66c5e0d248ecb5b1e2dc982f",
              "date": 1724244178198
            },
            {
              "rating": 5,
              "review": "Excellent course! The content was clear, and the projects were highly beneficial for applying what was learned.",
              "_id": "66c5e0d248ecb5b1e2dc9830",
              "date": 1724244178198
            },
            {
              "rating": 5,
              "review": "Fantastic course! The hands-on projects and quizzes really helped reinforce the concepts learned.",
              "_id": "66c5e0d248ecb5b1e2dc9831",
              "date": 1724244178199
            },
            {
              "rating": 4,
              "review": "Very informative with practical examples. A few more advanced topics would be a great addition.",
              "_id": "66c5e0d248ecb5b1e2dc9832",
              "date": 1724244178199
            },
            {
              "rating": 3,
              "review": "The course was decent but could benefit from more interactive content and practical examples.",
              "_id": "66c5e0d248ecb5b1e2dc9833",
              "date": 1724244178199
            },
            {
              "rating": 5,
              "review": "An outstanding course with clear explanations and practical applications. I feel much more confident in the subject.",
              "_id": "66c5e0d248ecb5b1e2dc9834",
              "date": 1724244178199
            },
            {
              "rating": 4,
              "review": "Very informative with practical examples. A few more advanced topics would be a great addition.",
              "_id": "66c5e0d248ecb5b1e2dc9835",
              "date": 1724244178199
            }
          ],
          "lessons": [
            {
              "title": "UX Design Overview",
              "desc": "Introduction to UX design principles",
              "duration": 3600000,
              "img": "https://example.com/ux-design-overview.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9836"
            },
            {
              "title": "User Research Methods",
              "desc": "Techniques for conducting user research",
              "duration": 5400000,
              "img": "https://example.com/user-research.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9837"
            },
            {
              "title": "Usability Testing",
              "desc": "Methods for testing usability in UX design",
              "duration": 7200000,
              "img": "https://example.com/usability-testing.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9838"
            },
            {
              "title": "Design Thinking Approach",
              "desc": "Applying design thinking in UX design",
              "duration": 10800000,
              "img": "https://example.com/design-thinking.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9839"
            }
          ]
        }
      },
      {
        "id": "66c5e0d248ecb5b1e2dc983a",
        "data": {
          "details": {
            "category": "UI/UX Design",
            "title": "UI Design Basics",
            "price": 139.99,
            "rating": 4.2,
            "numOfReviews": 13,
            "img": "https://plus.unsplash.com/premium_photo-1661692759400-15aa4e2de6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          "mentor": "66c5e0d148ecb5b1e2dc9758",
          "duration": 37913883,
          "description": "Delve into the basics of user interface (UI) design, including color theory, typography, layout design, and visual hierarchy. This course provides the foundational knowledge needed to design aesthetically pleasing and functional user interfaces for various applications.",
          "reviews": [
            {
              "rating": 3,
              "review": "The course provided basic information but lacked depth in certain areas. More detailed content would be beneficial.",
              "_id": "66c5e0d248ecb5b1e2dc983b",
              "date": 1724244178200
            },
            {
              "rating": 4,
              "review": "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
              "_id": "66c5e0d248ecb5b1e2dc983c",
              "date": 1724244178200
            },
            {
              "rating": 5,
              "review": "Fantastic course! The instructor was engaging, and the content was highly relevant and useful.",
              "_id": "66c5e0d248ecb5b1e2dc983d",
              "date": 1724244178200
            },
            {
              "rating": 5,
              "review": "Highly recommend this course! The instructor was engaging, and the content was relevant and practical.",
              "_id": "66c5e0d248ecb5b1e2dc983e",
              "date": 1724244178200
            },
            {
              "rating": 4,
              "review": "Good course overall. The instructor was clear and concise, though some areas felt a bit rushed.",
              "_id": "66c5e0d248ecb5b1e2dc983f",
              "date": 1724244178200
            },
            {
              "rating": 4,
              "review": "Good course overall. The instructor was clear and concise, though some areas felt a bit rushed.",
              "_id": "66c5e0d248ecb5b1e2dc9840",
              "date": 1724244178200
            },
            {
              "rating": 3,
              "review": "The course was decent but could benefit from more interactive content and practical examples.",
              "_id": "66c5e0d248ecb5b1e2dc9841",
              "date": 1724244178200
            },
            {
              "rating": 5,
              "review": "Excellent course! The content was clear, and the projects were highly beneficial for applying what was learned.",
              "_id": "66c5e0d248ecb5b1e2dc9842",
              "date": 1724244178200
            },
            {
              "rating": 5,
              "review": "An exceptional learning experience! The course was well-organized and provided in-depth knowledge on the topic.",
              "_id": "66c5e0d248ecb5b1e2dc9843",
              "date": 1724244178200
            },
            {
              "rating": 4,
              "review": "Good course with clear explanations. Additional interactive elements would improve the overall experience.",
              "_id": "66c5e0d248ecb5b1e2dc9844",
              "date": 1724244178200
            },
            {
              "rating": 3,
              "review": "The course covered basic concepts but lacked depth in some areas. More detailed content would be useful.",
              "_id": "66c5e0d248ecb5b1e2dc9845",
              "date": 1724244178200
            },
            {
              "rating": 5,
              "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
              "_id": "66c5e0d248ecb5b1e2dc9846",
              "date": 1724244178200
            },
            {
              "rating": 5,
              "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
              "_id": "66c5e0d248ecb5b1e2dc9847",
              "date": 1724244178200
            }
          ],
          "lessons": [
            {
              "title": "Introduction to UI Design",
              "desc": "Basics of UI design principles",
              "duration": 3600000,
              "img": "https://example.com/ui-design-intro.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9848"
            },
            {
              "title": "Design Patterns in UI",
              "desc": "Common design patterns used in UI design",
              "duration": 5400000,
              "img": "https://example.com/ui-design-patterns.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc9849"
            },
            {
              "title": "UI Design Tools",
              "desc": "Tools and software for UI design",
              "duration": 7200000,
              "img": "https://example.com/ui-design-tools.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc984a"
            },
            {
              "title": "Creating Interactive UI",
              "desc": "Designing interactive elements for user interfaces",
              "duration": 10800000,
              "img": "https://example.com/interactive-ui.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc984b"
            }
          ]
        }
      },
      {
        "id": "66c5e0d248ecb5b1e2dc984c",
        "data": {
          "details": {
            "category": "UI/UX Design",
            "title": "Wireframing and Prototyping",
            "price": 149.99,
            "rating": 4.2,
            "numOfReviews": 15,
            "img": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          "mentor": "66c5e0d148ecb5b1e2dc9758",
          "duration": 37473196,
          "description": "Learn the techniques of wireframing and prototyping to visualize and test design concepts before development. The course covers creating wireframes, building interactive prototypes, and iterating on design ideas to ensure they meet user needs and expectations.",
          "reviews": [
            {
              "rating": 4,
              "review": "A solid course with practical insights. The pacing was good, though some sections could use more detail.",
              "_id": "66c5e0d248ecb5b1e2dc984d",
              "date": 1724244178201
            },
            {
              "rating": 5,
              "review": "Fantastic learning experience! The course was well-structured, and the practical exercises were very helpful.",
              "_id": "66c5e0d248ecb5b1e2dc984e",
              "date": 1724244178201
            },
            {
              "rating": 5,
              "review": "Excellent course! The content was clear, and the projects were highly beneficial for applying what was learned.",
              "_id": "66c5e0d248ecb5b1e2dc984f",
              "date": 1724244178201
            },
            {
              "rating": 3,
              "review": "Useful content, but the course could benefit from a faster pace and more engaging delivery.",
              "_id": "66c5e0d248ecb5b1e2dc9850",
              "date": 1724244178201
            },
            {
              "rating": 4,
              "review": "A solid course with good content. The pace was good, but a few more interactive elements would enhance learning.",
              "_id": "66c5e0d248ecb5b1e2dc9851",
              "date": 1724244178201
            },
            {
              "rating": 4,
              "review": "Very informative with practical examples. A few more advanced topics would be a great addition.",
              "_id": "66c5e0d248ecb5b1e2dc9852",
              "date": 1724244178201
            },
            {
              "rating": 5,
              "review": "An outstanding course with clear explanations and practical applications. I feel much more confident in the subject.",
              "_id": "66c5e0d248ecb5b1e2dc9853",
              "date": 1724244178202
            },
            {
              "rating": 4,
              "review": "A solid course with practical insights. The pacing was good, though some sections could use more detail.",
              "_id": "66c5e0d248ecb5b1e2dc9854",
              "date": 1724244178202
            },
            {
              "rating": 4,
              "review": "A solid course that provides a good foundation. The real-world examples were especially helpful.",
              "_id": "66c5e0d248ecb5b1e2dc9855",
              "date": 1724244178202
            },
            {
              "rating": 5,
              "review": "Highly recommend this course! The instructor was engaging, and the content was relevant and practical.",
              "_id": "66c5e0d248ecb5b1e2dc9856",
              "date": 1724244178202
            },
            {
              "rating": 5,
              "review": "Incredible course with detailed content and practical applications. The instructor did an excellent job.",
              "_id": "66c5e0d248ecb5b1e2dc9857",
              "date": 1724244178202
            },
            {
              "rating": 3,
              "review": "The course was adequate but lacked interactive components. More hands-on activities would be beneficial.",
              "_id": "66c5e0d248ecb5b1e2dc9858",
              "date": 1724244178202
            },
            {
              "rating": 4,
              "review": "Good course with practical examples. The pacing was generally good, though some sections felt a bit slow.",
              "_id": "66c5e0d248ecb5b1e2dc9859",
              "date": 1724244178202
            },
            {
              "rating": 3,
              "review": "The course was useful but needed more detailed explanations and examples for better understanding.",
              "_id": "66c5e0d248ecb5b1e2dc985a",
              "date": 1724244178202
            },
            {
              "rating": 5,
              "review": "One of the best courses I've taken. The content was relevant and the teaching style was engaging.",
              "_id": "66c5e0d248ecb5b1e2dc985b",
              "date": 1724244178202
            }
          ],
          "lessons": [
            {
              "title": "Wireframing Basics",
              "desc": "Introduction to wireframing techniques",
              "duration": 3600000,
              "img": "https://example.com/wireframing-basics.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc985c"
            },
            {
              "title": "Creating Prototypes",
              "desc": "Building prototypes for user testing",
              "duration": 5400000,
              "img": "https://example.com/creating-prototypes.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc985d"
            },
            {
              "title": "Wireframing Tools",
              "desc": "Tools used for creating wireframes",
              "duration": 7200000,
              "img": "https://example.com/wireframing-tools.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc985e"
            },
            {
              "title": "Prototyping Best Practices",
              "desc": "Best practices for creating effective prototypes",
              "duration": 10800000,
              "img": "https://example.com/prototyping-best-practices.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc985f"
            }
          ]
        }
      },
      {
        "id": "66c5e0d248ecb5b1e2dc9860",
        "data": {
          "details": {
            "category": "UI/UX Design",
            "title": "User Journey Mapping",
            "price": 159.99,
            "rating": 3.9,
            "numOfReviews": 9,
            "img": "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          "mentor": "66c5e0d148ecb5b1e2dc9758",
          "duration": 68130237,
          "description": "Understand how to map out user journeys to identify pain points and opportunities for improvement. This course teaches you to create user personas and journey maps, helping you enhance the overall user experience by addressing specific user needs and behaviors.",
          "reviews": [
            {
              "rating": 4,
              "review": "Very informative with practical examples. A few more advanced topics would be a great addition.",
              "_id": "66c5e0d248ecb5b1e2dc9861",
              "date": 1724244178203
            },
            {
              "rating": 4,
              "review": "A solid course with practical insights. The pacing was good, though some sections could use more detail.",
              "_id": "66c5e0d248ecb5b1e2dc9862",
              "date": 1724244178203
            },
            {
              "rating": 3,
              "review": "The course was decent but could benefit from more interactive content and practical examples.",
              "_id": "66c5e0d248ecb5b1e2dc9863",
              "date": 1724244178203
            },
            {
              "rating": 4,
              "review": "Good course with practical examples. The pacing was generally good, though some sections felt a bit slow.",
              "_id": "66c5e0d248ecb5b1e2dc9864",
              "date": 1724244178203
            },
            {
              "rating": 4,
              "review": "A good course overall. The material was useful, but a few more interactive elements would enhance the experience.",
              "_id": "66c5e0d248ecb5b1e2dc9865",
              "date": 1724244178203
            },
            {
              "rating": 3,
              "review": "The course was decent but could benefit from more interactive content and practical examples.",
              "_id": "66c5e0d248ecb5b1e2dc9866",
              "date": 1724244178203
            },
            {
              "rating": 5,
              "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
              "_id": "66c5e0d248ecb5b1e2dc9867",
              "date": 1724244178204
            },
            {
              "rating": 4,
              "review": "A solid course that provides a good foundation. The real-world examples were especially helpful.",
              "_id": "66c5e0d248ecb5b1e2dc9868",
              "date": 1724244178204
            },
            {
              "rating": 4,
              "review": "Great course with practical insights. The material was well-presented, though some topics could be more detailed.",
              "_id": "66c5e0d248ecb5b1e2dc9869",
              "date": 1724244178204
            }
          ],
          "lessons": [
            {
              "title": "User Journey Mapping Basics",
              "desc": "Introduction to mapping user journeys",
              "duration": 3600000,
              "img": "https://example.com/user-journey-mapping.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc986a"
            },
            {
              "title": "Creating User Personas",
              "desc": "Developing user personas for UX design",
              "duration": 5400000,
              "img": "https://example.com/user-personas.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc986b"
            },
            {
              "title": "Mapping User Flows",
              "desc": "Creating user flows for better user experience",
              "duration": 7200000,
              "img": "https://example.com/user-flows.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc986c"
            },
            {
              "title": "Analyzing User Journeys",
              "desc": "Techniques for analyzing user journeys and improving UX",
              "duration": 10800000,
              "img": "https://example.com/analyzing-user-journeys.jpg",
              "video": "66c5e0d148ecb5b1e2dc97c2",
              "_id": "66c5e0d248ecb5b1e2dc986d"
            }
          ]
        }
      }
    ]
  }


  const filteredCourses = courses.results.filter(course => {
    return (
      course.data.details.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === '' || course.data.details.category === selectedCategory)
    );
  });

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page on category change
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-6">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Programming">Programming</option>

          {/* Add more categories as needed */}
        </select>
      </div>

      {currentCourses.map((course, index) => (
        <CourseDetails key={index} course={course} />
      ))}

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
        >
          Previous
        </button>
        <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
