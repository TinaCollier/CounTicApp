import { TypeList } from "../components/trackerPage/TypeList";
import { 
    Row,
    Col,
    CardGroup
} from 'reactstrap';
import CountCard from "../components/trackerPage/CountCard";

function TrackerPage() {

    return (
        <div>
            <h1>title: tracker page</h1>
            <Row>
                <Col xs="3">
                <TypeList />
                </Col>
                <Col xs="auto">
                <CardGroup>
                    <CountCard />

                </CardGroup>
                </Col>
            </Row>
        </div>
    )
}

export default TrackerPage;