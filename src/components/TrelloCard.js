import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import TrelloActionButton from "./TrelloActionButton";

const style = {
    cardContainer : {
        marginBottom: 8,
    }
};
const TrelloCard = ({
    cardId,
    data,
    listId,
}) => {
    const isDelete = {status: true, card_Id:cardId, list_Id: listId };
    return (
        <Card style={style.cardContainer}>
            <CardContent>
                <Typography gutterbuttom> {data} </Typography>
            </CardContent>
            <TrelloActionButton card_Id={cardId} list_Id={listId} />
            <TrelloActionButton 
            isDelete={isDelete}
             />
        </Card>
    )
}
export default TrelloCard;
