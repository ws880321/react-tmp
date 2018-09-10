// const GET_BOOKS ='GET_BOOKS'
import {
    GET_BOOKS
} from '../actions/novel'
export function getHotNovel(state = [], action) {
    switch (action.type) {
        case GET_BOOKS:
            return action.data
        default:
            return state
    }
}