import React from "react";
import { useSelector } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import TrelloList from './TrelloList';

const style = {
    listContainer : {
        display:'flex',
        flexDirection:'row'
    }
};

const Home = () => {
    const lists = useSelector(state => state.lists);

    return (
        <div style={style.listContainer}>
            {
                lists?.map(list => (
                    <TrelloList
                        listId={list?.id}
                        title={list?.title}
                        cards={list?.cards}
                    />
            ))
            }
            <TrelloActionButton list />
        </div>
    )
}

export default Home;