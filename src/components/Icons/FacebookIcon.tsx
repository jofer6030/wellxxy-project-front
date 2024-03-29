import { SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg {...props} viewBox='0 0 27 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25.0651 24C25.8575 24 26.5 23.4069 26.5 22.6754V1.32457C26.5 0.592862 25.8574 0 25.0651 0H1.93496C1.14227 0 0.5 0.592952 0.5 1.32457V22.6753C0.5 23.4069 1.14227 23.9999 1.93496 23.9999H25.0651V24ZM18.4396 24V14.7059H21.8192L22.3252 11.0838H18.4395V8.77127C18.4395 7.72259 18.7549 7.00797 20.3841 7.00797L22.462 7.00707V3.7675C22.1026 3.72344 20.8691 3.6248 19.4342 3.6248C16.4383 3.6248 14.3873 5.31274 14.3873 8.41266V11.0838H10.9991V14.7059H14.3873V23.9999H18.4396V24Z'
          fill='#0F2E68'
        />
      </svg>
    </div>
  );
};

export default FacebookIcon;
