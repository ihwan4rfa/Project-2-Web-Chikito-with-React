import IconAll from '../../assets/All.png';
import IconAll2 from '../../assets/All2.png';
import IconDrink from '../../assets/Drink.png';
import IconDrink2 from '../../assets/Drink2.png';
import IconFood from '../../assets/Food.png';
import IconFood2 from '../../assets/Food2.png';
import IconSnack from '../../assets/Snack.png';
import IconSnack2 from '../../assets/Snack2.png';

const MenuHead = (props) => {

    const { isAllClicked, isFoodClicked, isSnackClicked, isDrinkClicked, toggleAllButton, toggleFoodButton, toggleSnackButton, toggleDrinkButton } = props;

    return (
        <div className="menu-head-section">
            <div className="menu-title-layout">
                <h1>OUR MENUS</h1>
                <p>Temukan beragam hidangan lezat dan tingkatkan pengalaman makan Anda!</p>
            </div>
            <div className="menu-button-section">
                <div className="menu-button-layout">
                    <h1 className={isAllClicked ? "menu-button-clicked" : "menu-button-noclicked"} onClick={toggleAllButton}>All<img src={isAllClicked ? IconAll : IconAll2} alt="All" /></h1>
                    <h1 className={isFoodClicked ? "menu-button-clicked" : "menu-button-noclicked"} onClick={toggleFoodButton}>Food<img src={isFoodClicked ? IconFood : IconFood2} alt="Food" /></h1>
                    <h1 className={isSnackClicked ? "menu-button-clicked" : "menu-button-noclicked"} onClick={toggleSnackButton}>Snack<img src={isSnackClicked ? IconSnack : IconSnack2} alt="Snack" /></h1>
                    <h1 className={isDrinkClicked ? "menu-button-clicked" : "menu-button-noclicked"} onClick={toggleDrinkButton}>Drink<img src={isDrinkClicked ? IconDrink : IconDrink2} alt="Drink" /></h1>
                </div>
            </div>
        </div>
    )
}

export default MenuHead;