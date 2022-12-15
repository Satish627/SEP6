import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase";


function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth(app);

    const handleSubmit =  () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                alert("User logged in")
            })
            .catch((error) => {
                const errorCode = error.code;
                alert(errorCode)
            });
    };

    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    const handlePasswordChange = event => {
        setPassword(event.target.value)
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
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email"
                                                    name="email"
                                                    placeholder="Enter email"
                                                    onChange={handleEmailChange}
                                                    value={email} />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password"
                                                    name="password"
                                                    placeholder="Enter password"
                                                    onChange={handlePasswordChange}
                                                    value={password} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <p className="small">
                                                    <a className="text-primary" href="/">
                                                        Forgot password?
                                                    </a>
                                                </p>
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="secondary" type="submit">
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