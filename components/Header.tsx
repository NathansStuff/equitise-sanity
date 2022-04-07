import React, { useState, ReactElement } from 'react';
import { Logo } from './Logo';
import Link from 'next/link';

function Header() {
  const [showNav, setShowNav] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 z-10`;

  const Links = {
    Invest: [
      'All Deals',
      'Equity Crowdfunder',
      'IPO',
      'Wholesale',
      'Why Invest',
    ],
    Raise: ['How to Raise Capital', 'Why Partner With Us', 'Start Raise'],
    About: ['Our Story', 'Meet the Team'],
    Learn: ['Help Centre', 'Blog', 'Newsfeed'],
  };

  function setNav() {
    setShowNav(!showNav);
  }
  return (
    <header className='fixed top-0 left-0 z-10 w-full bg-primary pt-5 pb-5 text-white'>
      <div className='mx-auto flex max-w-7xl justify-between pl-5 pr-5'>
        <Link href='/'>
          <Logo className='z-10 w-44 cursor-pointer object-contain' />
        </Link>
        {/* {Hamburger Menu} */}
        <button
          className='group flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-black lg:hidden'
          onClick={() => setNav()}
        >
          {/* {Expanding Circle} */}

          {/* {Hamburger Item} */}
          <div
            className={`${genericHamburgerLine} ${
              showNav
                ? 'translate-y-3 rotate-45 opacity-50 group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100 '
            }`}
          />
          {/* {Hamburger Item} */}
          <div
            className={`${genericHamburgerLine} ${
              showNav ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
            }`}
          />
          {/* {Hamburger Item} */}
          <div
            className={`${genericHamburgerLine} ${
              showNav
                ? '-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100'
            }`}
          />
          {/* {Circle That Covers Screen} */}
          <div className={` ${showNav ? 'circle-div bg-primary' : ''}`} />
        </button>
        {/* {Large Screen Nav} */}
        <div className='hidden items-center space-x-5 text-lg lg:inline-flex'>
          {' '}
          {Object.entries(Links).map(([k, v]) => (
            <LargeNavigationItems header={k} subLinks={v} />
          ))}
        </div>

        <div className='hidden items-center space-x-5 lg:inline-flex'>
          <h1 className='rounded-lg border border-white py-2 px-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-secondary'>
            Login
          </h1>
          <h1 className='rounded-lg bg-secondary py-2 px-4 transition duration-300 hover:-translate-y-1 hover:bg-blue-700'>
            Register
          </h1>
        </div>
      </div>
      {/* {Small Screen Navigation Popup} */}
      <div
        className={
          showNav
            ? 'nav-links flex w-full flex-col space-y-10 pt-10'
            : 'hidden h-0 w-0'
        }
      >
        <div className={`z-10 ${showNav ? 'nav-items' : ''}`}>
          {Object.entries(Links).map(([k, v]) => (
            <NavigationItems header={k} subLinks={v} />
          ))}
          <div className='flex justify-center space-x-5 pt-5'>
            <h1 className='flex w-32 justify-center rounded-lg border border-white py-2 px-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-secondary'>
              Login
            </h1>
            <h1 className='flex w-32 justify-center rounded-lg bg-secondary py-2 px-4 transition duration-300 hover:-translate-y-1 hover:bg-blue-700'>
              Register
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

type Links = {
  header: string;
  subLinks: string[];
};

function NavigationItems({ header, subLinks }: Links) {
  let subs: ReactElement[] = [];

  // Get all the sublinks into an array
  subLinks.map((subLink) =>
    subs.push(
      <div className='nav-links max-h-0 overflow-hidden bg-secondary transition-all duration-500 hover:underline peer-checked:max-h-40'>
        <div className='p-4 text-lg text-white '>
          <p>{subLink}</p>
        </div>
      </div>
    )
  );
  return (
    <div className='relative pt-5 pb-5'>
      {/* Invisible checkbox for stateless dynamic change */}
      <input
        type='checkbox'
        className='peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer opacity-0 '
      />
      {/* Header Link component */}
      <div className='flex h-12 w-full items-center border-b-[0.1px] border-gray-200 pb-5 pl-5  '>
        <h1 className='text-lg text-white '>{header}</h1>
      </div>
      {/* {Arrow Icon} */}
      <div className='absolute top-3 right-3 rotate-0 text-white transition-transform duration-500 peer-checked:rotate-180 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 '
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
      {/* {Drop Down} */}
      {subs}
    </div>
  );
}

function LargeNavigationItems({ header, subLinks }: Links) {
  let subs: ReactElement[] = [];

  // Get all the sublinks into an array
  subLinks.map((subLink) =>
    subs.push(
      <div className='hover:underline'>
        <h1>{subLink}</h1>
      </div>
    )
  );
  return (
    <div className='relative'>
      <div className='group'>
        {/* {Triangle} */}
        <div className='absolute top-7 hidden w-16  overflow-hidden group-hover:inline-block'>
          <div className=' h-3 w-3 origin-bottom-left rotate-45 transform bg-red-700'></div>
        </div>
        <h1 className=''>{header}</h1>
        <div className='absolute right-[-190px] top-[40px] hidden w-[300px] cursor-pointer flex-col space-y-5 rounded-md bg-red-700 p-5 group-hover:flex'>
          {subs}
        </div>
      </div>{' '}
    </div>
  );
}
