import React, { useState } from "react";
import MovieInfo from "../MovieInfo/MovieInfo";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

function Home() {
    const MOVIE_LIST = "https://api.themoviedb.org/3/movie/popular?api_key=cb3cb19c5abc56e58cee53f0a43e3e7d"

    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);
    //const [activeGenre, setActiveGenre] = useState(0);

   
    const fetchMovies = async () => {
        const res = await fetch(MOVIE_LIST);
        const data = await res.json();
        console.log(data);
        setPopular(data.results);
        setFiltered(data.results);

    }
    useState(() => {
        fetchMovies();
    }, [])
    
    const [query, setQuery] = useState('');
    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching")
        try {
            const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=cb3cb19c5abc56e58cee53f0a43e3e7d&query=${query}`
            const res = await fetch(SEARCH_URL);
            const data = await res.json();
            console.log(data);
            setFiltered(data.results)
        }
        catch (e) {
            console.log(e)
        }
    }
    const changeHandler = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <div className="justify-space-between">
                <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="/home">BestMovies App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll">
                        </Navbar.Toggle>

                        <Navbar.Collapse id="navBarScroll">

                            <Nav className='me-auto my-2 my-lg-3' style={{ maxHeight: '100px' }} navbarScroll></Nav>

                            <Form className="d-flex" onSubmit={searchMovie}>
                                <FormControl
                                    type='search'
                                    placeholder='Search Movies'
                                    className='me-2'
                                    aria-label='search'
                                    name='query'
                                    value={query}
                                    onChange={changeHandler}
                                />
                                <Button variant='secondary' type='submit'>Search</Button>
                            </Form>
                            <Nav className="ms-4">
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
                {/* <Filter popuLar={popular} 
                setFiltered={setFiltered} 
                activeGenre={activeGenre} 
                setActiveGenre={setActiveGenre} /> */}
            </div>
            <div className="map">
                {popular.length > 0 ? (<div className="container">
                    <div className="grid">
                        {filtered?.map((movie) => <MovieInfo key={movie.id} {...movie} />)}

                    </div>
                </div>) : (
                    <h1 className="text">Sorry !!! No Movies Found</h1>
                )}
            </div>

        </div>
    );
}
export default Home;