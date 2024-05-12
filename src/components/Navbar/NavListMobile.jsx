const NavlistMobile = (props) => {

    const { data, isMenuOpen } = props;

    return (
        <div className={`nav-mobile ${isMenuOpen ? 'nav-visible' : 'nav-hidden'}`}>
            <ul className='nav-list-col'>
                {data.map((item) => (
                    <li>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavlistMobile;