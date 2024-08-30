import React, { useEffect, useState, useCallback } from "react";
import FeatureCard from "../components/MainPage/FeatureCard";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import Loader from "../components/General/Loader";

const SavedCourses = () => {
  const [savedCourses, setSavedCourses] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [shouldFetch, setShouldFetch] = useState(true); 

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { response, status } = await WebHandler(URLS.SAVEDCOURSES, "GET");
      if (status === 200 && Array.isArray(response)) {
        setSavedCourses(response);
      } else {
        setSavedCourses([]); 
      }
    } catch (error) {
      setSavedCourses([]); 
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (shouldFetch) {
      fetchData();
      setShouldFetch(false); 
    }
  }, [shouldFetch, fetchData]);

  return (
    <div className="">
      {loading && <Loader />}
      <div className="flex justify-center min-h-screen">
        <div className="flex flex-col gap-12 w-[70%]">
          <div className="text-4xl">Saved Courses</div>
          {savedCourses.length === 0 && !loading ? (
            <div>No Saved Courses</div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {savedCourses.map((course, index) => (
                <FeatureCard setShouldFetch={setShouldFetch} key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedCourses;
