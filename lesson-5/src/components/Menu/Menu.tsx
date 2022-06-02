import React from "react";
import "./Menu.scss";

interface IMenu {
    items: Array<string>;
    closeMenuOnClickHandler: () => void
}

const Menu: React.FC<IMenu> = ({items, closeMenuOnClickHandler}) => {
    return (
        <div className="menu hidden-state">
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
            <div className="close" onClick={closeMenuOnClickHandler}>
                X
            </div>
        </div>
    )
}

export default Menu;