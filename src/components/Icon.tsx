type IconName = "shield" | "leaf" | "home" | "bolt" | "bug" | "mouse" | "spray" | "calendar" | "star";

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" as const };
  const stroke = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (name) {
    case "shield":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
          <path {...stroke} d="M9 12l2 2 4-5" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M20 4c-8 0-14 6-14 14 8 0 14-6 14-14z" />
          <path {...stroke} d="M6 18c3-3 7-6 12-8" />
        </svg>
      );
    case "home":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M3 11l9-8 9 8" />
          <path {...stroke} d="M5 10v10h14V10" />
          <path {...stroke} d="M9 20v-6h6v6" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      );
    case "bug":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M8 7a4 4 0 0 1 8 0v1H8V7z" />
          <path {...stroke} d="M9 8v12" />
          <path {...stroke} d="M15 8v12" />
          <path {...stroke} d="M6 13h12" />
          <path {...stroke} d="M7 6L5 4" />
          <path {...stroke} d="M17 6l2-2" />
        </svg>
      );
    case "mouse":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M12 22c-4 0-7-3-7-7v-3a7 7 0 1 1 14 0v3c0 4-3 7-7 7z" />
          <path {...stroke} d="M12 10v3" />
        </svg>
      );
    case "spray":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M9 3h6l-1 3H10L9 3z" />
          <path {...stroke} d="M7 8h10v12H7V8z" />
          <path {...stroke} d="M17 10c2 0 3-1 4-2" />
          <path {...stroke} d="M17 13c2 0 3-1 4-2" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M7 3v3" />
          <path {...stroke} d="M17 3v3" />
          <path {...stroke} d="M4 7h16" />
          <path {...stroke} d="M5 5h14v16H5V5z" />
          <path {...stroke} d="M8 11h3" />
          <path {...stroke} d="M13 11h3" />
          <path {...stroke} d="M8 15h3" />
          <path {...stroke} d="M13 15h3" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M12 2l3 7 7 .6-5.3 4.6 1.7 7.2-6.4-3.9-6.4 3.9 1.7-7.2L2 9.6 9 9l3-7z" />
        </svg>
      );
    default:
      return null;
  }
}
