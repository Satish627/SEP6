import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase";


function SignUpForm() {


    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    };



    const SignIn =  () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                alert("User created")
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
            });
    };
    return (
        <div>
            { <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Sign up here!!!</h2>
                                    <p className=" mb-5">Please enter a username and password!</p>
                                    <div className="mb-2">
                                        { <Form onClick={SignIn}>
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
                                                    placeholder="Enter your password"
                                                    onChange={handlePasswordChange}
                                                    value={password} />
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="secondary" type="submit" >
                                                    Signup
                                                </Button>
                                            </div>
                                        </Form> }
                                       
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
            </Container> }
          
        </div>
    )
}
export default SignUpForm;