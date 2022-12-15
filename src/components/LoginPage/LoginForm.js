import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase";
import { useNavigate } from "react-router-dom";


function LoginForm() {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errorMsg, setErrorMsg] = useState("")

    const handleSubmission = () => {
        if (!values.email || !values.password) {
            setErrorMsg("Fill in all the fields")
            setSubmitDisabled(true)
            return
        }
        setErrorMsg("");
        // console.log(values)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((res) => {
                
                navigate("/home")
            })
            .catch((err) => {

                setErrorMsg(err.message)
            })
    };



    return (
        <div className="Login">
            {<Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                                    <p className=" mb-5">Please enter your username and password!</p>
                                    <div className="mb-2">
                                        <Form >

                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email"
                                                    name="email"
                                                    placeholder="Enter email"
                                                    onChange={(event) =>
                                                        setValues((prev) => ({ ...prev, email: event.target.value }))
                                                    } />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password"
                                                    name="password"
                                                    placeholder="Enter password"
                                                    onChange={(event) =>
                                                        setValues((prev) => ({ ...prev, password: event.target.value }))
                                                    } />
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <p className="small">
                                                    <a className="text-primary" href="/">
                                                        Forgot password?
                                                    </a>
                                                </p>
                                            </Form.Group>
                                            <b>{errorMsg}</b>
                                            <div className="d-grid">
                                                <Button variant="secondary" onClick={handleSubmission}>
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account?
                                                <a href="/signup" className="text-primary fw-bold">
                                                    Sign Up
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>}
        </div>
    )
}
export default LoginForm;