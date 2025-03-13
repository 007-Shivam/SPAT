import React from 'react'
import './FooterComponent.css'

export default function Footer() {
  return (
    <div className="mainFooter">
      <footer className='footer-div'>
        <div className="footerContainer">
          <div className="p-5 text-center bg-black footerBottom">
            <p className='text-white'>Copyright &copy;2025 Designed by <span className="my-name">Shivam Bhosle</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}