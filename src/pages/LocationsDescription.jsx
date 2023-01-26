import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import LocationsResidents from './LocationsResidents'
import { getLocations } from '../services/api';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
const LocationsDescription = () => {
    const [location, setLocation] = useState([])
    const [residents, setResidents] = useState([])
    // const
    const { id } = useParams();
    const navigate = useNavigate();

    const pulsado = () => {
        navigate('/locations');
    }

    useEffect(() => {
        getLocations(id).then(res => setLocation(res.data.results))
    }, [])

    return (
        <div>
            <NavBar />
            {/* <Footer /> */}
            <div style={{ margin: 20 }}>
                {
                    location.map((item, i) => {
                        return (
                            <div key={i}>

                                <button className='goback' onClick={pulsado}>
                                    <span className="material-symbols-outlined">
                                        arrow_back
                                    </span>
                                    <p>GO BACK</p>
                                </button>
                                <div className='description-plantes-text'>
                                    <h1 >{item.name}</h1>
                                </div>
                                <div className='desription-box'>
                                    <div>
                                        <span className='description-top'>Type</span>
                                        <span className='description-bottom'>{item.type}</span>
                                    </div>
                                    <div>
                                        <span className='description-top'>Dimension</span>
                                        <span className='description-bottom'>{item.dimension}</span>
                                    </div>
                                </div>
                                <LocationsResidents resident={item.residents} />
                            </div>
                        )
                    })
                }
            </div>

        </div >
    )
}

export default LocationsDescription