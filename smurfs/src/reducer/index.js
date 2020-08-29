import {
    SMURFS_LOAD_SUCCESS,
    SMURF_ADD_SUCCESS,

  } from '../actions/index'

const initialState = [];

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
      case SMURFS_LOAD_SUCCESS:
        return [...state, ...action.payload];

      case SMURF_ADD_SUCCESS:
        return [...state, action.payload];


        

      default:
        return state;
    }
  }; 