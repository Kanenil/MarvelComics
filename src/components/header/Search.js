import React, { createRef } from "react";
import IconButton from "../../elements/Buttons/IconButton";
import LoopIcon from "../../elements/Icons/LoopIcon";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const searchRef = createRef();
  const navigator = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let val = searchRef.current.value.trim();

    if(val)
      navigator(`/comics?title=${val}`)
  }

  return (
    <>
      <form className="flex items-center ml-10 space-x-4" onSubmit={onSubmitHandler}>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LoopIcon className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search"
            ref={searchRef}
            required
          />
        </div>
        <IconButton
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-600  focus:ring-4 focus:outline-none  hover:bg-red-400 focus:ring-red-500"
          icon={<LoopIcon className="w-5 h-5" />}
        />
      </form>
    </>
  );
}
