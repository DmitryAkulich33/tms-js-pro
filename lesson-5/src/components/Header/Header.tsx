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
    const[isExpanded, setExpanded] = useState(false);

    const handleMenuOnClick = () => {
        setExpanded(!isExpanded);
    }

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-row'>
                    <BurgerMenu burgerMenuOnClickHandler={handleMenuOnClick}/>
                    {isExpanded ? <User userName={userName}/> : null}
                </div>
                {isExpanded ? <Menu items={menuItems} closeMenuOnClick={handleMenuOnClick}/> : null}
            </div>
        </header>
    )
}

export default Header;