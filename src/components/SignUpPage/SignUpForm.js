import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";


function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

   const url = 'https://httpbin.org/post'

    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    };

    const handleConPasswordChange = event => {
        setConPassword(event.target.value)
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                    confirmPassword : conPassword,
                }),
            });
            let resJson = await res.json();
            console.log(resJson)
            if (res.status === 200) {
                setEmail("");
                setPassword("");
                setConPassword("");
                console.log("User signed up successfully");
            } else {
                console.log("Error occured while signing up");
            }
        } catch (err) {
            console.log(err);
            
        }
    };
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Sign up here!!!</h2>
                                    <p className=" mb-5">Please enter a username and password!</p>
                                    <div className="mb-2">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email"
                                                    name="email"
                                                    placeholder="Enter email"
                                                    onChange={ handleEmailChange }
                                                    value={email} />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password"
                                                    name="password"
                                                    placeholder="Enter your password"
                                                    onChange={handlePasswordChange}
                                                    value={password}/>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type="password"
                                                    name="conPassword"
                                                    placeholder="Repeat your password"
                                                    onChange={handleConPasswordChange}
                                                    value={conPassword} />
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="secondary" type="submit">
                                                    Signup
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Already registered!
                                                <a href="/login" className="text-primary fw-bold ms-2">
                                                    Login here                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default SignUpForm;