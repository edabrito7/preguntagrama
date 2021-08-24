export default function Clock(props) {
    return (
      <svg
        width={24}
        height={24}
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9 2h6M12 10v4M12 22a8 8 0 100-16 8 8 0 000 16z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }