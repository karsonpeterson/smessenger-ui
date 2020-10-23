import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

interface Props {
    greeting: string;
}


const LoginForm: React.FC<Props> = ({ greeting }) => {
    return (
        <Container style={{height: '80vh'}}>
            <Row className="justify-content-center align-items-center" style={{ height: '100%'}}>
                <Col lg={6} sm={10}>
                    <Card style={{ width: '100%' }}>
                        <Card.Header as="h5">{ greeting }</Card.Header>
                        <Card.Body>
                            <input type="text" className="form-control" placeholder="Username"/>
                            <input type="password" className="form-control mt-2" placeholder="Password"/>
                            <Button variant="primary" className="mt-2">Login</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;