import { 
    useState,
    useContext
} from 'react';
import UserContext from "../context/UserContext";
import { SignUpCard } from '../components/account/SignUpCard';

function CreateAccount() {
    const { id, setId, name, setName, setPassword, setEventHistory, setLoggedIn } = useContext( UserContext );
    const handleClick = () => {
        console.log( id )
    }
    return (
        <div id="create-account-page">
            <SignUpCard />
        </div>
    )
};

export default CreateAccount;