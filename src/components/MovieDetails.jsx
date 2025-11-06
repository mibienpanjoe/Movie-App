import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

const API_BASE_URL = "http://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDb_API_KEY;

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await fetch(`${API_BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
                const data = await response.json();
                if (data.Response === "True") {
                    setMovie(data);
                } else {
                    setError(data.Error);
                }
            } catch (error) {
                console.error("Error fetching movie details:", error);
                setError("Error fetching movie details. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMovieDetails();
        }
    }, [id]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!movie) {
        return null;
    }

    return (
        <div className="movie-details-container">
            <button className="back-button" onClick={() => navigate(-1)}>
                &larr; Back to Search
            </button>
            <div className="movie-details-grid">
                <div className="movie-poster">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="movie-info">
                    <h1>{movie.Title}</h1>
                    <p>{movie.Year} • {movie.Rated} • {movie.Runtime}</p>
                    <div className="genres">
                        {movie.Genre.split(", ").map((genre) => (
                            <span key={genre} className="genre">{genre}</span>
                        ))}
                    </div>
                    <div className="rating">
                        <span>⭐ {movie.imdbRating}/10 ({movie.imdbVotes})</span>
                    </div>
                    <h2>Overview</h2>
                    <p>{movie.Plot}</p>
                    <div className="details-list">
                        <div>
                            <p><strong>Release Date:</strong> {movie.Released}</p>
                            <p><strong>Director:</strong> {movie.Director}</p>
                            <p><strong>Writer:</strong> {movie.Writer}</p>
                            <p><strong>Actors:</strong> {movie.Actors}</p>
                            <p><strong>Language:</strong> {movie.Language}</p>
                            <p><strong>Country:</strong> {movie.Country}</p>
                            <p><strong>Awards:</strong> {movie.Awards}</p>
                        </div>
                        <div>
                            <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
                            <p><strong>Production:</strong> {movie.Production}</p>
                            <p><strong>Website:</strong> <a href={movie.Website} target="_blank" rel="noopener noreferrer">{movie.Website}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
