import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Vynedam</h1>
        <nav className="space-x-4">
          <a href="#courses" className="hover:underline">
            Courses
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
