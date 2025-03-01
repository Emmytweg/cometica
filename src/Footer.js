import React from 'react';
import Logo from './Screenshot_2025-02-10_055627-removebg-preview.png';
import LogoTwo from './image-removebg-preview.png';
import { Link } from 'react-router-dom';
import { 
  IconBrandXFilled, IconBrandYoutubeFilled, IconBrandPinterestFilled, 
  IconBrandLinkedinFilled, IconBrandTiktokFilled, IconBrandInstagramFilled 
} from '@tabler/icons-react';
import googlePay from './google pay.png';
import mastercard from './mastercard.png';
import paypal from './paypal.png';
import visa from './visa.png';
import stripe from './stripe-removebg-preview.png';
import applecard from './apple-pay-card5428-removebg-preview.png';
import applecardWhite from './applewhite.svg';

const Footer = ({ darkMode, navProductsArray }) => {

  return (
    <footer className='flex flex-col justify-between items-start p-6 gap-9 overflow-x-hidden'>
      <div className='flex flex-col gap-9 lg:gap-0 lg:flex lg:flex-row'>
        <div>
          <div className='flex flex-col item-center justify-center gap-3 w-1/2'>
            <img src={darkMode ? Logo : LogoTwo} alt='' className='w-44' />
            <div className='flex text-center justify-center items-center space-x-10 lg:w-1/2 lg:space-x-5 lg:items-start w-96'>
              <IconBrandXFilled />
              <IconBrandYoutubeFilled />
              <IconBrandInstagramFilled />
              <IconBrandPinterestFilled />
              <IconBrandLinkedinFilled />
              <IconBrandTiktokFilled />
            </div>
            <p className={`text-[15px] font-extrabold w-[90vw] lg:w-1/2 ${darkMode ? 'text-white' : 'text-black'}`}>
              Welcome to your fashion destination. Discover the latest trends, find perfect pieces for your wardrobe, and enjoy seamless online shopping.
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-between lg:items-center gap-20'>
          <div className='flex flex-col lg:flex-row justify-between gap-10 text-[14px]'>
            <div className='flex flex-col justify-between items-start gap-5'>
              <Link className='first:font-extrabold'>Product</Link>
              <Link to="/">Home</Link>
           
                <Link to='/advisable'>
                  Advisable
                </Link>
             
              <Link to="/promotions">Promotions</Link>
            </div>
            <div className='flex flex-col justify-between items-start gap-5'>
              <Link className='first:font-extrabold'>Company</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className='flex flex-col justify-between items-start gap-5'>
              <Link className='first:font-extrabold'>Legal</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/404">404</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse gap-4 lg:flex-row lg:justify-between items-start lg:w-full border-t p-3'>
        <p className='text-[14px]'>© 2024 TWEGCODE. All rights reserved.</p>
        <div className='flex items-center lg:justify-between space-x-9 lg:space-x-0'>
          <img src={darkMode ? applecardWhite : applecard} className='w-[40px]' />
          <img src={mastercard} className='w-[40px]' />
          <img src={googlePay} className='w-[40px]' />
          <img src={stripe} className='w-[40px]' />
          <img src={paypal} className='w-[40px]' />
          <img src={visa} className='w-[40px]' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
