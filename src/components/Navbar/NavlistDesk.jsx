const NavlistDesk = (props) => {

    const { data, contact } = props;

    return (
        <div className='nav-desktop'>
            <ul className='nav-list'>
                {data.map((item) => (
                    <li>
                        <a href="#">{item}</a>
                    </li>
                ))}
                <button className='btn-primary1'>{contact}</button>
            </ul>
        </div>
    )
}

export default NavlistDesk;