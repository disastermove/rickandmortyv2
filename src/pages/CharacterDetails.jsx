import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EpisodesREsidents from './EpisodesREsidents';
import { getCharacter, getCharacterNumber, getEpisodeWithoutLink } from '../services/api';

const CharacterDetails = () => {
    const [character, setCharacter] = useState([])
    const [episode, setEpisode] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();

    const si = id.split("-")[1]

    useEffect(() => {
        getCharacterNumber(si).then((res) => {
            getEpisodeWithoutLink(res.data.episode).then((res) => setEpisode(res))
            setCharacter([res.data])
        })
    }, [])

    const pressed = () => {
        navigate('/locations');
    }
    return (
        <div>
            <NavBar />
            <Footer />
            {
                character.map((item) => (
                    <>
                        <div className='character-pack'>
                            <button className='goback' onClick={pressed} style={{ width: 300 }}>
                                <span className="material-symbols-outlined">
                                    arrow_back
                                </span>
                                <p>GO BACK</p>
                            </button>
                            <div className='box-image-character' >
                                <img className='img-character' src={item.image} alt="" />
                            </div>
                            <div style={{ width: 300 }}></div>
                        </div>
                        <div className='container'>

                            <h1 className='character-name'>{item.name}</h1>
                            <div className='character-div-info'>
                                <div>
                                    <h1 className='character-title'>Informations</h1>
                                    <div className='info-container'>
                                        <div className='info-box'>
                                            <span className='info-text'>Gender</span>
                                            <span className='info-name'>{item.gender}</span>
                                        </div>
                                        <div className='info-box'>
                                            <span className='info-text'>Status</span>
                                            <span className='info-name'>{item.status}</span>
                                        </div>
                                        <div className='info-box'>
                                            <span className='info-text'>Specie</span>
                                            <span className='info-name'>{item.species}</span>
                                        </div>
                                        <div className='info-box'>
                                            <span className='info-text'>Origin</span>
                                            <span className='info-name'>{item.origin.name}</span>
                                        </div>
                                        <div className='info-box'>
                                            <span className='info-text'>Type</span>
                                            <span className='info-name'>{item.type ? item.type : 'Unknown'}</span>
                                        </div>
                                        <Link to={`/locations/${item.location.name}`}>
                                            <div className='info-box location-index'>
                                                <div className='info-container' style={{ margin: 0 }}>
                                                    <span className='info-text'>Location</span>
                                                    <span className='info-name'>{item.location.name}</span>
                                                </div>
                                                <div>
                                                    <span className="material-symbols-outlined">
                                                        chevron_right
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>

                                </div>
                                <div>
                                    <h1 className='character-title'>Episodes</h1>
                                    <div className='info-container'>
                                        {
                                            episode.map((item) => (
                                                <Link to={`/episodes/${item.name}`}>
                                                    <div className='info-box location-index'>
                                                        <div className='info-container-low'>
                                                            <span className='info-text'>{item.episode}</span>
                                                            <span className='info-name'>{item.name}</span>
                                                            <span className='info-subname'>{item.air_date}</span>
                                                        </div>
                                                        <div>
                                                            <span className="material-symbols-outlined">
                                                                chevron_right
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>

                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }


        </div>
    )
}

export default CharacterDetails