import React from "react";
import './Header.scss'
import User from "../User/User";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Menu from "../Menu/Menu";

interface IHeader {
    userName: string;
    menuItems: Array<string>
}

const Header: React.FC<IHeader> = ({userName, menuItems}) => {
    const closeMenuOnClick = () => {
        const menuElem: Element | null = document.querySelector(".menu");
        const userInfoElem: Element | null = document.querySelector(".user-info");
        if (menuElem) menuElem.classList.toggle("hidden-state");
        if (userInfoElem) userInfoElem.classList.toggle("hidden-state");
    }

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-row'>
                    <BurgerMenu burgerMenuOnClickHandler={closeMenuOnClick}/>
                    <User userName={userName}/>
                </div>
                <Menu closeMenuOnClickHandler={closeMenuOnClick} items={menuItems}/>
            </div>
        </header>
    )
}

export default Header;