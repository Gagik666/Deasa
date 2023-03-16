import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const PlaySVGIcone = props => {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm3.224-7.983a1.171 1.171 0 000-2.034l-4.442-2.539a1.024 1.024 0 00-1.532.89v5.333c0 .786.85 1.278 1.532.889l4.442-2.539z"
        fill="#323232"
      />
      <Path
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M10.9 8.8l-.242-.138a.774.774 0 00-1.158.671v5.334c0 .594.642.966 1.158.671l.242-.138 4.2-2.4a.921.921 0 000-1.6l-4.2-2.4z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
