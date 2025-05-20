import Link from 'next/link';
import { ReactNode } from 'react';

export default function Menu({
  children,
  openModal,
  activeLink
}: {
  children: ReactNode;
  openModal: () => void;
  activeLink: string;
}) {
  return (
    <>
      <header className="header-bar">
        <nav className="nav-links">
          <Link href="/overview" className={activeLink === 'overview' ? 'active' : ''}>Overview</Link>
          <Link href="/calendar" className={activeLink === 'calendar' ? 'active' : ''}>Calendar</Link>
          <Link href="/events" className={activeLink === 'events' ? 'active' : ''}>Events</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
