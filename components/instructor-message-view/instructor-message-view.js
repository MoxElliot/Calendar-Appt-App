
import React from 'react';
import MessageViewSelect from './message-view-select';
import InstructormessageTable from './instructor-message-table';
import MessageViewControls from './message-view-controls';

export default function InstructorMessageView () {
    return (
      
            <div className="messageContainer">
                <div className="viewSelect">
                    <p className="messageViewSelectHeader">Instructor Message View </p>
                    <MessageViewSelect />
                </div>
                <div className="messageTable">
                    <InstructormessageTable />
                </div>
                <div className="messageControl">
                    <MessageViewControls />
                </div>
            </div>
    )
}