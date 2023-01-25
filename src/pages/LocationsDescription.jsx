import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LocationsResidents from './LocationsResidents'
import { getLocations } from '../services/api';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
const LocationsDescription = () => {
    const [location, setLocation] = useState([])
    const [residents, setResidents] = useState([])
    // const
    const { id } = useParams();

    useEffect(() => {
        getLocations(id).then(res => setLocation(res.data.results))
    }, [])

    return (
        <div>
            <NavBar />
            {/* <Footer /> */}
            <div style={{ margin: 20 }}>
                {
                    location.map((item) => {
                        return (
                            <div>
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

        </div>
    )
}

export default LocationsDescription