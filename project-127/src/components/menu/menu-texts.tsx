import Link from 'next/link';
import { ReactNode, useState } from 'react';
import LoginModal from '@/components/modals/login';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
      <main>{children}</main>
    </>
  );
}