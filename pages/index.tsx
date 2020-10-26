import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { NextPage } from 'next';
import LoginForm from '../components/auth/LoginForm';
import { withApollo } from '../lib/apollo';

const IndexPage: NextPage = () => {
    return (
        <Container fluid="xl">
            <LoginForm greeting="Login"/>
        </Container>
    );
}

const IndexPageWithApollo = withApollo(IndexPage);

export default IndexPageWithApollo;