import React, { useState } from "react";

export default function CourseCard({ course }) {
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    setEnrolled(true);
    alert(`You have enrolled in "${course.title}"!`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p className="text-sm text-gray-500 mb-4">Duration: {course.duration}</p>
      <button
        onClick={handleEnroll}
        className={`px-4 py-2 rounded transition-colors ${
          enrolled
            ? "bg-green-500 text-white cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        disabled={enrolled}
      >
        {enrolled ? "Enrolled" : "Enroll Now"}
      </button>
    </div>
  );
}
