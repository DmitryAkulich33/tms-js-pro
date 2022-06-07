import React, {useState} from "react";
import "./PostCard.css"
import {IPostCard} from "../../../../../constants/postCards";
import noContentImageUrl from "../../../../../constants/urls";

export const PostCard: React.FC<IPostCard> = ({id, image, text, date, title}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const onCLickHandler = () => {
        setIsExpanded(!isExpanded);
    }

    const imageUrlToRender = image ? image : noContentImageUrl;

    const renderExpandedCard = () => {
        return (
            <li className={"post-card_expanded"} id={`post-card_${id}`}>
                <div className={"post-card-left-column"}>
                    <div className={"post-card-date_expanded"}>{date}</div>
                    <h3 className={"post-card-title_expanded"} onClick={onCLickHandler}>{title}</h3>
                    <div className={"post-card-description"}>
                        <p>{text}</p>
                    </div>
                </div>
                <div className={"post-card-right-column"}>
                    <div className={"post-card-img_expanded"}>
                        <img src={imageUrlToRender} alt="post-card"/>
                    </div>
                </div>
            </li>
        )
    }

    const renderCollapsedCard = () => {
        return (
            <li className={"post-card_collapsed"} key={id} id={`post-card_${id}`}>
                <div className={"post-card-img_collapsed"}>
                    <img src={imageUrlToRender} alt="post-card"/>
                </div>
                <div className={"post-card-date_collapsed"}>{date}</div>
                <h3 className={"post-card-title_collapsed"} onClick={onCLickHandler}>{title}</h3>
            </li>
        )
    }

    return isExpanded ? renderExpandedCard() : renderCollapsedCard();
}

export default PostCard;