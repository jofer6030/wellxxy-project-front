import { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18 18L2 2M18 2L2 18'
        stroke='#282828'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CloseIcon;
