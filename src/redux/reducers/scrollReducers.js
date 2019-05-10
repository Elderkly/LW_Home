
import { UPDATE_SCROLL_INDEX } from '../actions/scrollActions'

export default (state = 0, action) => {
    switch (action.type) {
        case UPDATE_SCROLL_INDEX:
            return action.data
        default:
            return state
    }
}
