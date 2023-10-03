import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import tmdbAxiosInstance from '../tmdbAxiosInstance';

function Banner({ fetchUrl }) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie, setMovie] = useState([])


    const fetchData = async () => {
        const { data } = await tmdbAxiosInstance.get(fetchUrl)
        setMovie(data.results)
        // console.log(response);
    }
    // console.log(allMovies);
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='container'>
            <div>
                <Carousel data-bs-theme="dark">
                    {
                        movie.map(item => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={`${base_url}/${item.backdrop_path}`}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5>
                                        {item.name}
                                    </h5>
                                    <p>
                                        {item.overview.slice(0,20)}
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Banner
