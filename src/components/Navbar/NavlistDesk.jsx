const NavlistDesk = (props) => {

    const { linkList, contact } = props;
    const keys = Object.keys(linkList);
    const values = Object.values(linkList);

    return (
        <div className='nav-desktop'>
            <ul className='nav-list'>
                {keys.map((key, index) => (
                    <li key={index}>
                        <a href={values[index]}>{key}</a>
                    </li>
                ))}
                <button className='btn-primary1'>{contact}</button>
            </ul>
        </div>
    )
}

export default NavlistDesk;