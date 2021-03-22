import { combineReducers } from "redux";
import {ACTION_TYPES} from '../actions/actionTypes';
const initial_state = [];

//list reducer

const lists = (state = initial_state, action) => {

    switch (action.type) {
        case ACTION_TYPES.ADD_LIST:
            const { title } = action.payload;
            const newList = {
                id: action.payload.id,
                title: title,
                cards:[],
                }
            return [
                ...state,
                newList
        ]
        case ACTION_TYPES.DELETE_LIST:
            const newState = state.filter(({id}) => id !== action.payload);
            return newState; 

        case ACTION_TYPES.ADD_CARD:

            const { listID, data} = action.payload;
            const newCard = {
                id: action.payload.id,
                list_id: listID,
                data: data,
                };
    
            const modifiedState = state.map(list => {
                if(list?.id === listID){
                    return {
                        ...list,
                        cards: [ ...list?.cards, newCard]
                    }
                }else{
                    return list;
                }})
    
            return modifiedState; 

        case ACTION_TYPES.EDIT_CARD:

            const list = state.find(({id}) => id === action.payload?.list_Id);
               
            if (list) {
                const card  = list.cards.find(({id})=>id===action.payload?.card_Id)
                card.data = action.payload.data;
                const filteredState = state.map(list => {
                    if (list.id === action.payload?.list_Id) {
                        const filteredcards = list.cards.filter(({id})=>id !== action.payload?.card_Id);
                        return { 
                            ...list,
                            cards:[ ...filteredcards, card] 
                        }
                    }else{
                        return list;
                    }
                })
                
                return filteredState; 
            }
            return state

        case ACTION_TYPES.DELETE_CARD:
            const buffer = state.find(({id}) => id === action.payload?.list_Id)
            if (buffer) {
                const filteredcards = buffer.cards.filter(({id})=>id !== action.payload?.card_Id);
                console.log(filteredcards)
                const newState = state.map(list => {
                    if(list?.id === action.payload?.list_Id){
                        return {
                            ...list,
                            cards: filteredcards
                        }
                    }else{
                        return list;
                    }})
        
                return newState; 
            }
            return state
        default:
            return state;
    
}
}


export default combineReducers({lists});