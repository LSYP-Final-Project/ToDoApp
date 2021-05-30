import { GET_SPRINTS } from '../actionTypes';

const initState = [
    {
        id: 1,
        name: "END GAME",
        status: "ONGOING",
        tasks: [
            {
            description: "Jako zalogowany na widoku sprints moge dodać zadanie do sprintu, lub je usunac do backloga",
            points: "5"
            },
            {
            description: "Jako zalogowany na widoku sprints moge wyswietlic sprint i liste zadan",
            points: "4"
            },
            {
            description: "Jako zalogowany na widoku sprints moge dodać sprint",
            points: "3"
            }
        ]
    }
]

const sprintsReducer = (state = initState, action) => {
    switch (action.type) { 
        case GET_SPRINTS:
            return action.payload
        default:
            return state
    }
}

export default sprintsReducer;

export const getAllSprints = (state) => state.sprints