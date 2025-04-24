import React from 'react'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <div className='pt-8'>
      <div className='flex flex-wrap justify-between gap-12 md:gap-6 bg-[#D9D9D9] px-6 py-8 md:px-12'>
        {/* Logo & Company Info */}
        <div className='w-full sm:w-[45%] md:w-[22%] flex flex-col items-center sm:items-start text-center sm:text-left'>
          <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
          <img src={assets.app_logo} alt="App Logo" className="mt-6 h-8 md:h-9" />
          <p className="text-secondary text-sm mt-4 max-w-xs">
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>

        {/* Newsletter & Social Icons */}
        <div className='w-full sm:w-[45%] md:w-[30%]'>
          <p className='text-lg text-secondary font-bold mb-4'>
            Get Exclusive Deals in your Inbox
          </p>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3'>
            <input 
              type="text" 
              className='bg-white rounded-full border text-sm border-gray-300 h-10 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent' 
              placeholder='youremail@gmail.com' 
            />
            <button className='text-white font-semibold bg-primary rounded-full px-6 h-10 hover:bg-opacity-90 transition-all duration-200'>
              Subscribe
            </button>
          </div>
          <p className='mt-3 text-sm text-gray-500'>
            We won't spam, read our email policy
          </p>
          <div className='flex items-center gap-3 mt-4 flex-wrap'>
            <img src={assets.fb} alt="Facebook" className="w-9 h-9" />
            <img src={assets.insta} alt="Instagram" className="w-9 h-9" />
            <img src={assets.snap} alt="Snapchat" className="w-9 h-9" />
            <img src={assets.tiktok} alt="TikTok" className="w-9 h-9" />
          </div>
        </div>

        {/* Legal Pages */}
        <div className='w-full sm:w-[45%] md:w-[20%]'>
          <p className='text-lg font-bold text-secondary'>Legal Pages</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Modern Slavery Statement</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div className='w-full sm:w-[45%] md:w-[20%]'>
          <p className='text-lg font-bold text-secondary'>Important Links</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><a href="#">Get help</a></li>
            <li><a href="#">Add your restaurant</a></li>
            <li><a href="#">Sign up to deliver</a></li>
            <li><a href="#">Create a business account</a></li>
          </ul>
        </div>
      </div>

      <hr className='border-gray-300' />

      {/* Bottom Bar */}
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-4 px-4 md:px-12 py-5 bg-secondary text-white text-sm font-light'>
        <p className='text-center md:text-left'>
          Order.uk &copy; {new Date().getFullYear()}, All Rights Reserved.
        </p>
        <ul className='flex flex-wrap justify-center md:justify-end gap-4'>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Do not sell or share my personal information</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
