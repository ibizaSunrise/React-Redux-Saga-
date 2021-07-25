import {CREATE_POST} from './types'
import {showAlert} from './actions'

const forbidden = ['fuck', 'bich']

export function forbiddenWordMiddleware({dispatch}){
    return function(next){
        return function(action){
            if(action.type === CREATE_POST){
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if(found.length){
                    return  dispatch(showAlert('Title includes forbidden words'))
                }
            }
            return next(action)
        }
    }
}