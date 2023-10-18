import React from 'react';
import Hero from '../hero/Hero';
import PropTypes from 'prop-types';

const Home = ({ movies }) => {
    if (!movies) {
        return <h2> Loading... </h2>
    }

    return (
        <Hero movies={movies} />

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

Home.propTypes = {
    // movie: MoviePropTypes,
    movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
};
export default Home
