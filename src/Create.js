import React, { useState } from 'react';
import './Create.css'
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';


function Create(props)
{
    const [showConfetti, setShowConfetti] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    function handleSave()
    {
        // do something when the "Save" button is clicked
        setShowConfetti(true);
    }


    function handleSubmit(event)
    {
        event.preventDefault();
        const newPost = {
            title: title,
            content: content,
        };
        props.addPost(newPost);
        navigate('/posts');
    }

    function handleKeyDown(event)
    {
        if (event.keyCode === 13 && event.metaKey)
        {
            handleSubmit(event);
        }
    }

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                height: '100vh',

            }}
        >
            <div className="container rounded p-4 bg-light shadow-lg">
                <h1>Create Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            className="form-control"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content:</label>
                        <textarea
                            id="content"
                            className="form-control"
                            value={content}
                            onChange={(event) => setContent(event.target.value)}
                            onKeyDown={handleKeyDown}
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => { handleSave(); setShowConfetti(true); }}>
                        Save
                    </button>
                    <Confetti numberOfPieces={200} run={showConfetti} />
                </form>
            </div>
        </div>
    );
}

export default Create;
