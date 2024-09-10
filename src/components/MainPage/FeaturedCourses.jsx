import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { WebHandler } from "../../data/remote/WebHandler";
import { URLS } from "../../data/remote/URL";
import { useNavigate } from "react-router-dom";

const FeaturedCourses = () => {
  const [res, setRes] = useState([
    {
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
            user: "66cc722bf42611600c93c622",
          },
          {
            rating: 5,
            review:
              "Fantastic course! The hands-on projects and quizzes really helped reinforce the concepts learned.",
            _id: "66cc7229f42611600c93c2e4",
            date: 1724674601023,
            user: "66cc722cf42611600c93c630",
          },
          {
            rating: 5,
            review:
              "Outstanding course! The practical projects were very helpful in applying the concepts learned.",
            _id: "66cc7229f42611600c93c2e5",
            date: 1724674601023,
            user: "66cc722df42611600c93c642",
          },
          {
            rating: 3,
            review:
              "The course was adequate but lacked interactive components. More hands-on activities would be beneficial.",
            _id: "66cc7229f42611600c93c2e6",
            date: 1724674601023,
            user: "66cc722df42611600c93c640",
          },
          {
            rating: 4,
            review:
              "Great course overall. The material was useful, but a few more interactive elements would enhance the experience.",
            _id: "66cc7229f42611600c93c2e7",
            date: 1724674601023,
            user: "66cc722cf42611600c93c62c",
          },
          {
            rating: 4,
            review:
              "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
            _id: "66cc7229f42611600c93c2e8",
            date: 1724674601023,
            user: "66cc722ef42611600c93c64a",
          },
          {
            rating: 4,
            review:
              "Good course overall. The instructor was clear and concise, though some areas felt a bit rushed.",
            _id: "66cc7229f42611600c93c2e9",
            date: 1724674601023,
            user: "66cc722df42611600c93c63c",
          },
          {
            rating: 4,
            review:
              "Very good course. The material was relevant, but a few sections could have been more engaging.",
            _id: "66cc7229f42611600c93c2ea",
            date: 1724674601023,
            user: "66cc722cf42611600c93c634",
          },
          {
            rating: 3,
            review:
              "The course covered basic concepts but lacked depth in some areas. More detailed content would be useful.",
            _id: "66cc7229f42611600c93c2eb",
            date: 1724674601023,
            user: "66cc722df42611600c93c63c",
          },
          {
            rating: 5,
            review:
              "Outstanding course! The practical projects were very helpful in applying the concepts learned.",
            _id: "66cc7229f42611600c93c2ec",
            date: 1724674601023,
            user: "66cc722cf42611600c93c62a",
          },
          {
            rating: 5,
            review:
              "Highly recommended! The course was well-organized, and the instructor's teaching style was very effective.",
            _id: "66cc7229f42611600c93c2ed",
            date: 1724674601023,
            user: "66cc722ef42611600c93c644",
          },
          {
            rating: 3,
            review:
              "The course provided basic information but lacked depth in certain areas. More detailed content would be beneficial.",
            _id: "66cc7229f42611600c93c2ee",
            date: 1724674601023,
            user: "66cc722cf42611600c93c62a",
          },
          {
            rating: 5,
            review:
              "An outstanding course with clear explanations and practical applications. I feel much more confident in the subject.",
            _id: "66cc7229f42611600c93c2ef",
            date: 1724674601023,
            user: "66cc722bf42611600c93c624",
          },
          {
            rating: 5,
            review:
              "Exceptional course! The instructor was knowledgeable, and the content was well-organized and relevant.",
            _id: "66cc7229f42611600c93c2f0",
            date: 1724674601023,
            user: "66cc722cf42611600c93c62c",
          },
          {
            rating: 4,
            review:
              "Good course with useful material. A few more examples and hands-on activities would make it even better.",
            _id: "66cc7229f42611600c93c2f1",
            date: 1724674601024,
            user: "66cc722df42611600c93c640",
          },
          {
            rating: 5,
            review: "good",
            user: "66d05d8673e3cbafbdb882b5",
            _id: "66d05dd573e3cbafbdb8833c",
            date: 1724931541843,
          },
          {
            rating: 4,
            review: "Good.. ",
            user: "66cc787cb0d15b4465e34f22",
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
    },
    {
      id: "66cc7229f42611600c93c346",
      data: {
        details: {
          category: "Cyber Security",
          title: "Introduction to Cyber Security",
          price: 149.99,
          rating: 4.2,
          numOfReviews: 6,
          img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        mentor: "66cc7228f42611600c93c0ea",
        duration: 74262421,
        description:
          "Discover how to design and develop backend systems using Node.js. This course covers advanced techniques and best practices for building scalable and efficient backend solutions, including performance optimization and error handling.",
        reviews: [
          {
            rating: 5,
            review:
              "Highly recommended! The course was well-organized, and the instructor's teaching style was very effective.",
            _id: "66cc7229f42611600c93c347",
            date: 1724674601029,
            user: "66cc722cf42611600c93c62a",
          },
          {
            rating: 5,
            review:
              "Fantastic course! The hands-on projects and quizzes really helped reinforce the concepts learned.",
            _id: "66cc7229f42611600c93c348",
            date: 1724674601030,
            user: "66cc722bf42611600c93c620",
          },
          {
            rating: 3,
            review:
              "The course covered basic concepts but lacked depth in some areas. More detailed content would be useful.",
            _id: "66cc7229f42611600c93c349",
            date: 1724674601030,
            user: "66cc722af42611600c93c618",
          },
          {
            rating: 3,
            review:
              "The course provided basic information but lacked depth in certain areas. More detailed content would be beneficial.",
            _id: "66cc7229f42611600c93c34a",
            date: 1724674601030,
            user: "66cc722df42611600c93c63e",
          },
          {
            rating: 5,
            review:
              "Highly recommend this course! The clear explanations and practical exercises made learning enjoyable.",
            _id: "66cc7229f42611600c93c34b",
            date: 1724674601030,
            user: "66cc722af42611600c93c612",
          },
          {
            rating: 4,
            review:
              "Very good course. The material was relevant, but a few sections could have been more engaging.",
            _id: "66cc7229f42611600c93c34c",
            date: 1724674601030,
            user: "66cc722cf42611600c93c62e",
          },
        ],
        lessons: [
          {
            title: "Introduction to Cyber Security",
            desc: "Fundamentals of cyber security principles",
            duration: 3600000,
            img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c34d",
          },
          {
            title: "Threats and Vulnerabilities",
            desc: "Understanding common cyber threats and vulnerabilities",
            duration: 5400000,
            img: "https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c34e",
          },
          {
            title: "Cyber Security Tools and Techniques",
            desc: "Overview of tools and techniques for cyber security",
            duration: 7200000,
            img: "https://images.unsplash.com/photo-1656067638332-1d189bf81079?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c34f",
          },
          {
            title: "Building a Security Strategy",
            desc: "Creating a comprehensive security strategy",
            duration: 10800000,
            img: "https://plus.unsplash.com/premium_photo-1661372041123-1eda2823211e?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c350",
          },
        ],
      },
    },
    {
      id: "66cc7228f42611600c93c1f1",
      data: {
        details: {
          category: "Data Science",
          title: "Introduction to Data Analysis",
          price: 199.99,
          rating: 3.9,
          numOfReviews: 14,
          img: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        mentor: "66cc7228f42611600c93c0b8",
        duration: 57076363,
        description:
          "Learn the fundamentals of data analysis, including methods for data collection, cleaning, and exploration. This course introduces basic statistical techniques and tools for analyzing data to gain actionable insights and make data-driven decisions.",
        reviews: [
          {
            rating: 4,
            review:
              "A solid course that provides a good foundation. The real-world examples were especially helpful.",
            _id: "66cc7228f42611600c93c1f2",
            date: 1724674600996,
            user: "66cc722bf42611600c93c620",
          },
          {
            rating: 3,
            review:
              "The course provided useful information but lacked depth in certain areas. More detailed content would be helpful.",
            _id: "66cc7228f42611600c93c1f4",
            date: 1724674600996,
            user: "66cc722af42611600c93c61a",
          },
          {
            rating: 4,
            review:
              "A solid course that provides a good foundation. The real-world examples were especially helpful.",
            _id: "66cc7228f42611600c93c1f5",
            date: 1724674600996,
            user: "66cc722cf42611600c93c630",
          },
          {
            rating: 4,
            review:
              "Good course overall. The instructor was clear and concise, though some areas felt a bit rushed.",
            _id: "66cc7228f42611600c93c1f6",
            date: 1724674600996,
            user: "66cc722ef42611600c93c64a",
          },
          {
            rating: 4,
            review:
              "Very good course. The material was relevant, but a few sections could have been more engaging.",
            _id: "66cc7228f42611600c93c1f7",
            date: 1724674600996,
            user: "66cc722bf42611600c93c628",
          },
          {
            rating: 3,
            review:
              "The course was decent but lacked engagement. More interactive elements would enhance the learning experience.",
            _id: "66cc7228f42611600c93c1f8",
            date: 1724674600996,
            user: "66cc722cf42611600c93c630",
          },
          {
            rating: 3,
            review:
              "The course was decent but could benefit from more interactive content and practical examples.",
            _id: "66cc7228f42611600c93c1f9",
            date: 1724674600996,
            user: "66cc722af42611600c93c61a",
          },
          {
            rating: 4,
            review:
              "A solid course that provides a good foundation. The real-world examples were especially helpful.",
            _id: "66cc7228f42611600c93c1fa",
            date: 1724674600996,
            user: "66cc722cf42611600c93c630",
          },
          {
            rating: 3,
            review:
              "The course was decent but lacked engagement. More interactive elements would enhance the learning experience.",
            _id: "66cc7228f42611600c93c1fb",
            date: 1724674600997,
            user: "66cc722af42611600c93c614",
          },
          {
            rating: 4,
            review:
              "Well-structured and informative. Some areas could use more depth, but overall a great learning experience.",
            _id: "66cc7228f42611600c93c1fc",
            date: 1724674600997,
            user: "66cc722bf42611600c93c61e",
          },
          {
            rating: 5,
            review:
              "Highly recommend this course! The clear explanations and practical exercises made learning enjoyable.",
            _id: "66cc7228f42611600c93c1fd",
            date: 1724674600997,
            user: "66cc722af42611600c93c614",
          },
          {
            rating: 5,
            review:
              "Excellent course! The content was well-structured and the instructor's expertise was evident.",
            _id: "66cc7228f42611600c93c1fe",
            date: 1724674600997,
            user: "66cc722af42611600c93c616",
          },
          {
            rating: 4,
            review:
              "A solid course with practical insights. The pacing was good, though some sections could use more detail.",
            _id: "66cc7228f42611600c93c1ff",
            date: 1724674600997,
            user: "66cc722af42611600c93c616",
          },
          {
            rating: 4,
            review:
              "A good course overall. The material was useful, but a few more interactive elements would enhance the experience.",
            _id: "66cc7228f42611600c93c200",
            date: 1724674600997,
            user: "66cc722bf42611600c93c622",
          },
        ],
        lessons: [
          {
            title: "Introduction to Data Analysis",
            desc: "Fundamentals of data analysis techniques",
            duration: 3600000,
            img: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c201",
          },
          {
            title: "Data Cleaning and Preparation",
            desc: "Techniques for cleaning and preparing data",
            duration: 5400000,
            img: "https://plus.unsplash.com/premium_photo-1661692759400-15aa4e2de6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c202",
          },
          {
            title: "Exploratory Data Analysis",
            desc: "Exploring data sets and identifying patterns",
            duration: 7200000,
            img: "https://images.unsplash.com/photo-1656067638332-1d189bf81079?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c203",
          },
          {
            title: "Data Analysis with Python",
            desc: "Using Python for data analysis tasks",
            duration: 10800000,
            img: "https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c204",
          },
        ],
      },
    },
    {
      id: "66cc7229f42611600c93c26e",
      data: {
        details: {
          category: "DevOps",
          title: "Kubernetes for Beginners",
          price: 199.99,
          rating: 4,
          numOfReviews: 9,
          img: "https://plus.unsplash.com/premium_photo-1670213989449-0df2d16d712c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        mentor: "66cc7228f42611600c93c0d6",
        duration: 23956893,
        description:
          "Discover Kubernetes and its role in managing containerized applications. The course introduces key Kubernetes concepts, including deployment strategies, service discovery, and scaling, providing you with the knowledge to manage and orchestrate containerized environments effectively.",
        reviews: [
          {
            rating: 4,
            review:
              "A solid course with practical insights. The pacing was good, though some sections could use more detail.",
            _id: "66cc7229f42611600c93c26f",
            date: 1724674601011,
            user: "66cc722cf42611600c93c62a",
          },
          {
            rating: 4,
            review:
              "A solid course with good content. The pace was good, but a few more interactive elements would enhance learning.",
            _id: "66cc7229f42611600c93c270",
            date: 1724674601011,
            user: "66cc722af42611600c93c612",
          },
          {
            rating: 4,
            review:
              "Very good course. The material was relevant, but a few sections could have been more engaging.",
            _id: "66cc7229f42611600c93c271",
            date: 1724674601012,
            user: "66cc722cf42611600c93c62a",
          },
          {
            rating: 4,
            review:
              "Good course with useful material. A few more examples and hands-on activities would make it even better.",
            _id: "66cc7229f42611600c93c272",
            date: 1724674601012,
            user: "66cc722cf42611600c93c62e",
          },
          {
            rating: 4,
            review:
              "A good course overall. The material was useful, but a few more interactive elements would enhance the experience.",
            _id: "66cc7229f42611600c93c273",
            date: 1724674601012,
            user: "66cc722cf42611600c93c632",
          },
          {
            rating: 4,
            review:
              "Good course with clear explanations. Additional interactive elements would improve the overall experience.",
            _id: "66cc7229f42611600c93c274",
            date: 1724674601012,
            user: "66cc722cf42611600c93c630",
          },
          {
            rating: 3,
            review:
              "The course was decent but lacked engagement. More interactive elements would enhance the learning experience.",
            _id: "66cc7229f42611600c93c275",
            date: 1724674601012,
            user: "66cc722af42611600c93c616",
          },
          {
            rating: 4,
            review:
              "Good course with clear explanations. Additional interactive elements would improve the overall experience.",
            _id: "66cc7229f42611600c93c276",
            date: 1724674601012,
            user: "66cc722bf42611600c93c624",
          },
          {
            rating: 5,
            review:
              "Highly recommended! The course material was well-organized and the instructor was very knowledgeable.",
            _id: "66cc7229f42611600c93c277",
            date: 1724674601012,
            user: "66cc722df42611600c93c642",
          },
        ],
        lessons: [
          {
            title: "Introduction to Kubernetes",
            desc: "Fundamentals of Kubernetes for container orchestration",
            duration: 3600000,
            img: "https://plus.unsplash.com/premium_photo-1661281312741-531b9e37b756?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c278",
          },
          {
            title: "Kubernetes Architecture",
            desc: "Understanding the architecture of Kubernetes",
            duration: 5400000,
            img: "https://images.unsplash.com/photo-1654220670179-f1098a09d9ba?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c279",
          },
          {
            title: "Managing Kubernetes Clusters",
            desc: "Techniques for managing and scaling Kubernetes clusters",
            duration: 7200000,
            img: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c27a",
          },
          {
            title: "Advanced Kubernetes Features",
            desc: "Exploring advanced Kubernetes features and use cases",
            duration: 10800000,
            img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c27b",
          },
        ],
      },
    },
    {
      id: "66cc7229f42611600c93c2a4",
      data: {
        details: {
          category: "Graphic Design",
          title: "Introduction to Graphic Design",
          price: 139.99,
          rating: 4.3,
          numOfReviews: 6,
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        mentor: "66cc7228f42611600c93c0e0",
        duration: 70257236,
        description:
          "Learn the fundamentals of graphic design, including visual communication, layout principles, and color theory. This course provides a comprehensive introduction to creating effective and aesthetically pleasing graphic design projects for various purposes.",
        reviews: [
          {
            rating: 3,
            review:
              "The course was decent but lacked engagement. More interactive elements would enhance the learning experience.",
            _id: "66cc7229f42611600c93c2a5",
            date: 1724674601016,
            user: "66cc722bf42611600c93c624",
          },
          {
            rating: 5,
            review:
              "One of the best courses I've taken. The content was relevant and the teaching style was engaging.",
            _id: "66cc7229f42611600c93c2a6",
            date: 1724674601016,
            user: "66cc722cf42611600c93c634",
          },
          {
            rating: 5,
            review:
              "An exceptional learning experience! The course was well-organized and provided in-depth knowledge on the topic.",
            _id: "66cc7229f42611600c93c2a7",
            date: 1724674601016,
            user: "66cc722ef42611600c93c646",
          },
          {
            rating: 5,
            review:
              "Fantastic learning experience! The course was well-structured, and the practical exercises were very helpful.",
            _id: "66cc7229f42611600c93c2a8",
            date: 1724674601016,
            user: "66cc722af42611600c93c614",
          },
          {
            rating: 4,
            review:
              "Very informative course. The material was relevant, though some sections felt a bit rushed.",
            _id: "66cc7229f42611600c93c2a9",
            date: 1724674601016,
            user: "66cc722ef42611600c93c648",
          },
          {
            rating: 4,
            review:
              "A solid course with practical insights. The pacing was good, though some sections could use more detail.",
            _id: "66cc7229f42611600c93c2aa",
            date: 1724674601016,
            user: "66cc722cf42611600c93c62e",
          },
        ],
        lessons: [
          {
            title: "Introduction to Graphic Design",
            desc: "Fundamentals of graphic design principles",
            duration: 3600000,
            img: "https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c2ab",
          },
          {
            title: "Graphic Design Software Overview",
            desc: "Overview of popular graphic design software",
            duration: 5400000,
            img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c2ac",
          },
          {
            title: "Creating Visual Assets",
            desc: "Designing visual assets for different media",
            duration: 7200000,
            img: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c2ad",
          },
          {
            title: "Graphic Design Trends",
            desc: "Exploring current trends in graphic design",
            duration: 10800000,
            img: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7229f42611600c93c2ae",
          },
        ],
      },
    },
    {
      id: "66cc7228f42611600c93c1d1",
      data: {
        details: {
          category: "UI/UX Design",
          title: "User Journey Mapping",
          price: 159.99,
          rating: 4.2,
          numOfReviews: 12,
          img: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        mentor: "66cc7228f42611600c93c0cc",
        duration: 61634918,
        description:
          "Understand how to map out user journeys to identify pain points and opportunities for improvement. This course teaches you to create user personas and journey maps, helping you enhance the overall user experience by addressing specific user needs and behaviors.",
        reviews: [
          {
            rating: 5,
            review:
              "Exceptional course! The instructor was knowledgeable, and the content was well-organized and relevant.",
            _id: "66cc7228f42611600c93c1d2",
            date: 1724674600993,
            user: "66cc722df42611600c93c63c",
          },
          {
            rating: 3,
            review:
              "Useful content, but the course could benefit from a faster pace and more engaging delivery.",
            _id: "66cc7228f42611600c93c1d3",
            date: 1724674600993,
            user: "66cc722ef42611600c93c648",
          },
          {
            rating: 5,
            review:
              "Fantastic course! The instructor was engaging, and the content was highly relevant and useful.",
            _id: "66cc7228f42611600c93c1d4",
            date: 1724674600993,
            user: "66cc722df42611600c93c63c",
          },
          {
            rating: 5,
            review:
              "An exceptional learning experience! The course was well-organized and provided in-depth knowledge on the topic.",
            _id: "66cc7228f42611600c93c1d5",
            date: 1724674600993,
            user: "66cc722ef42611600c93c64a",
          },
          {
            rating: 5,
            review:
              "Fantastic learning experience! The course was well-structured, and the practical exercises were very helpful.",
            _id: "66cc7228f42611600c93c1d6",
            date: 1724674600993,
            user: "66cc722df42611600c93c640",
          },
          {
            rating: 5,
            review:
              "Fantastic course! The instructor was engaging, and the content was highly relevant and useful.",
            _id: "66cc7228f42611600c93c1d7",
            date: 1724674600993,
            user: "66cc722ef42611600c93c648",
          },
          {
            rating: 3,
            review:
              "The course provided basic information but lacked depth in certain areas. More detailed content would be beneficial.",
            _id: "66cc7228f42611600c93c1d8",
            date: 1724674600994,
            user: "66cc722ef42611600c93c646",
          },
          {
            rating: 4,
            review:
              "Great course overall. Some topics were covered in more detail than others, but it was very informative.",
            _id: "66cc7228f42611600c93c1d9",
            date: 1724674600994,
            user: "66cc722af42611600c93c616",
          },
          {
            rating: 4,
            review:
              "A good course overall. The material was useful, but a few more interactive elements would enhance the experience.",
            _id: "66cc7228f42611600c93c1da",
            date: 1724674600994,
            user: "66cc722ef42611600c93c64a",
          },
          {
            rating: 3,
            review:
              "Useful content, but the course could benefit from a faster pace and more engaging delivery.",
            _id: "66cc7228f42611600c93c1db",
            date: 1724674600994,
            user: "66cc722cf42611600c93c630",
          },
          {
            rating: 4,
            review:
              "Good course with clear explanations. Additional interactive elements would improve the overall experience.",
            _id: "66cc7228f42611600c93c1dc",
            date: 1724674600994,
            user: "66cc722bf42611600c93c628",
          },
          {
            rating: 4,
            review: "Good ",
            user: "66d55f4ebf0acc644fa86055",
            _id: "66d56ac2bf0acc644fa8656e",
            date: 1725262530421,
          },
        ],
        lessons: [
          {
            title: "User Journey Mapping Basics",
            desc: "Introduction to mapping user journeys",
            duration: 3600000,
            img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c1dd",
          },
          {
            title: "Creating User Personas",
            desc: "Developing user personas for UX design",
            duration: 5400000,
            img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c1de",
          },
          {
            title: "Mapping User Flows",
            desc: "Creating user flows for better user experience",
            duration: 7200000,
            img: "https://images.unsplash.com/photo-1656067638332-1d189bf81079?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c1df",
          },
          {
            title: "Analyzing User Journeys",
            desc: "Techniques for analyzing user journeys and improving UX",
            duration: 10800000,
            img: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c1e0",
          },
        ],
      },
    },
    {
      id: "66cc7228f42611600c93c145",
      data: {
        details: {
          category: "Web Development",
          title: "JavaScript Essentials",
          price: 119.99,
          rating: 4.3,
          numOfReviews: 11,
          img: "https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        mentor: "66cc7228f42611600c93c0ae",
        duration: 27181948,
        description:
          "Dive into JavaScript to grasp essential programming concepts such as variables, functions, loops, and events. This course is tailored to help you build a strong foundation in JavaScript, equipping you with the skills to create interactive and dynamic web applications.",
        reviews: [
          {
            rating: 3,
            review:
              "The course provided basic information but lacked depth in certain areas. More detailed content would be beneficial.",
            _id: "66cc7228f42611600c93c146",
            date: 1724674600980,
            user: "66cc722af42611600c93c614",
          },
          {
            rating: 5,
            review:
              "Excellent course! The content was clear, and the projects were highly beneficial for applying what was learned.",
            _id: "66cc7228f42611600c93c147",
            date: 1724674600980,
            user: "66cc722cf42611600c93c62a",
          },
          {
            rating: 5,
            review:
              "Highly recommended! The course material was well-organized and the instructor was very knowledgeable.",
            _id: "66cc7228f42611600c93c148",
            date: 1724674600980,
            user: "66cc722df42611600c93c63e",
          },
          {
            rating: 4,
            review:
              "Very informative course. The material was relevant, though some sections felt a bit rushed.",
            _id: "66cc7228f42611600c93c149",
            date: 1724674600980,
            user: "66cc722bf42611600c93c620",
          },
          {
            rating: 3,
            review:
              "The course was adequate but lacked interactive components. More hands-on activities would be beneficial.",
            _id: "66cc7228f42611600c93c14a",
            date: 1724674600980,
            user: "66cc722df42611600c93c63c",
          },
          {
            rating: 5,
            review:
              "Highly recommended! The course material was well-organized and the instructor was very knowledgeable.",
            _id: "66cc7228f42611600c93c14b",
            date: 1724674600980,
            user: "66cc722af42611600c93c618",
          },
          {
            rating: 5,
            review:
              "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
            _id: "66cc7228f42611600c93c14c",
            date: 1724674600980,
            user: "66cc722df42611600c93c63a",
          },
          {
            rating: 4,
            review:
              "Great course overall. Some topics were covered in more detail than others, but it was very informative.",
            _id: "66cc7228f42611600c93c14d",
            date: 1724674600980,
            user: "66cc722cf42611600c93c62e",
          },
          {
            rating: 4,
            review:
              "A solid course with good content. The pace was good, but a few more interactive elements would enhance learning.",
            _id: "66cc7228f42611600c93c14e",
            date: 1724674600980,
            user: "66cc722af42611600c93c618",
          },
          {
            rating: 5,
            review:
              "Highly recommended! The course material was well-organized and the instructor was very knowledgeable.",
            _id: "66cc7228f42611600c93c14f",
            date: 1724674600980,
            user: "66cc722af42611600c93c610",
          },
          {
            rating: 4,
            review:
              "Very good course with useful material. A few more examples and hands-on activities would improve it further.",
            _id: "66cc7228f42611600c93c150",
            date: 1724674600980,
            user: "66cc722cf42611600c93c634",
          },
        ],
        lessons: [
          {
            title: "JavaScript Basics",
            desc: "Introduction to JavaScript and its syntax",
            duration: 3600000,
            img: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c151",
          },
          {
            title: "JavaScript Functions",
            desc: "Creating and using functions in JavaScript",
            duration: 5400000,
            img: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c152",
          },
          {
            title: "DOM Manipulation",
            desc: "Interacting with the Document Object Model (DOM)",
            duration: 7200000,
            img: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c153",
          },
          {
            title: "JavaScript ES6 Features",
            desc: "Understanding new features introduced in ES6",
            duration: 10800000,
            img: "https://plus.unsplash.com/premium_photo-1683121713210-97667d2e83c8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "66cc7228f42611600c93c137",
            _id: "66cc7228f42611600c93c154",
          },
        ],
      },
    },
  ]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { response, status } = await WebHandler(URLS.FEATURED, "GET");

  //       if (status === 200 && Array.isArray(response)) {
  //         setRes(response);
  //       } else {
  //         setError(true);
  //       }
  //     } catch (error) {
  //       setError(true);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="flex justify-center mb-40">
      <div className="w-[70%]">
        <div className="flex justify-between items-center mb-12">
          <div className="">
            <h2 className="font-semibold text-xl">Featured Courses</h2>
            <p>Explore our Popular Courses</p>
          </div>
          <button
            onClick={() => navigate("/courses")}
            className="border-[1.5px] border-black p-3 rounded-3xl hover:bg-[#0DAFE6] hover:text-white hover:border-none"
          >
            All Courses
          </button>
        </div>

        
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {res.map((course, index) => (
              <FeatureCard key={index} course={course} />
            ))}
          </div>
      
        
      </div>
    </div>
  );
};

export default FeaturedCourses;
