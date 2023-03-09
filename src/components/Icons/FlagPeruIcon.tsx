import { SVGProps } from 'react';

const FlagPeruIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' xmlSpace='preserve' {...props} width={24}>
    <path
      style={{
        fill: '#d91023',
      }}
      d='M67.5 128.3h365v243.3h-365z'
    />
    <path
      style={{
        fill: '#fff',
      }}
      d='M189.2 128.3h121.7v243.3H189.2z'
    />
  </svg>
);

export default FlagPeruIcon;
