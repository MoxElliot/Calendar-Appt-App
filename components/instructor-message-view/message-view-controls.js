import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMessageData } from '../../redux/slices/messageDataSlice'
import CreateNewMessage from './create-new-message'


export default function MessageViewControls() {

    const [ newMessageModalToggle, setNewMessageModalToggle ] = useState(false);
    const dispatch = useDispatch();

    const handleNewMessage = () => {
        //dispatch(addNewMessageData)
        setNewMessageModalToggle(!newMessageModalToggle);
        console.log("hello new message", newMessageModalToggle)
    }

    if (newMessageModalToggle === true) {
        return (
            <CreateNewMessage handleNewMessage={handleNewMessage}/>
        )
    }

    return (
        
        <div className="message-view-control__container">
            <div className="message-view-control">

                <div className="message-view-control__new-container">
                    <button 
                        className="message-view-control__new-button"
                        onClick={handleNewMessage}
                    >
                        New Message
                    </button>
                </div>

                <div className="message-view-control__delete-container">
                    <button className="message-view-control__delete-button button">
                        Delete Message
                    </button>
                </div>
                
                <div className="showMessageDD">
                    
                    <select name="showMessage" id="showMessage">
                        <option defaultValue="Show 5 Messages">Show 5 Messages</option>
                        <option value="Show 10 Messages">Show 10 Messages</option>
                        <option value="Show 15 Messages">Show 15 Messages</option>
                        <option value="Show 20 Messages">Show 20 Messages</option>
                    </select>
                    
                    <div className="showMessagePageDisplay">
                        <div>
                            <button> Arr0 </button>
                        </div>
                            <p>Page 1 of 3 </p>
                        <div>
                            <button> Arr0 </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}