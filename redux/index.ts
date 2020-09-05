import { combineReducers, Reducer } from "redux"
import { deviceReducer as device, DeviceState } from "./device"
import { navReducer } from "../navigation/redux-navigation"

export interface ApplicationState {
  nav: any
  device: DeviceState
}

export const appReducer: Reducer<ApplicationState> = combineReducers({
  nav: navReducer,
  device,
});
