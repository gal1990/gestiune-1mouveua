import React from "react";

const ComplainIcon = ({ color = "#FF6600" }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_78_8649)">
                <path d="M9.45768 4.81355L14.7914 14.029H4.12393L9.45768 4.81355ZM9.45768 1.9873L1.66602 15.4456H17.2493L9.45768 1.9873Z" fill={color} />
                <path d="M10.166 11.904H8.74935V13.3206H10.166V11.904Z" fill={color} />
                <path d="M10.166 7.65397H8.74935V11.1956H10.166V7.65397Z" fill={color} />
            </g>
        </svg>
    );
};

export default ComplainIcon;
