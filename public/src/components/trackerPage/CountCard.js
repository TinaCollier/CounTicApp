import {
    Card,
    ListGroup,
    ListGroupItem,
    CardHeader,
    CardBody,
    CardFooter,
    CardLink,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from 'reactstrap';

function CountCard({ types }) {
    const listTypes = () => {
        const currentTypes = types.map( type => {
            console.log('types', type);
            const name = type.name;
            const color = type.color;
            return (
                <button color={ color } >{ name }</button>
            )
        })
    }
    const handleClick = e => {
        listTypes();
    }
    return (
        <Card
        className="my-2"
        style={{
            width: '18rem'
        }}
        >
        <CardHeader>
            Name of what is being counted
        </CardHeader>
            <ListGroup flush>
                <ListGroupItem>description</ListGroupItem>
                <ListGroupItem>count</ListGroupItem>
                <button>-</button><button>+</button>
            </ListGroup>
        <CardFooter>
            <button onClick={ handleClick }>click me</button>
            { listTypes() }
        </CardFooter>
    </Card>
    )
}

export default CountCard;