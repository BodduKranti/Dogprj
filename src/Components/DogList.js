import React, { memo } from 'react'
import { Card } from 'react-bootstrap'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import useDogHook from '../CustomHook/useDogHook';
import ModalPopup from './ModalPopup';
import Spinner from 'react-bootstrap/Spinner';
const DogList = ({ dogImg }) => {
    const {selectDogImg,selImg,show,setShow} = useDogHook();
    console.log('doglist');
    return (
        <>
        
            {dogImg ? <>
                <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
                className="mt-4"
            >
                <Masonry gutter="10px">
                    {dogImg && dogImg.map((dogImg,i) => {
                        return (
                            <>

                                <Card className='border-0'>
                                    <Card.Img
                                        variant="top"
                                        src={dogImg}
                                        title={dogImg}
                                        className="rounded shadow border-light p-3"
                                        onClick={selectDogImg}
                                    />
                                </Card>
                            </>
                        )
                    })
                    }

                </Masonry>
            </ResponsiveMasonry>
            </>:<>
            <Spinner animation="grow" />;
            </>}
            
            {/* <div className='row'>
                {dogImg && dogImg.map((dogImg) => {
                    return (
                        <>

                            <div className='col-md-3 col-sm-4 mt-3'>

                                <Card className='shadow border border-primary border-5'>
                                    <Card.Img
                                        variant="top"
                                        src={dogImg}
                                        title={dogImg}
                                    />
                                </Card>
                            </div>
                        </>
                    )
                })}
            </div> */}

            <ModalPopup 
                selImg={selImg}
                show={show}
                onHide={()=>setShow(false)}
            />
        </>
    )
}

export default memo(DogList)