import { ThunkAction } from "redux-thunk"
import { Action } from "redux"
import {
  SET_ONLINE,
} from "./device.types"
import { ApplicationState } from ".."
// import {  } from "react-native-dotenv"
import axios from 'axios'
import { NavigationActions } from "react-navigation";
import { store } from "../../App";

/**
 *  Actions
 */

export const setOnline = (isOnline: boolean) => ({
  type: SET_ONLINE,
  payload: isOnline
})

export const goBack = (): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<any>
  > => async (dispatch, getState) => {
  
  store.dispatch(NavigationActions.navigate({ routeName: 'home' }))
}



