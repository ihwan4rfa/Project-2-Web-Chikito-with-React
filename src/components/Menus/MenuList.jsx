import MenuFood from "./MenuFood";
import MenuSnack from "./MenuSnack";
import MenuDrink from "./MenuDrink";

const MenuList = (props) => {

    const menuSnackList = [
        {
            menuName: "Tempe Punk",
            menuDescription: "Tempe goreng tepung",
            menuPrice: "8k"
        },
        {
            menuName: "Tahu Punk",
            menuDescription: "Tahu goreng tepung",
            menuPrice: "8k"
        },
        {
            menuName: "Brokoli Crispy",
            menuDescription: "Brokoli crispy",
            menuPrice: "9k"
        },
        {
            menuName: "Jamur Crispy",
            menuDescription: "Jamur crispy",
            menuPrice: "9k"
        },
        {
            menuName: "Onion Ring",
            menuDescription: "Onion ring",
            menuPrice: "9k"
        },
        {
            menuName: "Potato Wedges",
            menuDescription: "Potato wedges",
            menuPrice: "9k"
        },
        {
            menuName: "Salad",
            menuDescription: "Selada, lettuce, kol ungu, onion, tomat",
            menuPrice: "9k"
        },
        {
            menuName: "French Fries",
            menuDescription: "Kentang goreng crispy",
            menuPrice: "10k"
        }
    ]

    const menuFoodList = [
        {
            menuName: "Original Chicken Steak",
            menuDescription: "Grilled chicken steak, potato wedges, salad, 2 saus",
            menuPrice: "23k"
        },
        {
            menuName: "Double Chicken Steak",
            menuDescription: "Double grilled chicken steak, potato wedges, salad, 2 saus",
            menuPrice: "29k"
        },
        {
            menuName: "Chikito Onion",
            menuDescription: "Boneless chicken crispy, potato wedges, onion ring, 2 saus",
            menuPrice: "21k"
        },
        {
            menuName: "Chikito Salad",
            menuDescription: "Boneless chicken crispy, potato wedges, salad, 2 saus",
            menuPrice: "21k"
        },
        {
            menuName: "Chikito Mix",
            menuDescription: "Boneless chicken crispy, potato wedges, salad, onion ring, 2 saus",
            menuPrice: "24k"
        },
        {
            menuName: "Chikiprek Paha",
            menuDescription: "Chicken crispy paha, sambal geprek, nasi, kuah sup",
            menuPrice: "15k"
        },
        {
            menuName: "Chikiprek Dada",
            menuDescription: "Boneless chicken crispy, sambal geprek, nasi, kuah sup",
            menuPrice: "15k"
        },
        {
            menuName: "Chikimie",
            menuDescription: "Boneless chicken crispy, indomie level (1 - 4), kuah sup",
            menuPrice: "16k"
        }
    ]

    const menuDrinkList = [
        {
            menuName: "Air Mineral",
            menuDescription: "Air mineral kemasan 330ml",
            menuPrice: "2k"
        },
        {
            menuName: "Teh",
            menuDescription: "Teh, lemon slice, ice/hot",
            menuPrice: "3k"
        },
        {
            menuName: "Djeruk",
            menuDescription: "Jeruk, lemon slice, ice/hot",
            menuPrice: "4k"
        },
        {
            menuName: "Lemon Tea",
            menuDescription: "Teh, lime juice, lemon slice, daun mint, ice/hot",
            menuPrice: "5k"
        },
        {
            menuName: "Nutrisari",
            menuDescription: "Nutrisari, lemon slice, daun mint, ice",
            menuPrice: "4k"
        },
        {
            menuName: "Kopi Tubruk",
            menuDescription: "Kopi hitam tubruk, gula",
            menuPrice: "5k"
        },
        {
            menuName: "Es Kopi Hitam",
            menuDescription: "Kopi hitam, es, gula",
            menuPrice: "6k"
        },
        {
            menuName: "Mojito",
            menuDescription: "Soda water with taste, lemon slice, daun mint, ice (orange / lemon / melon / leci)",
            menuPrice: "7k"
        }
    ]

    const { isAllClicked, isFoodClicked, isSnackClicked, isDrinkClicked } = props;
    let snackCondition = isAllClicked ? "menu-list-layout layout-30" : (isSnackClicked ? "menu-list-layout layout-100" : "hidden");
    let foodCondition = isAllClicked ? "menu-list-layout layout-38" : (isFoodClicked ? "menu-list-layout layout-100" : "hidden");
    let drinkCondition = isAllClicked ? "menu-list-layout layout-30" : (isDrinkClicked ? "menu-list-layout layout-100" : "hidden");
    let lineVertikal = isAllClicked ? "menu-line" : "hidden";

    return (
        <div className="menu-list-section">
            <div className={foodCondition}>
                {menuFoodList.map((food) => (
                    <MenuFood
                        menuName={[food.menuName]}
                        menuDescription={[food.menuDescription]}
                        menuPrice={[food.menuPrice]}
                    />
                ))}
            </div>
            <div className={lineVertikal}></div>
            <div className={snackCondition}>
                {menuSnackList.map((snack) => (
                    <MenuSnack
                        menuName={[snack.menuName]}
                        menuDescription={[snack.menuDescription]}
                        menuPrice={[snack.menuPrice]}
                    />
                ))}
            </div>
            <div className={lineVertikal}></div>
            <div className={drinkCondition}>
                {menuDrinkList.map((drink) => (
                    <MenuDrink
                        menuName={[drink.menuName]}
                        menuDescription={[drink.menuDescription]}
                        menuPrice={[drink.menuPrice]}
                    />
                ))}
            </div>
        </div>
    )
}

export default MenuList;