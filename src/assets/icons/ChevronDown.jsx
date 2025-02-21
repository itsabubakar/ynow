const ChevronDown = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.49976 9.00005L12.4998 15L18.4998 9"
        stroke={color || "#101828"}
        strokeWidth="1.5"
        strokeMiterlimit="16"
      />
    </svg>
  );
};

export default ChevronDown;
