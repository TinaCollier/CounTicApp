import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


export const HomeMessage = () => {
    const navigate = useNavigate();
    return (
        <div id="home-message">
            <h1>CounTic Event Tracker</h1>
            <br />
            <p>A quick and easy way to track events in the classroom, at home, or on the go.</p>
            <br />
            <p>Log In to try it out!</p>
            <Button onClick={ () => navigate( '/login' )}>Log In</Button>
        </div>
    )
}