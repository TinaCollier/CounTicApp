import {
    useContext
} from 'react';
import UserContext from "../context/UserContext";
import {
    Link
} from 'react-router-dom';

export const WelcomeMessage = () => {
    const { id, name, email, password, eventHistory, loggedIn } = useContext( UserContext );
    return (
        <div id="home-message">
            <h1>Welcome, { name }</h1>
            <p>List open events here</p>
            <p>tracking page link</p>
            <Link to="/trackerpage">Tracking Page</Link>
            <p>completed events page link</p>
        </div>
    )
}