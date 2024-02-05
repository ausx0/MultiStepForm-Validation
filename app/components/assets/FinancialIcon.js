import React from "react";

const FinancialIcon = ({ color }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 22H3"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M20.1012 22.0001V15.2501C20.1012 14.5046 19.4968 13.9001 18.7512 13.9001H16.0512C15.3056 13.9001 14.7012 14.5046 14.7012 15.2501V22.0001"
      stroke={color}
      stroke-width="1.5"
    />
    <path
      d="M14.6988 22V6.7C14.6988 5.42721 14.6988 4.79081 14.3034 4.39541C13.908 4 13.2716 4 11.9988 4C10.726 4 10.0896 4 9.69423 4.39541C9.29883 4.79081 9.29883 5.42721 9.29883 6.7V22"
      stroke={color}
      stroke-width="1.5"
    />
    <path
      d="M9.30039 22.0001V10.7501C9.30039 10.0046 8.69598 9.40015 7.95039 9.40015H5.25039C4.50481 9.40015 3.90039 10.0046 3.90039 10.7501V22.0001"
      stroke={color}
      stroke-width="1.5"
    />
  </svg>
);

export default FinancialIcon;
