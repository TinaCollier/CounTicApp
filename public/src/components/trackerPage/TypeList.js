import { useState } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Badge,
    InputGroup,
    Input,
    CloseButton,
} from 'reactstrap';

import colorWheel from '../images/colorwheel.png';

export const TypeList = () => {
    const [ types, setTypes ] = useState( [] );
    const [ type, setType ] = useState( '' );
    const colors = [ 'success', 'info', 'warning', 'danger' ];
    const [ colorIndex, setColorIndex ] = useState( 0 );
    const [ color, setColor ] = useState( "success" );

    const addType = ( type ) => {
        const typesList = types;
        typesList.push( { id: Date.now(), name: type} );
    }

    const handleChange = ( e ) => {
        e.preventDefault();
        setType( e.target.value );
    }

    const handleClick = ( e ) => {
        addType(type);
        e.preventDefault();
        setType( '' );
    }

    const renderTypes = () => {
        return types.map( ( type ) => {
            return (
                <ListGroupItem key={ type.id } color={ color } style={{ display: "flex" }}>
                    <img style={{ height:20,  }} src={ colorWheel } alt="Color Wheel" onClick={ toggleColors }/>
                    &nbsp;
                    { type.name }
                    &nbsp;
                    <Badge pill >1</Badge>
                    <CloseButton style={{ marginLeft: "auto" }} onClick={ handleRemoveType } id={ type.id }/>
                </ListGroupItem> 
            )
        });
    }

    const handleRemoveType = ( e ) => {
        const idToRemove = e.target.id;
        const updatedTypesList = types.filter( type => {
            return type.id != idToRemove
        } );
        setTypes( updatedTypesList );
    }

    const toggleColors = () => {
        if( colorIndex < colors.length ) {
            console.log('colorindex', colorIndex)
            setColor( colors[ colorIndex + 1 ]);
            setColorIndex( colorIndex + 1 );
        } else {
            console.log('colorindex', colorIndex)
            setColorIndex( 0 );
            setColor( colors[ 0 ] );
        }
    }

    return (
        <ListGroup flush>
            <ListGroupItem>
                Types
            </ListGroupItem>
            {/* <ListGroupItem color="success">
                Behavior{' '}
                <Badge pill>1</Badge>
            </ListGroupItem>
            <ListGroupItem color="info">
                Symptom{' '}
                <Badge pill>1</Badge>
            </ListGroupItem>
            <ListGroupItem color="warning">
                Reprimand{' '}
                <Badge pill>1</Badge>
            </ListGroupItem>
            <ListGroupItem color="danger">
                Compliment{' '}
                <Badge pill>1</Badge>
            </ListGroupItem> */}
            { types.length > 0 ? renderTypes() : <ListGroupItem>Add types</ListGroupItem>}
            <InputGroup>
                <Input 
                type="text"
                value={ type }
                onChange={ handleChange }
                />
                <button onClick={ handleClick }>
                    add type
                </button>
            </InputGroup>
        </ListGroup>
    )
}