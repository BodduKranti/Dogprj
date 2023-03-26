import React from "react";

/* ---- install require files ---- */
/*
    1.  npm i bootstrap react-bootstrap
    2.  npm i react-icons
    3.  npm i axios
    4.  npm i react-responsive-masonry
    5.  npm i sass
*/

/* --- import files ----- */
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "./style.scss";
import useDogHook from "./CustomHook/useDogHook";
import Dogs from "./Pages/Dogs";

function App() {
    const { 
        allDog, 
        dogSelect, 
        setDogSelect, 
        dogImg, 
        dogList,
        error
        } = useDogHook();


    return <>
        <Dogs
            allDog={allDog}
            dogSelect={dogSelect}
            setDogSelect={setDogSelect}
            dogList={dogList}
            dogImg={dogImg}
            error={error}
        />
    </>;
}

export default App;
