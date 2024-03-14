'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({
  navLinks,
  liClassName,
  activeLiClassName,
  linkClassName,
  activeImageClassName = '',
  onClick,
}: {
  navLinks: { label: string; route: string; icon: string }[];
  liClassName: string;
  activeLiClassName: string;
  linkClassName: string;
  activeImageClassName?: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = link.route === pathname;

        return (
          <li
            key={link.route}
            className={`${isActive ? activeLiClassName : liClassName}`}
          >
            <Link href={link.route} className={linkClassName} onClick={onClick}>
              <Image
                src={link.icon}
                alt={`${link.label} logo`}
                width={24}
                height={24}
                className={`${isActive && activeImageClassName}`}
              />
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
