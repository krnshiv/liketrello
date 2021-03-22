import {ACTION_TYPES} from './actionTypes';
const uuid = require('uuid').v4;

export const addList = ({title}) => {
    return (dispatch, getState) => {
        const id = uuid();
        return dispatch({ type: ACTION_TYPES.ADD_LIST, payload:{title, id}})
    };
};
export const deleteList = (obj) => {
    return (dispatch, getState) => {
        return dispatch({ type: ACTION_TYPES.DELETE_LIST, payload: obj.listId })
    };
};
export const addCard = ({data, listID}) => {
    return (dispatch, getState) => {
        const id = uuid();
        return dispatch({ type: ACTION_TYPES.ADD_CARD, payload: {data, listID, id}})
    };
};
export const updateCard = (obj) => {
    return (dispatch, getState) => {
        return dispatch({ type: ACTION_TYPES.EDIT_CARD, payload: {data:obj.newdata, list_Id: obj.list_Id, card_Id: obj.card_Id}})
    };
};
export const deleteCard = (obj) => {
    return (dispatch, getState) => {
        return dispatch({ type: ACTION_TYPES.DELETE_CARD, payload: {list_Id: obj.list_Id, card_Id: obj.card_Id}})
    };
};
