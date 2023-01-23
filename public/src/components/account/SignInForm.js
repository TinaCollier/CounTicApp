import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { 
    useState } from 'react';
import { Users } from '../../context/Users';

export const SignInForm = () => {
    const [ signInEmail, setSignInEmail ] = useState( '' );
    const [ signInPassword, setSignInPassword ] = useState( '' );

    const handleEmail = e => {
        setSignInEmail( e.target.value );
    }
    const handlePassword = e => {
        setSignInPassword( e.target.value );
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log( signInEmail );
        // maybe console the users to check if they are being passed to the component
        // check for email, check password matches email

    }

    return (
        <Form onSubmit={ handleSubmit }>
            <FormGroup>
                <Label
                for="signInEmail"
                hidden
                >
                Email
                </Label>
                <Input
                id="signInEmail"
                name="email"
                placeholder="Email"
                type="email"
                value={ signInEmail }
                onChange={ handleEmail }
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                for="signInPassword"
                hidden
                >
                Password
                </Label>
                <Input
                id="signInPassword"
                name="password"
                placeholder="Password"
                type="password"
                value={ signInPassword }
                onChange={ handlePassword }
                />
            </FormGroup>
            {' '}
            <Button type="submit">
                Submit
            </Button>
        </Form>
    )
}