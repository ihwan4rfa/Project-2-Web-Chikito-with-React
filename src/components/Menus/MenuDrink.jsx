const MenuDrink = (props) => {

    const { menuName, menuDescription, menuPrice } = props;

    return (
        menuName.map((item, index) => (
            <div className="menu-item">
                <div className="flex">
                    <p className="menu-dot">•</p>
                    <div>
                        <p className="menu-item-title">{item}</p>
                        <p className="menu-item-description">{menuDescription[index]}</p>
                    </div>
                </div>
                <p className="menu-item-price">{menuPrice[index]}</p>
            </div>
        ))

    )
}

export default MenuDrink;