import {
    Card,
    ListGroup,
    ListGroupItem,
    CardHeader,
    Button,
    CardFooter,
} from 'reactstrap';

function CountCard({ types }) {
    const listTypes = () => {
        const currentTypes = types.map( type => {
            console.log('types', type);
            const name = type.name;
            const color = type.color;
            return (
                <Button color={ color } >{ name }</Button>
            )
        })
    }
    const handleClick = e => {
        listTypes();
    }
    return (
        <div style={{ maxWidth: "500px", padding: "15px 20px"}}>
            <Card
            className="my-2"
            style={{
                width: "300px"

            }}
            >
            <CardHeader>
                Name of what is being counted 
            </CardHeader>
                <ListGroup flush>
                    <ListGroupItem>description</ListGroupItem>
                    <ListGroupItem>count</ListGroupItem>
                    <div>
                        <Button id="littleButton">-</Button>
                        {' '}

                        {' '}
                        <Button id="littleButton">+</Button>
                        </div>
                </ListGroup>
            <CardFooter>
                <Button onClick={ handleClick }>click me</Button>

            </CardFooter>
        </Card>
    </div>
    )
}

export default CountCard;