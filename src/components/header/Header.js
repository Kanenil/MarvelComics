import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Menu />
            </div>
          </div>
          <Search />
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Menu />
        </div>
      </nav>
    </header>
  );
}
