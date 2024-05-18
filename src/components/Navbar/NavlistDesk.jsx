const NavlistDesk = (props) => {

    const { linkList, contact } = props;
    const keys = Object.keys(linkList);
    const values = Object.values(linkList);

    return (
        <div className='nav-desktop'>
            <ul className='nav-list'>
                {keys.map((key, index) => (
                    <li key={index}>
                        <a className="nav-list-link" href={values[index]}>{key}</a>
                    </li>
                ))}
                <a href='#footer' className='btn-primary1'>{contact}</a>
            </ul>
        </div>
    )
}

export default NavlistDesk;