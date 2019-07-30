const initialState = [
    {
        title: "Last Episode",
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
                text: "last text"
            }
        ]
    }
]


const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listsReducer;