import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import { getEpisodes } from '../services/api.jsx';

const Episodes = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {
        SearchEpisodes();
    }, []);

    const SearchEpisodes = () => {
        getEpisodes(search).then((res) => {
            setItems(res.data.results);
        });
        if (search !== "") {
            setItems([]);
        }
    };

    const Next = () => {
        setPage(page + 1);
        getEpisodes(search, page + 1).then((res) => {
            setItems(res.data.results);
        });
    };

    const Prev = () => {
        setPage(page - 1);
        getEpisodes(search, page - 1).then((res) => {
            setItems(res.data.results);
        });
    };

    return (
        <div >
            <NavBar />
            <Footer />
            <div className='container'>
                <img className="rickimage" src="/open.webp" alt="open" />
                <input
                    className="input"
                    type="text"
                    placeholder="Filter by name..."
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            SearchEpisodes();
                        }
                    }}
                />
                <div className='box-container'>
                    {
                        items.map((item, i) => (
                            <Link key={i} className='box-episodes' to={`/episodes/${item.name}`}>
                                <h1>
                                    {item.name}
                                </h1>
                                <span>
                                    {item.air_date}
                                </span>
                                <p>{item.episode}</p>
                            </Link>
                        ))
                    }
                </div>
                <div className="pagination">
                    <button className="btn" onClick={() => Prev()}>PREVIOUS</button>
                    <button className="btn" onClick={() => Next()}>NEXT</button>
                </div>
            </div>
        </div>
    )
}

export default Episodes