import React from 'react';
import { colorValues } from '../../../helpers/colors';

const IcWarning = ({
  color,
  ...rest
}: { color?: string } & React.SVGProps<SVGSVGElement>) => (
  <svg
    {...rest}
    id='warning-svg'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <g fill='none' fillRule='evenodd'>
      <path d='M0 0h24v24H0z' />
      <path
        fill={color || colorValues.white}
        fillRule='nonzero'
        d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'
      />
    </g>
  </svg>
);

export default IcWarning;
