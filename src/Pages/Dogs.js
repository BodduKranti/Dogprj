import React from "react";
import DogList from "../Components/DogList";

const Dogs = ({ allDog,dogSelect,setDogSelect,dogList,dogImg,error}) => {
    console.log(error)
    return (
        <>
            <h1 className="text-center py-3 text-success">Dogs Project</h1>
            <div className="container-fluid py-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <form className="form" >
                                <div className="input-group">
                                    <select className="form-select" value={dogSelect} onChange={(e)=>setDogSelect(e.target.value)}>
                                        <option value={'select'}>Select Dogs</option>
                                        {allDog.map((data) => {
                                            return (
                                                <>
                                                    <option>{data}</option>
                                                </>
                                            );
                                        })}
                                    </select>
                                    <button className="btn btn-danger" onClick={dogList}>Search Dogs    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <DogList 
                        dogImg={dogImg}
                    />
                </div>
            </div>
        </>
    );
};

export default Dogs;
