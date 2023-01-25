import { useEffect, useState } from "react";
import { getCharacterWithoutLink } from "../services/api";

const LocationsResidents = ({ resident }) => {
    const [items, setItems] = useState([]);

    const si = resident.map((item) => item.split("/")[5]);

    useEffect(() => {
        si.map((item) => {
            getCharacterWithoutLink(item).then((res) => {
                setItems(res.data);
            });
        });
    }, []);

    return (
        <>
            <div className="box">
                <div className="box-image">
                    <img src={items.image} alt={items.name} />
                </div>
                <div className="box-text">
                    <h2 className="box-text-name">{items.name}</h2>
                    <span className="box-text-specie">{items.species}</span>
                </div>
            </div>
        </>
    );
};

export default LocationsResidents;
