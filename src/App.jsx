import React from "react";

import { courses } from "./data/courses.js";
import Header from "./Components/Header.jsx";
import CourseCard from "./Components/CourseCard.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6" id="courses">
          Our Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
