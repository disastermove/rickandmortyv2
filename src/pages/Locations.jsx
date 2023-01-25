import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import { getLocationsAndPage } from '../services/api.jsx';

const Locations = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const { id } = useParams();

    useEffect(() => {
        SearchLocations();
    }, []);

    const SearchLocations = () => {
        getLocationsAndPage(search).then((res) => {
            setItems(res.data.results);
        });
        if (search !== "") {
            setItems([]);
        }
    };

    const Next = () => {
        setPage(page + 1);
        getLocationsAndPage(search, page + 1).then((res) => {
            setItems(res.data.results);
        });
    };

    const Prev = () => {
        setPage(page - 1);
        getLocationsAndPage(search, page - 1).then((res) => {
            setItems(res.data.results);
        });
    };

    return (
        <div >
            <NavBar />
            <Footer />
            <div className='container'>
                <img className="rickimage" src="/portal.webp" alt="portal" />
                <input
                    className="input"
                    type="text"
                    placeholder="Filter by name..."
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            SearchLocations();
                        }
                    }}
                />
                <div className='box-container'>
                    {
                        items.map((item, i) => (
                            <Link className='box-locations' id={item} to={`/locations/${item.name}`}>
                                <h1>
                                    {item.name}
                                </h1>
                                <span>
                                    {item.type}
                                </span>
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

export default Locations