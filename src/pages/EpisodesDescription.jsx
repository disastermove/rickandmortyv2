import { getEpisodes } from '../services/api';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import React, { useEffect, useState } from 'react'
import EpisodesREsidents from './EpisodesREsidents';
import { useParams, useNavigate } from 'react-router-dom';

const EpisodesDescription = () => {
    const [episodes, setEpisodes] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    const pressed = () => {
        navigate('/locations');
    }

    useEffect(() => {
        getEpisodes(id).then(res => setEpisodes(res.data.results))
    }, [])

    return (
        <div>
            <NavBar />
            <Footer />
            <div>
                {
                    episodes.map((item) => {
                        return (
                            <div>
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
                                        <span className='description-top'>Episode</span>
                                        <span className='description-bottom'>{item.episode}</span>
                                    </div>
                                    <div>
                                        <span className='description-top'>Date</span>
                                        <span className='description-bottom'>{item.air_date}</span>
                                    </div>
                                </div>
                                <div className='container' style={{ alignItems: "flex-start" }}>
                                    <h1 className='description-text'>Cast</h1>

                                    <div className="box-container-locations" >


                                        <EpisodesREsidents resident={item.characters} />
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

export default EpisodesDescription