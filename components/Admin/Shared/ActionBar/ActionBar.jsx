import React from "react";

const ActionBar = ({ children }) => {
    return (
        <div className="flex">
            <div className="mt-3 mr-6 ml-auto">
                { children }
            </div>
        </div>
    )
}

export default ActionBar;