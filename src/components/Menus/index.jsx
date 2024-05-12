import { useState } from 'react';
import Ayam1 from '../../assets/AyamKentang.png';
import Ayam2 from '../../assets/AyamKentangFlip.png';
import MenuList from './MenuList';
import MenuHead from './MenuHead';
import './style.css'

const Menus = () => {
    const [isAllClicked, setIsAllClicked] = useState(true);
    const [isSnackClicked, setIsSnackClicked] = useState(false);
    const [isFoodClicked, setIsFoodClicked] = useState(false);
    const [isDrinkClicked, setIsDrinkClicked] = useState(false);

    const toggleAllButton = () => {
        isAllClicked ? setIsAllClicked(true) : setIsAllClicked(true);
        setIsSnackClicked(false);
        setIsFoodClicked(false);
        setIsDrinkClicked(false);
    }
    const toggleSnackButton = () => {
        isSnackClicked ? setIsSnackClicked(true) : setIsSnackClicked(true);
        setIsAllClicked(false);
        setIsFoodClicked(false);
        setIsDrinkClicked(false);
    }
    const toggleFoodButton = () => {
        isFoodClicked ? setIsFoodClicked(true) : setIsFoodClicked(true);
        setIsSnackClicked(false);
        setIsAllClicked(false);
        setIsDrinkClicked(false);
    }
    const toggleDrinkButton = () => {
        isDrinkClicked ? setIsDrinkClicked(true) : setIsDrinkClicked(true);
        setIsFoodClicked(false);
        setIsSnackClicked(false);
        setIsAllClicked(false);
    }

    return (
        <section id="our_menus" className="menu-section">
            <img className="img-ayam" src={Ayam1} alt="" />
            <img className="img-ayam2" src={Ayam2} alt="" />
            <MenuHead
                isAllClicked={isAllClicked}
                isFoodClicked={isFoodClicked}
                isSnackClicked={isSnackClicked}
                isDrinkClicked={isDrinkClicked}
                toggleAllButton={toggleAllButton}
                toggleFoodButton={toggleFoodButton}
                toggleSnackButton={toggleSnackButton}
                toggleDrinkButton={toggleDrinkButton}
            />
            <MenuList
                isAllClicked={isAllClicked}
                isFoodClicked={isFoodClicked}
                isSnackClicked={isSnackClicked}
                isDrinkClicked={isDrinkClicked}
            />
        </section>
    )
}

export default Menus;