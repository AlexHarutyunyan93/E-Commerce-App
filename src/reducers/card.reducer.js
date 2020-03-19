const initialState = {
    cards: []
};

export function card(state = initialState, action) {
    switch (action.type) {
        case "TEST":
        return {
            ...state
        };
        break;
        default:
            return state
    }
}
