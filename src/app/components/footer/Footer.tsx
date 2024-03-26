import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>

      <div className='footer_left'>
        <img src='/icons/footer_cup_ico.png' />
        <p><b>Delícias à Mesa</b></p>
      </div>

      <div className="footer_right">
        <p>Redes sociais:</p>
        <ul>
            <li><img src='/icons/youtube_ico.png' /></li>
            <li><img src='/icons/twitter_ico.png' /></li>
            <li><img src='/icons/pinterest_ico.png' /></li>
            <li><img src='/icons/browser_ico.png' /></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer