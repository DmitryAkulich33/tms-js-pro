import React from "react";
import "./BurgerMenu.scss"

interface IBurgerMenu {
    burgerMenuOnClickHandler: () => void
}

const BurgerMenu: React.FC<IBurgerMenu> = ({burgerMenuOnClickHandler}) => {
    return (
        <div className='burger-menu' onClick={burgerMenuOnClickHandler}>
            <span></span>
        </div>
    )
}

export default BurgerMenu;