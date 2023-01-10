import CountCard from "../components/trackerPage/CountCard";
import {
    CardGroup
} from 'reactstrap';

export const DisplayCards = ({ allCards, types }) => {
    const renderCards = allCards.map( card => {
        const id = card.id;
        const name = card.cardName;
        const type = card.type;
        const description = card.cardDescription;
        const date = card.date;
        const log = card.log;
        return (
            <CountCard 
            key={ id } 
            name={ name } 
            type={ type } 
            description={ description } 
            date={ date } 
            log={ log } 
            types={ types }/> 
        )
    })
    return (
        <CardGroup style={{ padding: "15px 15px" }}>
            { renderCards }
        </CardGroup> 
    )
}