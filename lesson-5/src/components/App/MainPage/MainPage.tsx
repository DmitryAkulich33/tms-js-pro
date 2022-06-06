import React from "react";
import Header from "./Header";
import FirstScreen from "./FirstScreen";

const MainPage = () => {
    return (
        <>
            <Header userName={"UserName"} menuItems={["My posts", "All posts"]}/>
            <FirstScreen btnTitle={"Learn More"} btnDisabled={false}/>
        </>

    )
}

export default MainPage;