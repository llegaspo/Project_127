import Link from 'next/link';
import { ReactNode, useState } from 'react';
import LoginModal from '@/components/modals/login';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Image from 'next/image';

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
      <header className="header-bar">
        <nav className="nav-links">
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

      {/* Information Button with direct image */}
      <div className="info-button-wrapper">
        <button 
          onClick={toggleInfo}
          className="info-button"
          aria-label="Information"
        >
          <Image
            src="/icon.png"
            alt="Information"
            width={40}
            height={40}
          />
        </button>
        
        {showInfo && (
          <div className="info-popup">
            <h3>Website Information</h3>
            <p>This is your information content. Add any helpful details here.</p>
            <p>Version 1.0.0</p>
          </div>
        )}
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
        }
        
        .info-button:hover {
          background-color: #6a102e;
          transform: scale(1.1);
        }
        
        .info-popup {
          position: absolute;
          bottom: 60px;
          left: 0;
          background: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          width: 250px;
          color: #333;
        }
        
        .info-popup h3 {
          margin-top: 0;
          color: #84183C;
        }
        
        .info-popup p {
          margin: 8px 0;
        }
      `}</style>
    </>
  );
}