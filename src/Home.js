import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import musicSrc from './music.mp3';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home()
{
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    function handleAudioClick()
    {
        setIsPlaying(!isPlaying);
        if (audioRef.current.paused)
        {
            audioRef.current.play();
        } else
        {
            audioRef.current.pause();
        }
    }

    return (
        <Container fluid className="home-container" style={{ height: '80vh' }}>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-169Qw6bWrWpE0SxP-hRXhsXpZdcCakYhuFxND-B2G8Hod9Cj_FDryOvN8NBfzgLXBwE&usqp=CAU"
                        width={200}
                        roundedCircle
                        className="image"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="home-header" style={{ marginTop: '50px' }}>
                        Welcome Kodego Bootcampers!
                    </h1>
                    <p className="home-text">
                        The latest trends and updates on Web Programming Languages.
                    </p>
                    <audio ref={audioRef} src={musicSrc} />
                    <button onClick={handleAudioClick} className="play-button">
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />Play Me
                    </button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
