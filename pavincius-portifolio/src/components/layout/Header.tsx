import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import ThemeChanger from "../ThemeToggle";

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
];

export default function Header() {

  return (
    <header className='sticky backdrop-blur-sm top-0 z-50 bg-neutral-100  dark:bg-slate-800 shadow-md'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='hover:text-gray-600'>
          PAV
        </UnstyledLink>
        <nav>
          <ul className='flex items-right justify-between space-x-4'>
            {links.map(({ path, label }) => (
              <li key={`${path}${label}`}>
                <UnstyledLink href={path} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeChanger/>
      </div>
    </header>
  );
}
