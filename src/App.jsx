import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import { useState, useEffect } from "react";

const API_BASE_URL = "http://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDb_API_KEY;

const App = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchMovies = async (searchTerm) => {
        if (!searchTerm || searchTerm.trim() === '') {
            setMovies([]);
            setErrorMessage('');
            return;
        }

        setLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch(`${API_BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`);
            const data = await response.json();

            if (data.Response === 'True') {
                setMovies(data.Search);
                setErrorMessage('');
            } else {
                setMovies([]);
                setErrorMessage(data.Error || 'No movies found');
            }
        } catch (error) {
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchMovies(search);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [search]);

    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <div className="pattern">
                        <div className="wrapper">
                            <header>
                                <img src="/hero.png" alt="Hero Banner" />
                                <h1>Find Your Favorite <span className="text-gradient">Movies</span></h1>
                                <Search search={search} setSearch={setSearch} />
                            </header>

                            <section className="all-movies">
                                <h2>
                                    {search ? `Search Results for "${search}"` : 'All Movies'}
                                </h2>

                                {loading && (
                                    <div className="loading">
                                        <p>Loading movies...</p>
                                    </div>
                                )}

                                {errorMessage && (
                                    <div className="error-message">
                                        <p>{errorMessage}</p>
                                    </div>
                                )}

                                {!loading && !errorMessage && movies.length === 0 && search && (
                                    <div className="no-movies">
                                        <img src="/no-movie.png" alt="No movies found" />
                                        <p>No movies found. Try a different search term.</p>
                                    </div>
                                )}

                                {!loading && !errorMessage && movies.length === 0 && !search && (
                                    <div className="no-movies">
                                        <p>Start searching for your favorite movies!</p>
                                    </div>
                                )}

                                <div className="movies-grid">
                                    {movies.map((movie) => (
                                        <MovieCard key={movie.imdbID} movie={movie} />
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                } />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </main>
    )
}

export default App;
