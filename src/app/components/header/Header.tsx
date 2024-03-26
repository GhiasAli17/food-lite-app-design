import React from 'react'
import './header.css'
import Link from 'next/link'
const Header = () => {
  return (
    <header>
        <div className='top_header'></div>
  
        <div className='bottom_header'>
            <div className='header_left'>
             <img src='/icons/Ico.png' className='header_ico' width={28} height={26}/>
             <span>Delícias à Mesa</span>
            </div>
            <div>
              <nav>
                <ul>
                    <li><b><Link href="/">Home</Link></b></li>
                    <li><b><Link href="/">Recent</Link></b></li>
                    <li><b><Link href="/">Editor Choice</Link></b></li>
                </ul>
              </nav>
            </div>
            <div className='right_header'>
                <svg className='search_ico' width="17.6" height="17.6" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Search Icon">
                                <path
                                    d="M15 15L11.8525 11.8525M13.5 7.875C13.5 4.7684 10.9816 2.25 7.875 2.25C4.7684 2.25 2.25 4.7684 2.25 7.875C2.25 10.9816 4.7684 13.5 7.875 13.5C10.9816 13.5 13.5 10.9816 13.5 7.875Z"
                                    stroke="#6d6d6d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                <input type='text' placeholder='Search' className='search_input' />
            </div>

        </div>
    
    </header>
  )
}

export default Header