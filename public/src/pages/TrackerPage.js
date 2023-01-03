import { useState } from 'react';
import { TypeList } from "../components/trackerPage/TypeList";
import { 
    Row,
    Col,
    CardGroup,
    Button
} from 'reactstrap';
import CountCard from "../components/trackerPage/CountCard";
import AddCard from './AddCard';

function TrackerPage() {
    const [ addCardVisible, setAddCardVisible ] = useState( false );
    const [ types, setTypes ] = useState( [] );
    const [ allCards, setAllCards ] = useState( [] );
    const handleClick = e => {
        console.log('trackerpage', types)
    }
    return (
        <div id="mainPage">
            <div id="sidebar">
                <Button onClick={() => console.log(allCards)}>push me</Button>
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
                <CardGroup style={{ padding: "15px 15px" }}>
                    <CountCard types={ types } setTypes={ setTypes } />
                    <CountCard types={ types } setTypes={ setTypes } />
                    <CountCard types={ types } setTypes={ setTypes } />
                    <CountCard types={ types } setTypes={ setTypes } />
                    <CountCard types={ types } setTypes={ setTypes } />
                    <CountCard types={ types } setTypes={ setTypes } />
                </CardGroup>                    

            </div>
        </div>
    )
}

export default TrackerPage;