import { ADD, MINUS, RESET } from "./action"

export const add = (data)=> {
    return {
        type:ADD,
        payload:data
    }
}

export const minus = (data)=> {
    return {
        type:MINUS,
        payload:data
    }
}

export const reset = (data)=> {
    return {
        type:RESET,
        payload:data
    }
}