import {
    Card,
    ListGroup,
    ListGroupItem,
    CardHeader,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    ButtonGroup,
    Button,
    CardFooter,
} from 'reactstrap';
import { useState } from 'react';
import { CompleteEvent } from './CompleteEvent';

function CountCard({ id, name, description, type, date, log, types }) {
    const cardType = types.find( item => item.name === type );
    const [ count, setCount ] = useState( 0 );
    const handleIncrement = () => {
        const today = new Date();
        log.push( {
            time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            action: 'increment'
        } );
        console.log(log)
        setCount( count + 1 );
    }
    const handleDecrement = () => {
        const today = new Date();
        log.push( {
            time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            action: 'decrement'
        } );
        console.log(log)
        setCount( count -1 );
    }
    const handleClick = e => {
        console.log('on this button click, complete the card event and remove card')
    }
    return (
        <div style={{ maxWidth: "500px", padding: "15px 20px"}}>
            <Card
            className="my-2"
            color={ cardType.color }
            style={{
                width: '18rem'

            }}
            >
                <CardHeader>
                    <CardTitle tag="h5">
                        Name: { name } 
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <CardSubtitle       
                    className="mb-2"
                    tag="h6"
                    >
                        { type }
                    </CardSubtitle>
                    <CardText>Description: { description }</CardText>
                    <CardText>Count: { ' ' } { ' ' } { ' ' }
                        <ButtonGroup>
                            <Button 
                            id="littleButton" 
                            onClick={ handleDecrement }
                            >-</Button>
                            <Button 
                            style={{ 
                                color: "black", 
                                fontWeight: "bolder"  
                                }} 
                            outline
                            >
                                { count }
                            </Button>
                            <Button 
                            id="littleButton" 
                            onClick={ handleIncrement }
                            >+</Button>
                        </ButtonGroup>
                    </CardText>
                </CardBody>
                <CardFooter>
                    <CompleteEvent />

                </CardFooter>
            </Card>
        </div>
    )
}

export default CountCard;