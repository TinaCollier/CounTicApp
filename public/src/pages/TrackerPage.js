import { useState } from 'react';
import { TypeList } from "../components/trackerPage/TypeList";
import { 
    Row,
    Col,
    CardGroup
} from 'reactstrap';
import CountCard from "../components/trackerPage/CountCard";
import AddCard from './AddCard';

function TrackerPage() {

    const [ types, setTypes ] = useState( [] );
    const handleClick = e => {
        console.log('trackerpage', types)
    }
    return (
        <div>
            <h1>Main Page</h1>
            {/* <button onClick={ handleClick }>click me</button> */}
            <Row>
                <Col xs="3">
                <TypeList types={ types } setTypes={ setTypes } />
                </Col>
                <Col>
                    <AddCard types={ types } />
                </Col>
            </Row>
            <Row>
            <Col xs="auto">
                <CardGroup>
                    <CountCard types={ types } setTypes={ setTypes } />

                </CardGroup>
                </Col>
            </Row>
        </div>
    )
}

export default TrackerPage;