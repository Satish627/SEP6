import React, { useState } from "react";
import MovieInfo from "../MovieInfo";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";


//testing github actions
function Main() {
    const MOVIE_LIST = "https://api.themoviedb.org/3/movie/popular?api_key=cb3cb19c5abc56e58cee53f0a43e3e7d"

    const [movies, setMovies] = useState([]);
    useState(() => {
        fetch(MOVIE_LIST)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setMovies(data.results)
            })

    }, [])
    const [query, setQuery] = useState('');
    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching")
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=cb3cb19c5abc56e58cee53f0a43e3e7d&query=${query}`
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results)
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
            <div>
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
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="map">
                {movies.length > 0 ? (<div className="container">
                    <div className="grid">
                        {movies.map((item) => <MovieInfo key={item.id}{...item} />)}

                    </div>
                </div>) : (
                    <h1 className="text">Sorry !!! No Movies Found</h1>
                )}
            </div>
            
        </div>
    );
}
export default Main;