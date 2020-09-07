import { types } from "../types/types";

const initialState = {
    polls: []
};

export const pollReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.pollAddNew:
            return {
                ...state,
                polls: [
                    ...state.polls,
                    action.payload
                ]
            }

        case types.pollsLoaded:
            return {
                ...state,
                polls: [...action.payload]
            }

        case types.pollLoadedByID:

            if (state.polls.length > 0)
                return {
                    ...state,
                    polls: state.polls.map(
                        poll => (poll._id === action.payload._id) ? action.payload : poll
                    )
                }
            else {
                return {
                    ...state,
                    polls: [action.payload]
                }
            }


        case types.voteAdd:
            return {
                ...state,
                polls: state.polls.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                )
            }

        default:
            return state;

    }

}