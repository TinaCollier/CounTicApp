import {
    useContext
} from 'react';
import UserContext from "../context/UserContext";

function HomePage() {
    const { id, name, email, password, eventHistory, loggedIn } = useContext( UserContext );
    return (
        <div id="home-container">
            <div id="home-main">
            </div>
            <div id="home-message">
                    <h1>some text</h1>
                    <br />
                    <p>some more text</p>
                    <button onClick={ () => console.log( id, name, email, password, eventHistory, loggedIn )}>app context</button>
                </div>
            <div id="home-image"></div>
        </div>
    )
};

export default HomePage;