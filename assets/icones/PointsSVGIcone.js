import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const PointsSVGIcone = props => {
  return (
    <Svg
      fill="#fff"
      width={28}
      height={28}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M0 0h48v48H0z" fill="none" />
      <Path d="M8.083 44h4c2.2 0 4-1.8 4-4v-4c0-2.2-1.8-4-4-4h-4c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4zM22.083 44h4c2.2 0 4-1.8 4-4V26c0-2.2-1.8-4-4-4h-4c-2.2 0-4 1.8-4 4v14c0 2.2 1.8 4 4 4zM36.083 44h4c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4h-4c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4z" />
    </Svg>
  );
};
