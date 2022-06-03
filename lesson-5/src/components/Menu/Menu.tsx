import React from "react";
import "./Menu.scss";

interface IMenu {
    items: Array<string>;
    closeMenuOnClick: () => void
}

const Menu: React.FC<IMenu> = ({items, closeMenuOnClick}) => {

    return (
            <div className="menu">
                <div className="menu-row">
                    <ul className="menu-list">
                        {items.map((item, index) =>
                            <li className="menu-list-item" key={index} id={`menu-item_${index}`}>
                                <a href="#">{item}</a>
                            </li>)}
                    </ul>
                    <div className="log-out">
                        <span>Log Out</span>
                    </div>
                </div>
                <div className="close" onClick={closeMenuOnClick}>
                    X
                </div>
            </div>
    )
}

export default Menu;