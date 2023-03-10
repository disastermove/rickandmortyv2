import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import LocationsResidents from './LocationsResidents'
import { getLocations } from '../services/api';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
const LocationsDescription = () => {
    const [location, setLocation] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    const pressed = () => {
        navigate('/locations');
    }

    useEffect(() => {
        getLocations(id).then(res => setLocation(res.data.results))
    }, [])

    return (
        <div>
            <NavBar />
            <Footer />
            <div>
                {
                    location.map((item, i) => {
                        return (
                            <div key={i}>
                                <div className='description-pack'>
                                    <button className='goback' onClick={pressed}>
                                        <span className="material-symbols-outlined">
                                            arrow_back
                                        </span>
                                        <p>GO BACK</p>
                                    </button>
                                    <div className='description-plantes-text'>
                                        <h1 >{item.name}</h1>
                                    </div>
                                    <div></div>
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
                                <div className='container' style={{ alignItems: "flex-start" }}>
                                    <h1 className='description-text'>Residents</h1>
                                    <div className="box-container-locations" >


                                        <LocationsResidents resident={item.residents} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div >
    )
}

export default LocationsDescription