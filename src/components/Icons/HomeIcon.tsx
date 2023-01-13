import { SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill='#282828'
      {...props}
    >
      <g clipPath='url(#clip0_4119_3147)'>
        <path d='M22.4733 11.5259L12.4733 1.52589C12.3484 1.40173 12.1795 1.33203 12.0034 1.33203C11.8272 1.33203 11.6583 1.40173 11.5334 1.52589L1.53335 11.5259C1.42413 11.6534 1.36706 11.8175 1.37354 11.9853C1.38002 12.153 1.44958 12.3122 1.56831 12.4309C1.68704 12.5497 1.8462 12.6192 2.01398 12.6257C2.18177 12.6322 2.34582 12.5751 2.47335 12.4659L12 2.93923L21.5267 12.4726C21.6542 12.5818 21.8183 12.6388 21.9861 12.6324C22.1538 12.6259 22.313 12.5563 22.4317 12.4376C22.5505 12.3189 22.62 12.1597 22.6265 11.9919C22.633 11.8241 22.5759 11.6601 22.4667 11.5326L22.4733 11.5259Z' />
        <path d='M18.6667 21.3332H15.3333V14.6665H8.66667V21.3332H5.33333V11.9998L4 13.3332V21.3332C4 21.6868 4.14048 22.0259 4.39052 22.276C4.64057 22.526 4.97971 22.6665 5.33333 22.6665H10V15.9998H14V22.6665H18.6667C19.0203 22.6665 19.3594 22.526 19.6095 22.276C19.8595 22.0259 20 21.6868 20 21.3332V13.1732L18.6667 11.8398V21.3332Z' />
      </g>
      <defs>
        <clipPath id='clip0_4119_3147'>
          <rect width='24' height='24' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;