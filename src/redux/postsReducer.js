import { CREATE_POST, FETCH_POSTS } from './types'

const initialstate = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialstate, action) => {

    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: state.posts.concat([action.payload]) }
        case FETCH_POSTS:
            return { ...state, fetchedPosts: action.payload }

        default: return state
    }
}