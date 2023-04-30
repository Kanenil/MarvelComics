import React from "react";
import { Link } from "react-router-dom";

export default function Pages() {
  return (
    <>
      <div>
        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
          Pages
        </h3>
        <ul role="list" className="mt-4 space-y-4">
          <li>
            <Link
              to="/"
              className="text-base text-gray-200 hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-base text-gray-200 hover:text-white"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="text-base text-gray-200 hover:text-white"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-base text-gray-200 hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/comics"
              className="text-base text-gray-200 hover:text-white"
            >
              Comics
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
