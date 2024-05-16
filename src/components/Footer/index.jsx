import './style.css';
import LogoChikito2 from '../../assets/LogoChikito2.png'


const Footer = () => {
    return (
        <section id="footer" className='footer-section'>
            <div className="content-footer">
                <div className='footer-layout-item'>
                    <img src={LogoChikito2} alt="LogoChikito2" />
                    <p className='text-description'>Chicken Bar and Steak. <br />
                        Surganya para pencinta ayam!</p>
                </div>
                <div className='footer-layout-item'>
                    <p className='footer-text-title'>Hours</p>
                    <p className='footer-text-description'>Friday - Wednesday</p>
                    <p className='footer-text-description'>12.00 - 21.00</p>
                </div>
                <div className='footer-layout-item'>
                    <p className='footer-text-title'>Contact us</p>
                    <a className='footer-text-description'>Admin Ngentak</a>
                    <a className='footer-text-description'>Admin Nakula Sadewa</a>
                </div>
                <div className='footer-layout-item'>
                    <p className='footer-text-title'>Quick links</p>
                    <a className='footer-text-description'>About us</a>
                    <a className='footer-text-description'>Locations</a>
                    <a className='footer-text-description'>Menu</a>
                    <a className='footer-text-description'>Reviews</a>
                </div>  
                <a href="#home" class=''><i className='bx bx-chevron-up back-to-top'></i></a>
            </div>
        </section>
    )
}

export default Footer;