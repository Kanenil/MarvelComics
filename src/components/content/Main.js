import React from "react";

export default function Main({ children }) {

    return (
        <div className="flex items-center justify-center flex-grow bg-gray-100">
            { children }
        </div>
    );
}