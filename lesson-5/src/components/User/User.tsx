import React from "react";
import userIcon from './icon.png';
import "./User.scss";

interface IUserProps {
    userName: string;
}

const User: React.FC<IUserProps> = ({userName}) => {
    return (
        <div className="user-info hidden-state">
            <div className="user-icon">
                <img src={userIcon} alt="user-icon"/>
            </div>
            <div className="user-name">{userName}</div>
        </div>
    )
}

export default User;