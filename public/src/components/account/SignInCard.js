import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    CardLink,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { SignInForm } from './SignInForm';

export const SignInCard = ({ setExistingUser, setLogIn }) => {
    return (
        <Card
            className="my-2"
            style={{
                width:"34rem"
            }}
        >
            <CardHeader>
                <CardTitle tag="h5">
                        Sign In
                </CardTitle>
                <CardSubtitle className="text-muted">
                    Not registered yet? {' '}
                    <CardLink 
                    style={{ textDecoration: "none" }}
                    onClick={ () => setLogIn( false )}
                    >
                        Sign Up
                    </CardLink>
                </CardSubtitle>
            </CardHeader>
            <CardBody>
                <SignInForm />
            </CardBody>
            <CardFooter>
                footer
            </CardFooter>
        </Card>
    )
}