import { CONSTANTS } from "../actions";
import { CardMedia } from "@material-ui/core";

let listID = 2;
let cardID = 6;

const initialState = [
    {
        title: "First Episode",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "created a static list/card"
            },
            {
                id: `card-${1}`,
                text: "mixed material UI and styled components"
            }
        ]
    },
    {
        title: "This Episode",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "second"
            },
            {
                id: `card-${3}`,
                text: "yeppi more text"
            },
            {
                id: `card-${4}`,
                text: "not last text"
            },
            {
                id: `card-${5}`,
                text: "not last text 3"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST: {
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID += 1
            return [...state, newList];
        }

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
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
        }

        case CONSTANTS.DRAG_HAPPENED: {

            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                droppableId
            } = action.payload;
            const newState = [...state];

            // In the same list
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState;
        }

        default:
            return state;
    }
};

export default listsReducer;