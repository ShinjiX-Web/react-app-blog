import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

function PostView(props)
{
    const { post } = props.location.state;

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <Helmet>
                <title>{post.title} - Blog</title>
            </Helmet>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="text-white">{post.title}</h2>
                    <p className="text-white">{post.content}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default PostView;
