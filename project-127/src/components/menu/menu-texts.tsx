import Link from 'next/link';
import { ReactNode, useState } from 'react';
import LoginModal from '@/components/modals/login';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Image from 'next/image';
import InfoIcon from './info-icon';

export default function Menu({
  children,
  activeLink
}: {
  children: ReactNode;
  activeLink: string;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [error, setError] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleLoginClick = () => {
    if(!email || !password){
      setError('Please enter both email and password');
    }

    if(email === 'admin@legaspo.com' && password === 'legaspo123'){
      setLogin(true);
      setError('');
      setOpen(false);
    }
    else{
      setError('Invalid credentials');
    }
  }

  const openModal = () => setOpen(true);

  const closeModal = () => {
    setOpen(false);
    setEmail('');
    setPassword('');
    setError('');
  }

  const toggleInfo = () => setShowInfo(!showInfo);

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 0,
    boxSizing: 'border-box',
    marginTop: '-17px',
    width: '100%',
    marginLeft: 'auto'
  }

  return (
    <>
      <header className="header-bar flex items-center justify-between px-4 py-2 relative">
        {/* Center or Right side: Nav links */}
        <nav className="nav-links flex gap-4 mx-auto">
          <Link href="/" className={activeLink === 'overview' ? 'active' : ''}>Overview</Link>
          <Link href="/calendar" className={activeLink === 'calendar' ? 'active' : ''}>Calendar</Link>
          <Link href="/events" className={activeLink === 'events' ? 'active' : ''}>Events</Link>
          <Box sx={buttonStyle}>
            <Button onClick={openModal} variant='outlined'
              sx={{
                color:'#FFFFFF',
                borderColor: '#FFFFFF',
                whiteSpace: 'nowrap',
                '&:hover': {
                  borderColor: '#660000',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#800000'
                },
                mt: 2,
                mr: 3
              }}>Log in</Button>
          </Box>
        </nav>
        <LoginModal 
          open={open} 
          onClose={closeModal}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
          handleLoginClick={handleLoginClick}
        />
      </header>
      
      <main className="main-content">
        {children}
      </main>

      {/* Information Button linking to another page */}
      <div className="info-button-wrapper">
        <Link href="/fb-pages" passHref>
            <Image
              src="/icon.png"
              alt="Information"
              width={40}
              height={40}
            />
        </Link>
      </div>

      <style jsx>{`
        .info-button-wrapper {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 1000;
        }
        
        .info-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          background: transparent;
        }
        
        .info-button:hover {
          background-color: #6a102e;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}