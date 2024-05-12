import './style.css'
import LogoChikito from '../../assets/LogoChikito.png'
import NavlistDesk from './NavlistDesk'
import NavlistMobile from './NavListMobile'
import TopBar from './TopBar'
import { useState } from 'react'


const Navbar = () => {

    const linkList = ["Home", "About", "Location", "Promo", "Reviews"];
    const contactUs = "Contact us";

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <header className='navbar'>
                <nav className='nav-layout'>
                    <img className='logo' src={LogoChikito} alt='logo' />
                    <NavlistDesk data={linkList} contact={contactUs} />
                    <TopBar contact={contactUs} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                </nav>
            </header>
            <NavlistMobile data={linkList} isMenuOpen={isMenuOpen} />
        </div >
    )
}

export default Navbar;