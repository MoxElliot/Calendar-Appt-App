

export default function MessageViewControls() {

    return (
        <div className="messageViewControlContainer">
            <form className="messageViewControl">
                <div className="messageViewSubmitContainer">
                    <button className="messageViewSubmit">
                        Delete Message
                    </button>
                </div>
                <div className="showMessageDD">
                    <div><p>Arr0</p></div>
                    <select name="showMessage" id="showMessage">
                        <option defaultValue="Show 5 Messages">Show 5 Messages</option>
                        <option value="Show 10 Messages">Show 10 Messages</option>
                        <option value="Show 15 Messages">Show 15 Messages</option>
                        <option value="Show 20 Messages">Show 20 Messages</option>
                    </select>
                    <div>
                        <p>Arr0</p>
                    </div>
                    <div className="showMessagePageDisplay">
                    <p>Page 1 of 3</p>
                    </div>
                </div>
            </form>
        </div>
    )
}