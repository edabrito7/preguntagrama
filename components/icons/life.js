export default function Life(props) {
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
          d="M12 16v3a2 2 0 01-2 2H9a2 2 0 01-2-2v-1a2 2 0 012-2h3zm0 0V8m0 0V4l5-1v4l-5 1z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        />
      </svg>
    )
}