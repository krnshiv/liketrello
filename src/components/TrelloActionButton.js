import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Textarea from 'react-textarea-autosize';
import { addCard, addList, updateCard, deleteCard, deleteList } from '../actions';

const style = {
    buttonContainer : {
        display: "flex",
        alignItems: "centre",
        cursor:"pointer",
        borderRadius: 3,
        height: 36,
        width: 273,
        paddingLeft: 8,
    }
};



const TrelloActionButton = ({ list, listID, list_Id ,card_Id, isDelete=null,isDeleteList=null}) => {
    const [formOpen, openForm] = useState(false);
    const [text, setText] = useState('false');
    const dispatch = useDispatch();
    console.log(card_Id, list_Id)

    const handleMouseDown = (e) => {
        if(isDeleteList) return handleDeletelist(e); 
        if(isDelete) return handleDelete(e); 
        if (card_Id) return handleCardUpdate(e);
        if (list) return handleAddList(e) 
        return handleAddCard(e) 
    }
    const handleAddList = (e) => {
        if (text) dispatch(addList({title: text}))
        
    };
    const handleDeletelist = (e) => {
        if (isDeleteList){
            console.log(isDeleteList)
            const {listId} = isDeleteList;
            dispatch(deleteList({listId}))
        }
        
    };
    const handleDelete = (e) => {
        if (isDelete) {
            const {list_Id, card_Id} = isDelete;
            dispatch(deleteCard({list_Id, card_Id}))
        }
    };
    const handleAddCard = (e) => {
        if(text) dispatch(addCard({data: text, listID}))
    };
    const handleCardUpdate = (e) => {
        console.log(card_Id, list_Id)
        if(text) dispatch(updateCard({newdata: text,  list_Id, card_Id}))
    };

    const placeholder = list
        ? "Enter list title"
        : "Enter data for this card";
 
    const buttonTitle = list 
        ? "Add List" 
        : card_Id 
        ? "Edit card" 
        : isDelete  ? "Delete"
        : isDeleteList ? "Delete"
        :"Add card";

    const buttonText = list 
        ? "Add list" 
        : card_Id 
        ? "Edit card" 
        : isDelete  ? "Delete"
        : isDeleteList ? "Delete"
        :"Add card";


    return (
        <div >
            {formOpen ? (
                <div>
                    {( !isDelete  && !isDeleteList )&&(<Textarea 
                        placeholder={placeholder} 
                        autoFocus
                        onBlur={ (e) => { 
                            openForm(false)
                            } }
                        onChange={(e)=>{
                            setText(e.target.value)
                        }}/>)}
                    <Button variant="contained" color="primary" 
                        onMouseDown={(e)=>{handleMouseDown(e)}}>
                            {buttonTitle}
                    </Button>
                    <Button>close</Button>

                </div>
            ) : (
                <Button variant="contained" color="secondary"
                    style={style.buttonContainer} 
                    onClick={ () => {
                        openForm(true)
                }}>
                    {buttonText}
                </Button>
            )}

        </div>
    )
}

export default TrelloActionButton