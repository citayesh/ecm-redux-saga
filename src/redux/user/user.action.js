import {UserACtionTypes} from './user.type'

export const setCurrentUser=user=>(
    {
        type:UserACtionTypes.SET_CURRENT_USER,
        payload:user
    }
)