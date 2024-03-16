'use client';

import { navLinks } from '@/constants';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const liBasicClassName: string = 'sidebar-nav_element group';
const liClassName: string = `${liBasicClassName} text-gray-700`;
const activeLiClassName: string = `${liBasicClassName} bg-purple-gradient text-white`;
const linkClassName: string = 'sidebar-link';
const activeImageClassName: string = 'brightness-200';

const Nav = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className="sidebar-nav_elements">
        {navLinks.slice(0, 6).map((link) => {
          const isActive = link.route === pathname;

          return (
            <li key={link.route} className={`${isActive ? activeLiClassName : liClassName}`}>
              <Link href={link.route} className={linkClassName}>
                <Image
                  src={link.icon}
                  alt={`${link.label} icon`}
                  width={24}
                  height={24}
                  className={`${isActive && activeImageClassName}`}
                />
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="sidebar-nav_elements">
        {navLinks.slice(6).map((link) => {
          const isActive = link.route === pathname;

          return (
            <li key={link.route} className={`${isActive ? activeLiClassName : liClassName}`}>
              <Link href={link.route} className={linkClassName}>
                <Image
                  src={link.icon}
                  alt={`${link.label} icon`}
                  width={24}
                  height={24}
                  className={`${isActive && activeImageClassName}`}
                />
                {link.label}
              </Link>
            </li>
          );
        })}
        <li className="flex-center cursor-pointer gap-2 p-4">
          <UserButton afterSignOutUrl="/" showName />
        </li>
      </ul>
    </>
  );
};

export default Nav;
