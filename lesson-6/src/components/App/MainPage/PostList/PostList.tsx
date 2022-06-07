import React from "react";
import "./PostList.css"
import PostCard from "./PostCard/PostCard";
import {IPostCard} from "../../../../constants/postCards";

interface IPostList {
    postCards: Array<IPostCard>
}

const PostList: React.FC<IPostList> = ({postCards}) => {
    return (
        <div className={"post-list-content"}>
            <ul className={"post-card-list"}>
                {postCards.map(card =>
                    <PostCard id={card.id} image={card.image} title={card.title} date={card.date} text={card.text}/>)}
            </ul>
        </div>
    )
}

export default PostList;