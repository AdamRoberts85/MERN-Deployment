import React, { useEffect, useState } from 'react'
//import AuthorForm from '../components/AuthorForm';
import PlantList from '../components/PlantList';
import axios from 'axios';


const Main = (props) => {
    const [plants, setPlants] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/plants')
            .then(res => {
                setPlants(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = plantId => {
        setPlants(plants.filter(plant => plant._id !== plantId));
    }


    return (
        <div>           
            {loaded && <PlantList plants={plants} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;

