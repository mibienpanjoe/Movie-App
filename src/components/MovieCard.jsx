import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.imdbID}`} className="movie-card">
            <div className="movie-poster">
                <img 
                    src={movie.Poster !== 'N/A' ? movie.Poster : '/no-movie.png'} 
                    alt={movie.Title}
                />
            </div>
            <div className="movie-info">
                <h3 className='text-yellow-300'>{movie.Title}</h3>
                <div className="movie-details">
                    <p><strong>Year:</strong> {movie.Year}</p>
                    <p><strong>Type:</strong> {movie.Type}</p>
                    {movie.imdbID && (
                        <p><strong>IMDB ID:</strong> {movie.imdbID}</p>
                    )}
                </div>
            </div>
            
        </Link>
    );
};

export default MovieCard;
