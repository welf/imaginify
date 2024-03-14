'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const liClassName: string = 'p-18 flex whitespace-nowrap text-dark-700';
const activeLiClassName: string = `${liClassName} gradient-text`;
const linkClassName: string = 'sidebar-link';

const cssProps = {
  liClassName,
  activeLiClassName,
  linkClassName,
};

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:p-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <Image
                src="/assets/images/logo-text.svg"
                alt="logo"
                width={152}
                height={23}
              />
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive ? activeLiClassName : liClassName
                      }`}
                    >
                      <SheetClose asChild>
                        <Link href={link.route} className={linkClassName}>
                          <Image
                            src={link.icon}
                            alt={`${link.label} icon`}
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};
export default MobileNav;
