import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import star from "../../assets/star.webp"

const IMG_API = "https://image.tmdb.org/t/p/w500";

//nothing works
const MovieInfo = ({ title, poster_path, vote_average, release_date, overview }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div className="card text-center m-2 ">
            <img className="card-img-top " src={IMG_API + poster_path} alt="some images" />

            <div className="card-body " >
                <div className="d-flex-col justify-content-between " >
                    <div className="d-flex justify-content-around">
                        <h5>{title}</h5>
                        <div className="d-flex">
                            <img src={star} alt="rating" style={{ width: 20, height: 20 }}></img>
                            <h5 className="ms-2">{vote_average}</h5>

                        </div>
                    </div>
                    <Button type="button" className="btn btn-warning mt-2 me-2" onClick={handleShow}>
                        Show more
                    </Button>
                    <Button type="button" className="btn btn-warning mt-2" >
                        Add to favorites
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <img className="card-img-top" style={{ height: 600 }} src={IMG_API + poster_path} alt="some images"></img>

                    <Modal.Body>
                        <h3 className="mt-2">{title}</h3>
                        <h4>Release Date: {release_date}</h4>
                        <div className="d-flex justify-content">
                            <img src={star} alt="rating" style={{ width: 20, height: 20 }}></img>
                            <h5 className="ms-2">{vote_average}</h5>

                        </div>
                        <br></br>
                        <h6>Description </h6>
                        <p>{overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-warning" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </div>

        </div>
    )
}

export default MovieInfo;