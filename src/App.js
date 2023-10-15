import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import { Grid } from '@mui/material';
import { Row } from 'react-bootstrap';
function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {

    try {
      const response = await api.get('/api/v1/movies');
      console.log(response.data)
      setMovies(response.data);

    }
    catch (error) {
      console.log(error);

    }


  }

  useEffect(() => {
    getMovies();
  }, [])


  if (!movies) {
    return (
      <>
        <Grid>
          <Row className="text-center"><h1>Loading....</h1></Row>
        </Grid>
      </>)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
