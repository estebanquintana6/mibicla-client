import React from 'react';

const Navbar = () => {
    // TODO: Create navbar component
    const arr = [
        'Hello World',
        'Goodbye World',
    ]

    const clickHandler = (text) => {
        alert(text);
    }

    return (
        <div>
            {arr.map((text) =>
                <button className="bg-blue-800 mr-3" onClick={() => clickHandler(text)}>{text}</button>
            )}
        </div>
    )
}

export default Navbar;