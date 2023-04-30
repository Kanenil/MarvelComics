import React from "react";
import Copyright from "./Copyright";
import Logo from "./Logo";
import Icon from "./Icon";
import Pages from "./Pages";

export default function Footer() {
  return (
    <footer className="bg-red-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo />
            <Icon />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <Pages />
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
