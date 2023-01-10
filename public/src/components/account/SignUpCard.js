import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    CardLink,
    ListGroup,
    ListGroupItem,
    Button,
    CardSubtitle
} from 'reactstrap';
import { SignUpForm } from './SignUpForm';

export const SignUpCard = ({ setExistingUser, setLogIn }) => {
    return (
        <Card
            className="my-2"
            style={{
                width:"34rem"
            }}
        >
            <CardHeader>
                <CardTitle tag="h5">
                        Sign Up
                </CardTitle>
                <CardSubtitle  
                className="text-muted"
                >
                    Already registered? {' '}
                    <CardLink 
                    style={{ textDecoration: "none" }}
                    onClick={ () => setLogIn( true )}
                    >
                        Sign In
                    </CardLink>
                </CardSubtitle>
            </CardHeader>
            <CardBody>
            <SignUpForm />
            </CardBody>
            <CardFooter>
                footer
            </CardFooter>
        </Card>
    )
}