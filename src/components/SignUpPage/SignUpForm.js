import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase";
import { useNavigate } from "react-router-dom";

function SignUpForm() {

    const navigate = useNavigate();
    const auth = getAuth(app);
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errorMsg, setErrorMsg] = useState("")
    const [submitDisabled, setSubmitDisabled] = useState(false)

    const handleSubmission = () => {
        if (!values.email || !values.password) {
            setErrorMsg("Fill in all the fields")
            setSubmitDisabled(true)
            return
        }
        setErrorMsg("");
        // console.log(values)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then( (res) => {
                setSubmitDisabled(false)
                const user = res.user;
                console.log(user)
                //alert("User created successfully!!!")
                navigate("/")
            })
            .catch((err) => {

                setSubmitDisabled(true);
                setErrorMsg(err.message)
            })
    };
    return (
        <div>
            {<Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Sign up here!!!</h2>
                                    <p className=" mb-5">Please enter a username and password!</p>
                                    <div className="mb-2">
                                        {<Form >
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
                                                    placeholder="Enter your password"
                                                    onChange={(event) =>
                                                        setValues((prev) => ({ ...prev, password: event.target.value }))
                                                    } />
                                            </Form.Group>
                                            <b>{errorMsg}</b>
                                            <div className="d-grid">
                                                <Button variant="secondary" onClick={handleSubmission} disabled={submitDisabled}>
                                                    Signup
                                                </Button>
                                            </div>
                                        </Form>}

                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Already registered!
                                                <a href="/" className="text-primary fw-bold ms-2">
                                                    Login here                                                </a>
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
export default SignUpForm;