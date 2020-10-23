import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { NextPage } from 'next';
import LoginForm from '../components/auth/LoginForm';

const IndexPage: NextPage = () => {
    return (
        <Container fluid="xl">
            <LoginForm greeting="Login"/>
        </Container>
    );
}

export default IndexPage;