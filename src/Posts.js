
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Posts.css';
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

function Posts(props)
{
    const [showConfetti, setShowConfetti] = useState(false);
    const { posts, deletePost } = props;

    function handleDelete(index)
    {
        deletePost(index);
    }

    function handleSave()
    {
        // do something when the "Save" button is clicked
        setShowConfetti(true);
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
            <Container className='secondary-container'>
                <Button onClick={() => { handleSave(); setShowConfetti(true); }}>
                    Show Party
                </Button>
                <Confetti numberOfPieces={200} run={showConfetti} />
                <Button>
                    <Link to="/create" className="text-start" id="create">
                        Create Post
                    </Link>
                </Button>
            </Container>
        </Container>
    );
}

export default Posts;