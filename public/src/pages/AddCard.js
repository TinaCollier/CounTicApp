import { 
    useState,
    useEffect 
} from 'react';
import { 
    Card,
    CardHeader,
    CardBody,
    CardText,
    FormGroup,
    Input,
    Label,
    Form,
    Button
} from 'reactstrap';

const AddCard = ({ types, addCardVisible, setAddCardVisible, allCards, setAllCards }) => {
    const [ color, setColor ] = useState( "white" );
    const [ date, setDate ] = useState( '' );
    const [ cardName, setCardName ] = useState( '' );
    const [ cardDescription, setCardDescription ] = useState( '' );
    const [ type, setType ] = useState( '' );
    const [ log, setLog ] = useState( [] );
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(date, cardName, cardDescription, type)
        const newEvent = {
            id: Date.now(),
            date: date,
            cardName: cardName,
            cardDescription: cardDescription,
            type: type,
            log: log
        }
        const collection = [ ...allCards, newEvent ];
        setAddCardVisible( false );
        setAllCards( collection );
    }
    
    return (
        <div style={{
            maxWidth: "450px", 
            padding: "15px 20px" 
            }}>
        <Card 
        >
            <CardHeader>
                Add Card Component
            </CardHeader>
            <CardBody>
                <Form onSubmit={ handleSubmit }>
                    <FormGroup >
                        <Label for="exampleDate">
                        Date
                        </Label>
                        <Input
                        id="exampleDate"
                        name="dateCardCreated"
                        placeholder="date"
                        type="date"
                        onChange={ ( e ) => setDate( e.target.value ) }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                        placeholder="Name"
                        type="textarea"
                        name="text"
                        onChange={ ( e ) => { setCardName( e.target.value ) } }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        placeholder="Description"
                        type="textarea"
                        name="text"
                        onChange={ ( e ) => setCardDescription( e.target.value )}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="type">
                            Type
                        </Label>
                        <Input 
                            id="typeSelect"
                            name="select"
                            type="select"
                            placeholder="Select Type"

                            onChange={ ( e ) => setType( e.target.value ) }
                        >
                            <option>Select Type</option>
                    { types.map( type => {
                        const name = type.name;
                        const id = type.id;
                        return (
                            <option key={ id }>{ name }</option>
                        )
                    })}
                    </Input>
                    </FormGroup>
                    <Button type="submit" disabled={ !date || !cardName || !cardDescription || !type }>
                        Submit
                    </Button>
                </Form>

            </CardBody>
        </Card>
        </div>
    )
}

export default AddCard;