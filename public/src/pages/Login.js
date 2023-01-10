import { 
    useState,
    useContext
} from 'react';
import UserContext from "../context/UserContext";
import { SignUpCard } from '../components/account/SignUpCard';
import { SignInCard } from '../components/account/SignInCard';

function LogIn() {
    const [ existingUser, setExistingUser ] = useState( false );
    const [ logIn, setLogIn ] = useState( true );

    return (
        <div id="create-account-page">
            { logIn ? <SignInCard existingUser={ existingUser } setExistingUser={ setExistingUser } setLogIn={ setLogIn } /> : <SignUpCard  existingUser={ existingUser } setExistingUser={ setExistingUser } setLogIn={ setLogIn } />}
        </div>
    )
};

export default LogIn;