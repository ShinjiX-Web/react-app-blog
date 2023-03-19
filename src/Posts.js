import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Posts.css';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

function Posts(props)
{
    const { posts, deletePost } = props;

    function handleDelete(index)
    {
        deletePost(index);
    }

    return (
        <Container className="d-flex flex-column align-items-center">
            <Helmet>
                <title>Blog - Posts</title>
            </Helmet>
            <h1 className="text-white">Posts</h1>
            <Row className="justify-content-center">
                <Col md={8} className="flex-grow-1">
                    <ListGroup variant="flush">
                        {posts.map((post, index) => (
                            <ListGroup.Item key={index} className="text-start">
                                <Link
                                    to={{
                                        pathname: `/view/${index}`,
                                        state: { post: post },
                                    }}
                                    className="titles"
                                >
                                    {post.title}
                                </Link>
                                <p>{post.content}</p>
                                <div className="btn-links">
                                    <Link to={{ pathname: `/view/${index}`, state: { post: post } }}>
                                        <Button>View</Button>
                                    </Link>
                                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            <Button>
                <Link to="/create" className="text-start" id="create">
                    Create Post
                </Link>
            </Button>
        </Container>
    );
}

export default Posts;