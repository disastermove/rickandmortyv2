import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEpisodeCastWithoutLink } from '../services/api';

const EpisodesREsidents = ({ resident }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getEpisodeCastWithoutLink(resident).then((res) => {
            setCharacters(res);
        });
    }, []);



    return (
        <>
            {characters.map((item) => {
                const url = item.url

                const si = url.split("/")[5]

                return (
                    <Link to={`/characters/${item.name}-${si}`}>
                        <div className="box">
                            <div className="box-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="box-text">
                                <h2 className="box-text-name">{item.name}</h2>
                                <span className="box-text-specie">{item.species}</span>
                            </div>
                        </div>
                    </Link>
                )
            })}

        </>
    )
}

export default EpisodesREsidents

