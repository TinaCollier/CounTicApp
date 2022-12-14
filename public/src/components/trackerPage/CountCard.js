import {
    Card,
    CardTitle,
    CardText,
    Button,
    CardHeader,
    CardBody,
    CardFooter
} from 'reactstrap';

function CountCard() {
    return (
        <Card
        className="my-2"
        style={{
            width: '18rem'
        }}
        >
        <CardHeader>
            Header
        </CardHeader>
        <CardBody>
            <CardTitle tag="h5">
            Special Title Treatment
            </CardTitle>
            <CardText>
            With supporting text below as a natural lead-in to additional content.
            </CardText>
            {/* <Button>
            Go somewhere
            </Button> */}
        </CardBody>
        <CardFooter>
            Footer
        </CardFooter>
    </Card>
    )
}

export default CountCard;