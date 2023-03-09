import { SVGProps } from 'react';

const ConfigurationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width='24' height='24' viewBox='0 0 18 18' fill='#282828' xmlns='http://www.w3.org/2000/svg'>
      <path d='M18 10.2857V7.71429H15.2987C15.1329 6.90946 14.8133 6.14418 14.3576 5.46043L16.2733 3.54471L14.4553 1.72671L12.5396 3.64243C11.8558 3.18666 11.0905 2.8671 10.2857 2.70129V0H7.71429V2.70129C6.90946 2.8671 6.14418 3.18666 5.46043 3.64243L3.54471 1.72671L1.72671 3.54471L3.64243 5.46043C3.18666 6.14418 2.8671 6.90946 2.70129 7.71429H0V10.2857H2.70129C2.8671 11.0905 3.18666 11.8558 3.64243 12.5396L1.72671 14.4553L3.54471 16.2733L5.46043 14.3576C6.14418 14.8133 6.90946 15.1329 7.71429 15.2987V18H10.2857V15.2987C11.0905 15.1329 11.8558 14.8133 12.5396 14.3576L14.4553 16.2733L16.2733 14.4553L14.3576 12.5396C14.8133 11.8558 15.1329 11.0905 15.2987 10.2857H18ZM9 12.8571C8.23713 12.8571 7.49139 12.6309 6.85709 12.2071C6.22278 11.7833 5.7284 11.1809 5.43646 10.4761C5.14453 9.77126 5.06814 8.99572 5.21697 8.24751C5.3658 7.4993 5.73316 6.81202 6.27259 6.27259C6.81202 5.73316 7.4993 5.3658 8.24751 5.21697C8.99572 5.06814 9.77126 5.14453 10.4761 5.43646C11.1809 5.7284 11.7833 6.22278 12.2071 6.85709C12.6309 7.49139 12.8571 8.23713 12.8571 9C12.8561 10.0227 12.4494 11.0032 11.7263 11.7263C11.0032 12.4494 10.0227 12.8561 9 12.8571Z' />
    </svg>
  );
};

export default ConfigurationIcon;
