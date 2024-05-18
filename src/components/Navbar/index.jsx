import './style.css'
import React, { useEffect } from 'react'
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
        Reviews: "#people-review",
        Location: "#location"
    };
    const contactUs = "Contact us";

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    }

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    return (
        <div>
            <header id='navbar' className='navbar'>
                <nav className='nav-layout'>
                    <a href="#home"><img className='logo' src={LogoChikito} alt='logo' /></a>
                    <NavlistDesk linkList={linkList} contact={contactUs} />
                    <TopBar contact={contactUs} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                </nav>
            </header>
            <NavlistMobile linkList={linkList} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <a href="#home" class=''><i className={`bx bx-chevron-up back-to-top ${isVisible ? 'back-to-top-show' : ''}`}></i></a>
        </div >
    )
}

export default Navbar;