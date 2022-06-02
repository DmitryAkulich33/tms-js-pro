import React from "react";
import "./FirstScreen.scss"
import Button from "../Button/Button";

interface IFirstScreen {
    btnTitle: string;
    btnDisabled: boolean;
}

const FirstScreen: React.FC<IFirstScreen> = ({btnTitle, btnDisabled}) => {
    return (
        <div className="first-screen">
            <div className="container">
                <div className="first-screen-content">
                    <h1>Make you Blog <span>Online</span></h1>
                    <div className="first-screen-subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem alias nisi, a nesciunt
                        nobis eaque.
                    </div>
                    <Button title={btnTitle} disabled={btnDisabled}/>
                </div>
            </div>
        </div>

    )
}

export default FirstScreen;