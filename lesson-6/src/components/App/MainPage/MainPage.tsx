import React from "react";
import PostList from "./PostList/PostList";
import postCards from "../../../constants/postCards";

const MainPage = () => {
    return (
        <div>
            <PostList postCards={postCards}/>
        </div>
    )
}

export default MainPage;