import './style.css'
import React from 'react'
import LogoChikito from '../../assets/LogoChikito.png'
import NavlistDesk from './NavlistDesk'
import NavlistMobile from './NavListMobile'
import TopBar from './TopBar'
import { useState } from 'react'


const Navbar = () => {

    const linkList = {
        Home: "#home",
        Menus: "#our-menus",
        Promo: "#promo",
        Review: "#people-review",
        Location: "#location"
    };
    const contactUs = "Contact us";

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <header id='navbar' className='navbar'>
                <nav className='nav-layout'>
                    <img className='logo' src={LogoChikito} alt='logo' />
                    <NavlistDesk linkList={linkList} contact={contactUs} />
                    <TopBar contact={contactUs} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                </nav>
            </header>
            <NavlistMobile linkList={linkList} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div >
    )
}

export default Navbar;