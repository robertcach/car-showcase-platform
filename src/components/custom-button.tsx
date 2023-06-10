interface CustomButtonProps {
  href: string;
  showIcon?: boolean;
  title: string;
}

export default function CustomButton({
  href,
  showIcon = false,
  title,
}: CustomButtonProps) {
  return (
    <a
      href={href}
      title={title}
      className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
      role="button"
    >
      {title}

      {showIcon && (
        <svg
          className="w-6 h-6 ml-8 -mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </a>
  );
}
