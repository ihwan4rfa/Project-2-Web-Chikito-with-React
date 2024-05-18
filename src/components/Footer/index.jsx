import './style.css';
import LogoChikito2 from '../../assets/LogoChikito2.png'
import SocialMediaList from './SocialMediaList';


const Footer = () => {

    const sosmedList = ["bx bxl-instagram", "bx bxl-facebook", "bx bxl-twitter", "bx bxl-tiktok"];

    return (
        <section id="footer" className='footer-section'>
            <div className="content-footer">
                <div className='footer-layout-item'>
                    <img src={LogoChikito2} alt="LogoChikito2" />
                    <p className='footer-text-description'>Chicken Bar and Steak. <br />
                        Surganya pencinta ayam!</p>
                </div>
                <div className='footer-layout-item'>
                    <p className='footer-text-title'>Contact us</p>
                    <a target='_blank' href='https://api.whatsapp.com/send/?phone=6282135695437' className='footer-text-description'>Admin Ngentak</a>
                    <a target='_blank' href='https://api.whatsapp.com/send/?phone=6282137992728' className='footer-text-description'>Admin Nakula Sadewa</a>
                    <SocialMediaList icon={sosmedList} />
                </div>
                <div className='footer-layout-item'>
                    <p className='footer-text-title'>Hours</p>
                    <p className='footer-text-description'>Friday - Wednesday</p>
                    <p className='footer-text-description'>12.00 - 21.00</p>
                </div>
                <div className='footer-layout-item'>
                    <p className='footer-text-title'>Quick links</p>
                    <div className='quick-links'>
                        <a href='#our-menus' className='footer-text-description'>Menus</a>
                        <p className='footer-text-description vertikal-line'>|</p>
                        <a href='#people-review' className='footer-text-description'>Reviews</a>
                        <p className='footer-text-description vertikal-line'>|</p>
                        <a href='#location' className='footer-text-description'>Location</a>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='copyright'>
                <p>© Chikito<span>|</span>All rights reserved<span>|</span><a target='_blank' href="https://github.com/ihwan4rfa">ihwan4rfa</a></p>
            </div>
        </section>
    )
}

export default Footer;