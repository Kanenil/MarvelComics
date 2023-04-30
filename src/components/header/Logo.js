import React from "react";

export default function Logo(props) {
  return (
    <>
      <img
        className="h-10 w-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png"
        alt=""
        {...props}
      />
    </>
  );
}