import React from "react";

export function Account({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill={color}
      />
      <path
        d="M17.08 14.1509C14.29 12.2909 9.73996 12.2909 6.92996 14.1509C5.65996 15.0009 4.95996 16.1509 4.95996 17.3809C4.95996 18.6109 5.65996 19.7509 6.91996 20.5909C8.31996 21.5309 10.16 22.0009 12 22.0009C13.84 22.0009 15.68 21.5309 17.08 20.5909C18.34 19.7409 19.04 18.6009 19.04 17.3609C19.03 16.1309 18.34 14.9909 17.08 14.1509Z"
        fill={color}
      />
    </svg>
  );
}

export function Order({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 2H6C3 2 2 3.79 2 6V7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7ZM11.25 13.75H6.75C6.34 13.75 6 13.41 6 13C6 12.59 6.34 12.25 6.75 12.25H11.25C11.66 12.25 12 12.59 12 13C12 13.41 11.66 13.75 11.25 13.75ZM12 9.75H6C5.59 9.75 5.25 9.41 5.25 9C5.25 8.59 5.59 8.25 6 8.25H12C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75Z"
        fill={color}
      />
      <path
        d="M18.01 2V3.5C18.67 3.5 19.3 3.77 19.76 4.22C20.24 4.71 20.5 5.34 20.5 6V8.42C20.5 9.16 20.17 9.5 19.42 9.5H17.5V4.01C17.5 3.73 17.73 3.5 18.01 3.5V2ZM18.01 2C16.9 2 16 2.9 16 4.01V11H19.42C21 11 22 10 22 8.42V6C22 4.9 21.55 3.9 20.83 3.17C20.1 2.45 19.11 2.01 18.01 2C18.02 2 18.01 2 18.01 2Z"
        fill={color}
      />
    </svg>
  );
}

// export function Inbox({ color }) {
//   return (
//     <svg
//       width={16}
//       height={17}
//       viewBox="0 0 16 17"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M6.66669 4.5L10.6667 8.5L6.66669 12.5V4.5Z"
//         fill="#555555"
//         stroke="#555555"
//         strokeWidth={2}
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

export function Inbox({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M21.3 12.2305H17.82C16.84 12.2305 15.97 12.7705 15.53 13.6505L14.69 15.3105C14.49 15.7105 14.09 15.9605 13.65 15.9605H10.37C10.06 15.9605 9.62 15.8905 9.33 15.3105L8.49 13.6605C8.05 12.7905 7.17 12.2405 6.2 12.2405H2.7C2.31 12.2405 2 12.5505 2 12.9405V16.2005C2 19.8305 4.18 22.0005 7.82 22.0005H16.2C19.63 22.0005 21.74 20.1205 22 16.7805V12.9305C22 12.5505 21.69 12.2305 21.3 12.2305Z"
        fill={color}
      />
      <path
        d="M22 7.81V10.85C21.78 10.77 21.54 10.73 21.3 10.73H17.82C16.27 10.73 14.88 11.59 14.19 12.97L13.44 14.45H10.58L9.83 12.98C9.14 11.59 7.75 10.73 6.2 10.73H2.7C2.46 10.73 2.22 10.77 2 10.85V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
        fill={color}
      />
    </svg>
  );
}

export function Pending({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22Z"
        fill={color}
      />
      <path
        d="M19.02 3.47967C17.08 1.53967 15.18 1.48967 13.19 3.47967L11.98 4.68967C11.88 4.78967 11.84 4.94967 11.88 5.08967C12.64 7.73967 14.76 9.85967 17.41 10.6197C17.45 10.6297 17.49 10.6397 17.53 10.6397C17.64 10.6397 17.74 10.5997 17.82 10.5197L19.02 9.30967C20.01 8.32967 20.49 7.37967 20.49 6.41967C20.5 5.42967 20.02 4.46967 19.02 3.47967Z"
        fill={color}
      />
      <path
        d="M15.61 11.5308C15.32 11.3908 15.04 11.2508 14.77 11.0908C14.55 10.9608 14.34 10.8208 14.13 10.6708C13.96 10.5608 13.76 10.4008 13.57 10.2408C13.55 10.2308 13.48 10.1708 13.4 10.0908C13.07 9.81078 12.7 9.45078 12.37 9.05078C12.34 9.03078 12.29 8.96078 12.22 8.87078C12.12 8.75078 11.95 8.55078 11.8 8.32078C11.68 8.17078 11.54 7.95078 11.41 7.73078C11.25 7.46078 11.11 7.19078 10.97 6.91078C10.9488 6.86539 10.9283 6.82022 10.9085 6.77532C10.7609 6.442 10.3262 6.34455 10.0685 6.60231L4.34001 12.3308C4.21001 12.4608 4.09001 12.7108 4.06001 12.8808L3.52001 16.7108C3.42001 17.3908 3.61001 18.0308 4.03001 18.4608C4.39001 18.8108 4.89001 19.0008 5.43001 19.0008C5.55001 19.0008 5.67001 18.9908 5.79001 18.9708L9.63001 18.4308C9.81001 18.4008 10.06 18.2808 10.18 18.1508L15.9013 12.4295C16.1609 12.1699 16.063 11.7245 15.7254 11.5804C15.6874 11.5642 15.6489 11.5476 15.61 11.5308Z"
        fill={color}
      />
    </svg>
  );
}

export function Saved({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M16.44 3.09961C14.63 3.09961 13.01 3.97961 12 5.32961C10.99 3.97961 9.37 3.09961 7.56 3.09961C4.49 3.09961 2 5.59961 2 8.68961C2 9.87961 2.19 10.9796 2.52 11.9996C4.1 16.9996 8.97 19.9896 11.38 20.8096C11.72 20.9296 12.28 20.9296 12.62 20.8096C15.03 19.9896 19.9 16.9996 21.48 11.9996C21.81 10.9796 22 9.87961 22 8.68961C22 5.59961 19.51 3.09961 16.44 3.09961Z"
        fill={color}
      />
    </svg>
  );
}

export function Address({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M22 4.84969V16.7397C22 17.7097 21.21 18.5997 20.24 18.7197L19.93 18.7597C18.29 18.9797 15.98 19.6597 14.12 20.4397C13.47 20.7097 12.75 20.2197 12.75 19.5097V5.59969C12.75 5.22969 12.96 4.88969 13.29 4.70969C15.12 3.71969 17.89 2.83969 19.77 2.67969H19.83C21.03 2.67969 22 3.64969 22 4.84969Z"
        fill={color}
      />
      <path
        d="M10.71 4.70969C8.87999 3.71969 6.10999 2.83969 4.22999 2.67969H4.15999C2.95999 2.67969 1.98999 3.64969 1.98999 4.84969V16.7397C1.98999 17.7097 2.77999 18.5997 3.74999 18.7197L4.05999 18.7597C5.69999 18.9797 8.00999 19.6597 9.86999 20.4397C10.52 20.7097 11.24 20.2197 11.24 19.5097V5.59969C11.24 5.21969 11.04 4.88969 10.71 4.70969ZM4.99999 7.73969H7.24999C7.65999 7.73969 7.99999 8.07969 7.99999 8.48969C7.99999 8.90969 7.65999 9.23969 7.24999 9.23969H4.99999C4.58999 9.23969 4.24999 8.90969 4.24999 8.48969C4.24999 8.07969 4.58999 7.73969 4.99999 7.73969ZM7.99999 12.2397H4.99999C4.58999 12.2397 4.24999 11.9097 4.24999 11.4897C4.24999 11.0797 4.58999 10.7397 4.99999 10.7397H7.99999C8.40999 10.7397 8.74999 11.0797 8.74999 11.4897C8.74999 11.9097 8.40999 12.2397 7.99999 12.2397Z"
        fill={color}
      />
    </svg>
  );
}

export function RecentViewed({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.21 15.81 15.96 15.94 15.7 15.94C15.57 15.94 15.44 15.91 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z"
        fill={color}
      />
    </svg>
  );
}

export function Followed({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M7.79999 22.1502C5.14999 22.1502 2.98999 20.0002 2.98999 17.3402V14.5002C2.98999 13.8302 3.64999 13.3802 4.27999 13.6002C4.53999 13.6902 4.79999 13.7502 5.06999 13.7902C5.18999 13.8102 5.30999 13.8302 5.42999 13.8302C5.57999 13.8502 5.73999 13.8602 5.88999 13.8602C6.99999 13.8602 8.09999 13.4502 8.96999 12.7402C9.79999 13.4502 10.87 13.8602 12.01 13.8602C13.15 13.8602 14.21 13.4702 15.04 12.7502C15.9 13.4502 16.98 13.8602 18.08 13.8602C18.25 13.8602 18.43 13.8502 18.59 13.8302C18.71 13.8202 18.81 13.8102 18.92 13.7902C19.22 13.7502 19.49 13.6702 19.76 13.5802C20.38 13.3702 21.03 13.8302 21.03 14.4802V17.3402C21.03 19.9902 18.88 22.1502 16.22 22.1502H7.79999Z"
        fill={color}
      />
      <path
        d="M21.98 8.58961L21.7 5.92961C21.3 3.02961 19.98 1.84961 17.16 1.84961H14.9H13.48H10.56H9.13H6.82C4.00001 1.84961 2.69 3.02961 2.28 5.95961L2.02 8.59961C1.92 9.62961 2.2 10.6296 2.81 11.4096C3.54 12.3596 4.66 12.8996 5.91 12.8996C7.12 12.8996 8.28 12.2896 9.01 11.3196C9.66001 12.2896 10.78 12.8996 12.02 12.8996C13.26 12.8996 14.35 12.3196 15.01 11.3596C15.75 12.3096 16.89 12.8996 18.09 12.8996C19.37 12.8996 20.52 12.3296 21.24 11.3296C21.82 10.5596 22.08 9.58961 21.98 8.58961ZM13.5 7.72961H12.75V8.50961C12.75 8.92961 12.41 9.25961 12 9.25961C11.59 9.25961 11.25 8.92961 11.25 8.50961V7.72961H10.5C10.09 7.72961 9.75 7.39961 9.75 6.97961C9.75 6.56961 10.09 6.22961 10.5 6.22961H11.25V5.51961C11.25 5.10961 11.59 4.76961 12 4.76961C12.41 4.76961 12.75 5.10961 12.75 5.51961V6.22961H13.5C13.91 6.22961 14.25 6.56961 14.25 6.97961C14.25 7.39961 13.91 7.72961 13.5 7.72961Z"
        fill={color}
      />
    </svg>
  );
}

export function Settings({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.1 9.21945C18.29 9.21945 17.55 7.93945 18.45 6.36945C18.97 5.45945 18.66 4.29945 17.75 3.77945L16.02 2.78945C15.23 2.31945 14.21 2.59945 13.74 3.38945L13.63 3.57945C12.73 5.14945 11.25 5.14945 10.34 3.57945L10.23 3.38945C9.78 2.59945 8.76 2.31945 7.97 2.78945L6.24 3.77945C5.33 4.29945 5.02 5.46945 5.54 6.37945C6.45 7.93945 5.71 9.21945 3.9 9.21945C2.86 9.21945 2 10.0694 2 11.1194V12.8794C2 13.9194 2.85 14.7794 3.9 14.7794C5.71 14.7794 6.45 16.0594 5.54 17.6294C5.02 18.5394 5.33 19.6994 6.24 20.2194L7.97 21.2094C8.76 21.6794 9.78 21.3995 10.25 20.6094L10.36 20.4194C11.26 18.8494 12.74 18.8494 13.65 20.4194L13.76 20.6094C14.23 21.3995 15.25 21.6794 16.04 21.2094L17.77 20.2194C18.68 19.6994 18.99 18.5294 18.47 17.6294C17.56 16.0594 18.3 14.7794 20.11 14.7794C21.15 14.7794 22.01 13.9294 22.01 12.8794V11.1194C22 10.0794 21.15 9.21945 20.1 9.21945ZM12 15.2494C10.21 15.2494 8.75 13.7894 8.75 11.9994C8.75 10.2094 10.21 8.74945 12 8.74945C13.79 8.74945 15.25 10.2094 15.25 11.9994C15.25 13.7894 13.79 15.2494 12 15.2494Z"
        fill={color}
      />
    </svg>
  );
}

export function Logout({ color }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
        fill={color}
      />
      <path
        d="M4.55994 11.2498L6.62994 9.17984C6.77994 9.02984 6.84994 8.83984 6.84994 8.64984C6.84994 8.45984 6.77994 8.25984 6.62994 8.11984C6.33994 7.82984 5.85994 7.82984 5.56994 8.11984L2.21994 11.4698C1.92994 11.7598 1.92994 12.2398 2.21994 12.5298L5.56994 15.8798C5.85994 16.1698 6.33994 16.1698 6.62994 15.8798C6.91994 15.5898 6.91994 15.1098 6.62994 14.8198L4.55994 12.7498H8.99994V11.2498H4.55994Z"
        fill={color}
      />
    </svg>
  );
}

export const OrderBagSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={114}
    height={122}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path fill="#1B3554" d="M24.95 91h62v6h-62z" />
    </g>
    <path fill="#E0E5EC" d="M25.45 9h62v39.5h-62z" />
    <path
      fill="#CFD4DC"
      fillRule="evenodd"
      d="M25.45 9v60h-10V32.718l5-7.675L25.45 9ZM86.95 9v60h10V32.718l-5-7.675L86.95 9Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M15.45 32.5h81.5V98a5 5 0 0 1-5 5h-71.5a5 5 0 0 1-5-5V32.5Z"
    />
    <path
      fill="#1B3554"
      fillRule="evenodd"
      d="M39.95 60.274c0-.35.18-.675.49-.836.692-.357 2.014-.938 3.299-.938 1.284 0 2.568.58 3.237.938a.92.92 0 0 1 .474.821c0 .806-.927 1.333-1.685 1.06-.608-.219-1.324-.396-2.045-.396-.736 0-1.471.185-2.095.41-.756.273-1.675-.255-1.675-1.06ZM65.45 60.274c0-.35.18-.675.49-.836.692-.357 2.014-.938 3.299-.938 1.284 0 2.568.58 3.237.938a.92.92 0 0 1 .474.821c0 .806-.927 1.333-1.685 1.06-.608-.219-1.324-.396-2.045-.396-.736 0-1.471.185-2.095.41-.756.273-1.675-.255-1.675-1.06Z"
      clipRule="evenodd"
      opacity={0.5}
    />
    <ellipse
      cx={56.45}
      cy={70.501}
      fill="#1B3554"
      opacity={0.5}
      rx={8}
      ry={3.502}
    />
    <circle cx={37.95} cy={40} r={3} fill="#1B3554" opacity={0.149} />
    <circle cx={74.45} cy={40} r={3} fill="#1B3554" opacity={0.149} />
    <path
      stroke="#5E7085"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M37.95 39.846V21.25C37.95 11.17 46.12 3 56.2 3s18.25 8.17 18.25 18.25v18.596"
    />
    <g filter="url(#b)">
      <circle cx={96.75} cy={89.3} r={8.8} fill="url(#c)" />
    </g>
    <path
      fill="#fff"
      d="M93.604 99.92a68.588 68.588 0 0 0 2.693-2.34 11.14 11.14 0 0 0 1.672-1.972c.446-.68.669-1.349.669-2.006 0-.598-.141-1.068-.423-1.408-.281-.34-.716-.51-1.302-.51-.587 0-1.039.199-1.355.598-.317.387-.481.921-.493 1.602H92.67c.047-1.408.464-2.476 1.25-3.204.798-.727 1.807-1.09 3.027-1.09 1.338 0 2.364.357 3.08 1.073.716.704 1.074 1.637 1.074 2.798 0 .915-.247 1.79-.74 2.623a10.58 10.58 0 0 1-1.69 2.182c-.633.61-1.46 1.35-2.48 2.218h5.191v2.041h-8.694v-1.83l.915-.775Z"
    />
    <defs>
      <filter
        id="a"
        width={110.374}
        height={54.374}
        x={0.763}
        y={66.813}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_1343_4096"
          stdDeviation={12.094}
        />
      </filter>
      <filter
        id="b"
        width={33.6}
        height={33.6}
        x={79.95}
        y={74.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={4} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.415686 0 0 0 0 0.596078 0 0 0 0.3 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1343_4096"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1343_4096"
          result="shape"
        />
      </filter>
      <linearGradient
        id="c"
        x1={96.75}
        x2={79.15}
        y1={71.7}
        y2={89.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8960" />
        <stop offset={1} stopColor="#FF62A5" />
      </linearGradient>
    </defs>
  </svg>
)

export const ArrowLeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="#313133"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 9 1 5m0 0 4-4M1 5h19.2"
    />
  </svg>
)

export const HomeIcon = (props) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={200}
  height={200}
  viewBox="0 0 48 48"
  {...props}
>
  <path fill="#E8EAF6" d="M42 39H6V23L24 6l18 17z" />
  <path fill="#C5CAE9" d="m39 21-5-5V9h5zM6 39h36v5H6z" />
  <path fill="#B71C1C" d="M24 4.3 4 22.9l2 2.2L24 8.4l18 16.7 2-2.2z" />
  <path fill="#D84315" d="M18 28h12v16H18z" />
  <path fill="#01579B" d="M21 17h6v6h-6z" />
  <path
    fill="#FF8A65"
    d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z"
  />
</svg>
)

export const SendIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.6}
      d="M9.04 6.959 6.543 9.457m.357.615.135.233c1.276 2.205 1.915 3.308 2.772 3.22.857-.087 1.26-1.296 2.066-3.712l1.155-3.467c.736-2.208 1.104-3.312.521-3.895-.582-.582-1.686-.214-3.894.522L6.187 4.128c-2.417.806-3.625 1.209-3.712 2.066-.088.857 1.015 1.495 3.22 2.772l.232.135c.306.177.46.265.583.389.123.124.212.277.389.582Z"
    />
  </svg>
)

export const AttachmentIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.438 11.662-9.19 9.19a6.003 6.003 0 1 1-8.49-8.49l9.19-9.19a4.002 4.002 0 0 1 5.66 5.66l-9.2 9.19a2.001 2.001 0 1 1-2.83-2.83l8.49-8.48"
    />
  </svg>
)