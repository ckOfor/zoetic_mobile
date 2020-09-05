export type DeviceState = {
  isOnline: boolean
}

export const SET_ONLINE = "SET_ONLINE"
export type SetOnline = {
  type: typeof SET_ONLINE
  payload: boolean
}

export type DeviceAction = SetOnline 
