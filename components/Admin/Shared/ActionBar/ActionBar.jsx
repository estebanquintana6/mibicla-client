import React from "react";

const ActionBar = ({ children }) => {
    return (
        <div className="flex">
            <div className="mt-3 ml-auto">
                { children }
            </div>
        </div>
    )
}

export default ActionBar;