const HistoryCollectedIcon = ({ color = "#FF6600" }) => {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.125 5V13.125H1.875V5" stroke={color} strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.375 1.875H0.625V5H14.375V1.875Z" stroke={color} strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.25 7.5H8.75" stroke={color} strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default HistoryCollectedIcon;
