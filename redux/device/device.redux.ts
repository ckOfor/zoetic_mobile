import {
  DeviceState,
  DeviceAction,
  SET_ONLINE
} from "./device.types"

const initialState: DeviceState = {
  isOnline: false
}

export function deviceReducer(
  state: DeviceState = initialState,
  action: DeviceAction
): DeviceState {
  switch (action.type) {
    case SET_ONLINE:
      return {
        ...state,
        isOnline: action.payload
      }
    default:
      return state
  }
}
