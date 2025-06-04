import Link from 'next/link';
import { ReactNode } from 'react';
import InfoIcon from './info-icon';

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
      <header className="header-bar flex items-center justify-between px-4 py-2 relative">
        {/* Left side: Info Icon */}
        <InfoIcon tooltip="Info" onClick={openModal} />

        {/* Center or Right side: Nav links */}
        <nav className="nav-links flex gap-4 mx-auto">
          <Link href="/" className={activeLink === 'overview' ? 'active' : ''}>Overview</Link>
          <Link href="/calendar" className={activeLink === 'calendar' ? 'active' : ''}>Calendar</Link>
          <Link href="/events" className={activeLink === 'events' ? 'active' : ''}>Events</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
