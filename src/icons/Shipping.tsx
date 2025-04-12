import React from 'react';

const ShippingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        aria-hidden="true"
        fill="currentColor"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M2.25 5.5A.75.75 0 0 1 3 4.75h10.5a1.25 1.25 0 0 1 1.225 1h2.966a1.25 1.25 0 0 1 1.118.691l1.655 3.31H20.5A1.25 1.25 0 0 1 21.75 11v5a1.25 1.25 0 0 1-1.25 1.25h-.854a2.751 2.751 0 0 1-5.292 0h-3.207a2.751 2.751 0 0 1-5.293 0H5A1.25 1.25 0 0 1 3.75 16v-5.5a.75.75 0 0 1 1.5 0v5.25h.604a2.751 2.751 0 0 1 5.292 0h2.104v-9.5H3A.75.75 0 0 1 2.25 5.5m18 10.25h-.604a2.751 2.751 0 0 0-4.896-.832V11.25h5.5v4.5m-5.5-6v-2.5h2.787l1.25 2.5H14.75m-7.5 6.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M17 15.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
            clipRule="evenodd"
        ></path>
        <path d="M3.5 7.25a.75.75 0 0 0 0 1.5H7a.75.75 0 0 0 0-1.5H3.5"></path>
    </svg>
);

export default ShippingIcon;
