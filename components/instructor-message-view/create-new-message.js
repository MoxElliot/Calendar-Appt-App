import React from 'react';
import Head from 'next/head';

export default function CreateNewMessage({handleNewMessage}) {

    return (
        <div className="new-message-modal__container">

            <Head className="new-message-modal__head">
                <title>Create New Message</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <div className="new-message-modal__body">
                <label htmlFor="message-subject">Subject: </label>
                <input 
                    className="new-message-modal__subject" 
                    name="message-subject"
                    type="text" />
            </div>

            <div className="new-message-modal__controls">
                <button className="new-message-modal__submit-btn">
                    Submit
                </button>
                
                <button
                    className="new-message-modal__cancel-btn"
                    onClick={handleNewMessage}
                >
                    Cancel
                </button>

            </div>
        </div>
    )
}