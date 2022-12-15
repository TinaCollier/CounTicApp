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

export const TypeList = ({ types, setTypes }) => {
    // const [ types, setTypes ] = useState( [] );
    const [ type, setType ] = useState( '' );
    const [ active, setActive ] = useState( false );

    const addType = ( type ) => {
        const typesList = types;
        typesList.push( { id: Date.now(), name: type, color: "white", selected: 0 } );
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
            const id = type.id;
            const color = type.color;
            const name = type.name;
            const selected = type.selected;
            return (
                <ListGroupItem key={ id } color={ color } style={{ display: "flex" }}>
                    <img style={{ height:20,  }} src={ colorWheel } alt="Color Wheel" onClick={ () => toggleColors( id ) } />
                    &nbsp;
                    { name }
                    &nbsp;
                    <Badge pill >{ selected }</Badge>
                    <CloseButton style={{ marginLeft: "auto" }} onClick={ handleRemoveType } id={ id }/>
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

    const toggleColors = ( id ) => {
        active ? setActive( false ) : setActive( true );
        types.map( type => {
            if ( type.id === id ){
                if ( type.color === "white" ) {
                    type.color = "success";
                } else if ( type.color === "success" ) {
                    type.color = "info";
                } else if ( type.color === "info" ) {
                    type.color = "warning";
                } else if ( type.color === "warning" ) {
                    type.color = "danger";
                } else if ( type.color === "danger" ) {
                    type.color = "white";
                }
            }
        });
    }

    return (
        <ListGroup flush>
            <ListGroupItem>
                Types
            </ListGroupItem>
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