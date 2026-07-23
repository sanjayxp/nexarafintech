export default function GlobeGraphic() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -right-24 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 xl:block xl:-right-8"
    >
      <svg
        viewBox="0 0 600 600"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="260" stroke="white" strokeOpacity="0.14" />

        <ellipse cx="300" cy="300" rx="200" ry="260" stroke="white" strokeOpacity="0.1" />
        <ellipse cx="300" cy="300" rx="110" ry="260" stroke="white" strokeOpacity="0.1" />
        <line x1="300" y1="40" x2="300" y2="560" stroke="white" strokeOpacity="0.1" />

        <ellipse cx="300" cy="300" rx="260" ry="200" stroke="white" strokeOpacity="0.1" />
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="white" strokeOpacity="0.1" />
        <line x1="40" y1="300" x2="560" y2="300" stroke="white" strokeOpacity="0.1" />

        <line
          x1="205"
          y1="150"
          x2="420"
          y2="230"
          stroke="#5eead4"
          strokeOpacity="0.35"
          strokeDasharray="4 6"
        />
        <line
          x1="420"
          y1="230"
          x2="330"
          y2="430"
          stroke="#5eead4"
          strokeOpacity="0.35"
          strokeDasharray="4 6"
        />
        <line
          x1="205"
          y1="150"
          x2="180"
          y2="390"
          stroke="#5eead4"
          strokeOpacity="0.25"
          strokeDasharray="4 6"
        />

        <circle cx="205" cy="150" r="5" fill="#5eead4" fillOpacity="0.8" />
        <circle cx="420" cy="230" r="4" fill="#5eead4" fillOpacity="0.6" />
        <circle cx="330" cy="430" r="5" fill="#5eead4" fillOpacity="0.8" className="animate-pulse" />
        <circle cx="180" cy="390" r="4" fill="#5eead4" fillOpacity="0.6" />
        <circle cx="300" cy="300" r="3.5" fill="#5eead4" fillOpacity="0.5" className="animate-pulse" />
      </svg>
    </div>
  );
}
