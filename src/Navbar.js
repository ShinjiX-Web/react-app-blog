import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

function Navbar()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Nate's Blog
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/posts">
                                Posts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">
                                Create
                            </Link>
                        </li>
                    </ul>
                    <Form className="d-flex">
                        <InputGroup>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="bg-light text-dark border-0"
                                id='mySearch'
                                aria-label="Search"
                            />
                            <Button variant="outline-success" type="submit" className='search-btn'>
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;