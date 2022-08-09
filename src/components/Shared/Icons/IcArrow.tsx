import React from 'react';
import { colorValues } from '../../../helpers/colors';

const IcArrow = ({
  color,
  ...rest
}: { color?: string } & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='36'
    height='36'
    viewBox='0 0 36 36'
    {...rest}
  >
    <g fill='none' fillRule='evenodd'>
      <path
        fill={color || colorValues.black}
        fillRule='nonzero'
        d='M10.5 15L18 22.5 25.5 15z'
      />
      <path d='M0 0L36 0 36 36 0 36z' />
    </g>
  </svg>
);

export default IcArrow;
