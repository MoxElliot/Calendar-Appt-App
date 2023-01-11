

export default function MessageViewSelect () {
    return (    
        <div className="radioContainer">
            <form className="radioForm">
                <label>
                    <input  type='radio'
                            value='Show All'
                    />
                    Show All
                </label>
                <label>
                    <input  type='radio'
                            value='Show Unread'
                    />
                    Show Unread
                </label>
                <label>
                    <input  type='radio'
                            value='Show Read'
                    />
                    Show Read
                </label>
            </form>
            
            <div className="messageViewNewMessageContainer">
                <button className="messageViewNewMessage">
                    New Message
                </button>
            </div>
        </div>
    )
}