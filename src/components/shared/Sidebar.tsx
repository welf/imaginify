'use client';

import { Button } from '@/components/ui/button';
import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const liBasicClassName: string = 'sidebar-nav_element group';
const liClassName: string = `${liBasicClassName} text-gray-700`;
const activeLiClassName: string = `${liBasicClassName} bg-purple-gradient text-white`;
const linkClassName: string = 'sidebar-link';
const activeImageClassName: string = 'brightness-200';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
            priority
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`${isActive ? activeLiClassName : liClassName}`}
                  >
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
                  <li
                    key={link.route}
                    className={`${isActive ? activeLiClassName : liClassName}`}
                  >
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
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
