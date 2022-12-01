import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

const IMG_API = "https://image.tmdb.org/t/p/w500";


const MovieInfo = ({ title, poster_path, vote_average, release_date, overview }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div className="card text-center m-2 ">
            <div className="card-body">
                <img className="card-img-top" src={IMG_API + poster_path} alt="some images" />
                <div className="card-body">
                    <h5>Rating: {vote_average}</h5>

                    <Button type="button" className="btn btn-warning" onClick={handleShow}>
                        Show more
                    </Button>
                    <Modal modal-dialog modal-sm show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" style={{ height: 600 }} src={IMG_API + poster_path} alt="some images"></img>
                            <h3 className="mt-2">{title}</h3>
                            <h4>Release Date: {release_date}</h4>
                            <h5>Rating : {vote_average}</h5>
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

        </div>
    )
}

export default MovieInfo;