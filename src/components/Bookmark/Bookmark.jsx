import React from "react";


const Bookmark = ({ status, ...rest }) => {
    return (
        <button {...rest}>

            <i className="bi bi-bookmark-star"></i>
            <i className="bi bi-bookmark-star-fill"></i>
        </button>
    );
};

export default Bookmark;
