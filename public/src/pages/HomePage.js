import {
    useContext
} from 'react';
import UserContext from "../context/UserContext";
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { HomeMessage } from '../components/HomeMessage';
import { WelcomeMessage } from '../components/WelcomeMessage';

function HomePage() {
    const { id, name, email, password, eventHistory, loggedIn } = useContext( UserContext );

    return (
        <div id="home-container">
            <div id="home-main">
            </div>
            { loggedIn ? <WelcomeMessage /> : <HomeMessage />}
            <div id="home-image">
            </div>
        </div>
    )
};

export default HomePage;