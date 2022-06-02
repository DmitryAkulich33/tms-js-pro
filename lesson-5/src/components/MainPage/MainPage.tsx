import React from "react";
import Header from "../Header/Header";
import FirstScreen from "../FirstScreen/FirstScreen";

const MainPage = () => {
    return (
        <>
            <Header userName={"UserName"} menuItems={["My posts", "All posts"]}/>
            <FirstScreen btnTitle={"Learn More"} btnDisabled={false}/>
        </>

    )
}

export default MainPage;