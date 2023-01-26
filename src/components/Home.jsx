import Box from "./Box";
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { useEffect, useState } from "react";
import { getCharacter, getCharacterAndPage } from "../services/api.jsx";

const Home = () => {
    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        SearchCharacter();
    }, []);

    const SearchCharacter = () => {
        getCharacter(search).then((res) => {
            setItems(res.data.results);
        });
        if (search !== "") {
            setItems([]);
        }
    };

    const Next = () => {
        setPage(page + 1);
        getCharacterAndPage(search, page + 1).then((res) => {
            setItems(res.data.results);
        });
    };

    const Prev = () => {
        setPage(page - 1);
        getCharacterAndPage(search, page - 1).then((res) => {
            setItems(res.data.results);
        });
    };

    return (
        <>
            <NavBar />
            <Footer />
            <div className="container">
                <img className="rickimage" src="/rickandmorty.webp" alt="" />
                <input
                    className="input"
                    type="text"
                    placeholder="Filter by name..."
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            SearchCharacter();
                        }
                    }}
                />
                <div className="box-container">
                    {items.map((item, i) => (
                        <Box key={i} item={item} />
                    ))}
                </div>
                <div className="pagination">
                    <button className="btn" onClick={() => Prev()}>PREVIOUS</button>
                    <button className="btn" onClick={() => Next()}>NEXT </button>
                </div>
            </div>
        </>
    );
};

export default Home;
