import React from "react";
import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";
const style = {
    container : {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width:300,
        marginRight:8,
        padding: 8,
    }
};

const TrelloList = ({
    listId,
    title,
    cards,
}) => {
    const isDeleteList = {listId: listId};
    return (
        <div style={style.container}>
            {title}
            {cards?.map(card => (
                <TrelloCard 
                    cardId={card?.id}
                    data={card?.data}
                    listId={card?.list_id}
                />
            ))
            }
        <TrelloActionButton listID={listId}/>
        <TrelloActionButton isDeleteList={isDeleteList}/>
        </div>
    )
}
export default TrelloList;
