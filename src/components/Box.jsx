const Box = ({ item }) => {
    return (
        <>
            <div className="box">
                <div className="box-image">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="box-text">
                    <h2 className="box-text-name">{item.name}</h2>
                    <span className="box-text-specie">{item.species}</span>
                </div>
            </div>
        </>
    );
};

export default Box;
