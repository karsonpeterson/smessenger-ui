import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const SignupForm: React.FC = () => {
    return (
        <Container style={{ height: '80vh'}}>
            <Row className="justify-content-center align-items-center" style={{ height: '100%'}}>
                <Col lg={6} sm={10}>
                    <Card style={{ width: '100%'}}>
                        <Card.Header as="h5">Sign Up</Card.Header>
                        <Card.Body>
                            <input type="text" className="form-control" placeholder="Username"/>
                            <input type="email" className="form-control mt-2" placeholder="Email"/>
                            <input type="password" className="form-control mt-2" placeholder="Password"/>
                            <input type="text" className="form-control mt-2" placeholder="Profile Picture URL"/>
                            <Button variant="primary" className="mt-2">Create Account</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default SignupForm;