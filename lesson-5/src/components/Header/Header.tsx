import React, { useState } from "react";
import './Header.scss'
import User from "../User/User";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Menu from "../Menu/Menu";

interface IHeader {
    userName: string;
    menuItems: Array<string>;
}

const Header: React.FC<IHeader> = ({userName, menuItems}) => {
    const[isMenuExpanded, setMenuExpanded] = useState(false);
    const[isUserExpanded, setUserExpanded] = useState(false);

    const handleMenuOnClick = () => {
        setMenuExpanded(!isMenuExpanded);
        setUserExpanded(!isUserExpanded);
    }

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-row'>
                    <BurgerMenu burgerMenuOnClickHandler={handleMenuOnClick}/>
                    {isUserExpanded ? <User userName={userName}/> : null}
                </div>
                {isMenuExpanded ? <Menu items={menuItems} closeMenuOnClick={handleMenuOnClick}/> : null}
            </div>
        </header>
    )
}

export default Header;