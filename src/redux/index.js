import { createStore, combineReducers} from 'redux'

import scrollIndex from './reducers/scrollReducers'

const store = createStore(combineReducers({
    scrollIndex
}))

export default store
