import { Link } from "react-router-dom";

const Box = ({ item }) => {
    const url = item.url

    const si = url.split("/")[5]

    return (
        <>
            <Link className="box-link" to={`/characters/${item.name}-${si}`}>
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
        </>
    );
};

export default Box;
