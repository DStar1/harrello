import { CONSTANTS } from "../actions";
import { CardMedia } from "@material-ui/core";

let listID = 2;
let cardID = 3;

const initialState = [
    {
        title: "First Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "created a static list/card"
            },
            {
                id: 1,
                text: "mixed material UI and styled components"
            }
        ]
    },
    {
        title: "This Episode",
        id: 1,
        cards: [
            {
                id: 0,
                text: "second"
            },
            {
                id: 1,
                text: "yeppi more text"
            },
            {
                id: 2,
                text: "not last text"
            }
        ]
    }
]




const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            };
            cardID += 1

            console.log("Action recieved", action);

            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;
        default:
            return state;
    }
};

export default listsReducer;