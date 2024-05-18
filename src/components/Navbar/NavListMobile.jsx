const NavlistMobile = (props) => {

    const { linkList, isMenuOpen, toggleMenu } = props;
    const keys = Object.keys(linkList);
    const values = Object.values(linkList);

    return (
        <div className={`nav-mobile ${isMenuOpen ? 'nav-visible' : 'nav-hidden'}`}>
            <ul className='nav-list-col'>
                {keys.map((key, index) => (
                    <li key={index}>
                        <a className="nav-list-link" onClick={toggleMenu} href={values[index]}>{key}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavlistMobile;