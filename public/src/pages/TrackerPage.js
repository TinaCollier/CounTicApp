import { useState } from 'react';
import { TypeList } from "../components/trackerPage/TypeList";
import { 
    Row,
    Col,
    CardGroup,
    Button
} from 'reactstrap';
import AddCard from './AddCard';
import { DisplayCards } from '../components/DisplayCards';

function TrackerPage() {
    const [ addCardVisible, setAddCardVisible ] = useState( false );
    const [ types, setTypes ] = useState( [] );
    const [ allCards, setAllCards ] = useState( [] );
    const handleClick = e => {
        console.log('trackerpage', allCards[0])
    }
    return (
        <div id="tracker-page">
            <div id="sidebar">
                <Button onClick={handleClick}>all cards [0]</Button>
                <Button onClick={() => console.log(allCards)}>all cards</Button>
                <TypeList types={ types } setTypes={ setTypes } />
                { addCardVisible ? 
                <AddCard setAddCardVisible={ setAddCardVisible } types={ types } allCards={ allCards } setAllCards={ setAllCards } /> 
                : 
                <div style={{ padding: "15px 20px"}}>
                    <Button onClick={ () => setAddCardVisible( true ) }>Add New</Button> 
                </div>
                }
            </div>
            <div id="cardArea">
                <DisplayCards allCards={ allCards } types={ types }/>                   
            </div>
        </div>
    )
}

export default TrackerPage;