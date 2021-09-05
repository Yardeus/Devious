
import React from "react";

const SET_USER_DATA = 'SET_USER_DATA';
const SIGN_IN = 'SIGN_IN';
const LOG_OUT = 'LOG_OUT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const EMPLOYER_SIGN_IN = "EMPLOYER_SIGN_IN";
const TOGGLE_IS_LOGIN_PROGRESS = 'TOGGLE_IS_LOGIN_PROGRESS';
const SET_MESSAGE = 'SET_MESSAGE';


let initialState = {

    userId: null,
    email: null,
    login: null,
    password: null,
    isAuth: false,
    token: null,
    isFetching: false,
    loginInProgress: false,
    type: null,
    message: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}



export default authReducer;