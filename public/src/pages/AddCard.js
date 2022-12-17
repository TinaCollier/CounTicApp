import { useState } from 'react';
import { 
    Card,
    CardHeader,
    CardBody,
    CardText,
    FormGroup,
    Input,
    Label,
    Form
} from 'reactstrap';

const AddCard = ({ types }) => {
    const [ color, setColor ] = useState( "white" );
    const [ showTypes, setShowTypes ] = useState( false );
    const radioTypes = e => {
        console.log('radiotypes', types)
        return types.forEach( type => {
            const id = type.id;
            const name = type.name;
            console.log('type', name)
            return (
                <p key={id}>{name}</p>
            )
        });
    }

    const handleOnChangeValue = e => {
        setColor( e.target.value );
    }

    return (
        <Card 
        onMouseOver={ () => showTypes ? setShowTypes( false ) : setShowTypes( true ) }
        color={ color }
        >
            <CardHeader>
                Add Card Component
            </CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Input
                            placeholder="Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        placeholder="Description"
                        type="textarea"
                        name="text"
                        />
                    </FormGroup>
                    <FormGroup><legend>Select Type:</legend></FormGroup>

                    { types.map( type => {
                        const name = type.name;
                        const id = type.id;
                        const typeColor = type.color;

                        return (
                            <FormGroup
                            key={ id }
                            check
                            inline
                            >
                                <Input 
                                name="type"
                                type="radio" 
                                value={ typeColor }
                                onChange={ handleOnChangeValue }
                                />
                                <Label check>
                                { name }
                                </Label>
                            </FormGroup>
                        )
                    })}
                </Form>
                <button onMouseOver={ () => showTypes ? setShowTypes( false ) : setShowTypes( true ) }>Add Card</button>
            </CardBody>
        </Card>
    )
}

export default AddCard;