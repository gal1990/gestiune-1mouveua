import React from "react";

const RefuseIcon = ({ color = "#FF6600" }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_78_8688)">
                <path d="M17.25 3.61328V7.86328H13" stroke={color} stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.66797 14.9473V10.6973H5.91797" stroke={color} stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M3.44589 7.15457C3.80513 6.13938 4.41569 5.23173 5.22059 4.51633C6.02549 3.80092 6.99851 3.30107 8.04884 3.06342C9.09917 2.82577 10.1926 2.85807 11.2271 3.15729C12.2615 3.45651 13.2034 4.01291 13.9646 4.77457L17.2513 7.86291M1.66797 10.6962L4.95464 13.7846C5.71591 14.5462 6.65773 15.1026 7.69221 15.4019C8.72668 15.7011 9.8201 15.7334 10.8704 15.4957C11.9208 15.2581 12.8938 14.7582 13.6987 14.0428C14.5036 13.3274 15.1141 12.4198 15.4734 11.4046"
                    stroke={color}
                    stroke-width="1.62917"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
        </svg>
    );
};

export default RefuseIcon;
