import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from "@mui/material";
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Hero = ({ movies }) => {

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies.map((movie) => {
                        return (
                            <Paper key={movie.imdbId}>
                                <div className='movie-card-container'>
                                    <div className='movie-card'>
                                        <div className='movie-detail'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt="" />
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    }
                    )
                }
            </Carousel>

        </div>
    )
}

const MoviePropTypes = PropTypes.shape({
    id: PropTypes.shape({
        timestamp: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
    imdbId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trailerLink: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    backdrop: PropTypes.string, // Can be null or a string
    reviewIds: PropTypes.arrayOf(PropTypes.number).isRequired,
});

Hero.propTypes = {
    // movie: MoviePropTypes,
    movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
};
export default Hero