import React from "react";
import FacebookIcon from "../../elements/Icons/FacebookIcon";
import InstagramIcon from "../../elements/Icons/InstagramIcon";
import TwitterIcon from "../../elements/Icons/TwitterIcon";
import GithubIcon from "../../elements/Icons/GithubIcon";

export default function Icon() {
  return (
    <>
      <div className="flex space-x-6">
        <a href="#" className="text-white hover:text-gray-200">
          <FacebookIcon />
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <InstagramIcon />
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <TwitterIcon />
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <GithubIcon />
        </a>
      </div>
    </>
  );
}
