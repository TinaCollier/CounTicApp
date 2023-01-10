import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback,
    FormText
} from 'reactstrap';
import { 
    useState, 
    useContext 
} from 'react';
import { 
    validateEmail, 
    validatePassword, 
    validateUsername, 
    confirmPasswords 
} from './Validation';
import UserContext from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
    const { id, setId, name, setName, setPassword, setEmail, setEventHistory, setLoggedIn } = useContext( UserContext );
    const [ signUpId, setSignUpId ] = useState( Date.now() );
    const [ signUpEmail, setSignUpEmail ] = useState( '' );
    const [ signUpUsername, setSignUpUsername ] = useState( '' );
    const [ signUpPassword, setSignUpPassword ] = useState( '' );
    const [ signUpConfirmPassword, setSignUpConfirmPassword ] = useState( '' );
    const [ formCompleted, setFormCompleted ] = useState( false );
    const [ submitted, setSubmitted ] = useState( false );
    const navigate = useNavigate();

    const handleEmail = e => {
        setSignUpEmail( e.target.value );
        setSubmitted( false );
    }
    const handleUsername = e => {
        setSignUpUsername( e.target.value );
        setSubmitted( false );
    }
    const handlePassword = e => {
        setSignUpPassword( e.target.value );
        setSubmitted( false );
    }
    const handleConfirmPassword = e => {
        setSignUpConfirmPassword( e.target.value );
        setSubmitted( false );
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(signUpEmail)
        setId( signUpId );
        setName( signUpUsername );
        setEmail( signUpEmail );
        setPassword( signUpPassword );
        setEventHistory( [] );
        setLoggedIn( true );
        navigate( '/' );
    }

    const checkPasswords = signUpConfirmPassword.length > 0 ? confirmPasswords( signUpPassword, signUpConfirmPassword ) : false;

    return (
        <Form onSubmit={ handleSubmit } >
            <FormGroup>
                <Label
                for="exampleSignUpEmail"
                hidden
                >
                Username
                </Label>
                <Input
                id="exampleSignUpEmail"
                name="email"
                placeholder="Email"
                type="email"
                value={ signUpEmail }
                onChange={ handleEmail }
                valid={ validateEmail( signUpEmail ) }
                />
                <FormFeedback >Invalid Email</FormFeedback>
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                for="exampleUsername"
                hidden
                >
                Username
                </Label>
                <Input
                id="exampleUsername"
                name="text"
                placeholder="Username"
                type="text"
                value={ signUpUsername }
                onChange={ handleUsername }
                valid={ validateUsername( signUpUsername ) }
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                for="examplePassword"
                hidden
                >
                Password
                </Label>
                <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                value={ signUpPassword }
                onChange={ handlePassword }
                valid={ validatePassword( signUpPassword ) }
                />
                            <FormText>
            Password must contain at least one uppercase, one lowercase, one digit, one special symbol, and be more than 7 characters
            </FormText>
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                for="exampleConfirmationPassword"
                hidden
                >
                Password
                </Label>
                <Input
                id="exampleConfirmationPassword"
                name="exampleConfirmationPassword"
                placeholder="Confirm Password"
                type="password"
                value={ signUpConfirmPassword }
                onChange={ handleConfirmPassword }
                valid={ checkPasswords }
                />

            </FormGroup>
            {' '}
            <Button type="submit">
                Submit
            </Button>
        </Form>
    )
}