import { useEffect, useState } from 'react'
import axios from 'axios';

const useDogHook = () => {
    /*
        doggs api = https://dog.ceo/api/breeds/list/all
        dogs imgs api = https://dog.ceo/api/breed/${selectedBreed}/images
    */

    const [dogSelect, setDogSelect] = useState('');
    const [allDog, setAllDog] = useState([]);
    const [dogImg, setDogImg] = useState([]);

    const [selImg, setSelImg] = useState('');
    const [show, setShow] = useState(false);
    const [error,setError]=useState('');

    const allDogs = async () => {
        await axios.get('https://dog.ceo/api/breeds/list/all')
            .then((res) => {
                setAllDog(Object.keys(res.data.message))
            })
            .catch((err) => console.log(err))
    }

    const dogList = async (e) => {
        e.preventDefault();
        // alert(`https://dog.ceo/api/breed/${dogSelect}/images`);
        await axios.get(`https://dog.ceo/api/breed/${dogSelect}/images`)
            .then((res) => {
                setDogImg(res.data.message)
            })
            .catch((Error) => {
                setError(Error.message)
            })
    }

    const selectDogImg = (e) => {
        setSelImg(e.target.title);
        setShow(true);
    }

    useEffect(() => {
        allDogs();
    }, [])


    return {
        dogSelect,
        setDogSelect,
        allDog,
        dogImg,
        dogList,
        selectDogImg,
        selImg,
        show,
        setShow,
        error
    }
}

export default useDogHook