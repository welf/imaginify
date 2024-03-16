import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} priority />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <Nav />
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
