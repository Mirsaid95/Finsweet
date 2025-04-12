import React from "react";

const Icon3 = () => {
  return (
    <div>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width={24} height={24} fill="url(#pattern0_1_1951)" />
        <defs>
          <pattern
            id="pattern0_1_1951"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#image0_1_1951" transform="scale(0.00195312)" />
          </pattern>
          <image
            id="image0_1_1951"
            width={512}
            height={512}
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default Icon3;
