'use client';
import { useState, useEffect } from 'react';
import LoginModal from '@/components/modals/login';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@/components/menu/menu-texts';
import Link from 'next/link';
import Image from 'next/image';

const buttonStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  padding: 0,
  boxSizing: 'border-box:',
  width: '100%'
}
export default function Login(){
  const [ open, setOpen ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ login, setLogin ] = useState(false);
  const [ error, setError ] = useState('');

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

  const images = [
  '/scifed.jpg',
  '/set.jpg',
  '/kapehan.jpg',
];

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  }, 5000);
  return () => clearInterval(interval);
}, []);

const prevSlide = () => {
  setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
};

const nextSlide = () => {
  setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
};

  return(
    <>
    <header className="header-bar">
    <Menu className="nav-links" activeLink = "overview">
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
    <LoginModal
      open={open}
      onClose={closeModal}>
    </LoginModal>
    </Menu>
    </header>

  <div className="carousel-container">
    <div
      className="carousel-image-wrapper"
      style={{
        position: 'relative',
        width: '100vw',
        height: '50vh',
      }}
    >
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        fill
        style={{ objectFit: 'cover' }}
        priority={true}
      />

      {/* Arrows placed inside image wrapper so they're on top */}
      <div className="carousel-arrow left" onClick={prevSlide}>&#10094;</div>
      <div className="carousel-arrow right" onClick={nextSlide}>&#10095;</div>
    </div>
</div>
    </>
  )

}
