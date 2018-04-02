import createToast from './createToast'

export const ADD_TOAST = 'ADD_TOAST'
export const REMOVE_TOAST = 'REMOVE_TOAST'

export function addToast (options = {}) {
  return {
    payload: createToast(options),
    type: ADD_TOAST
  }
}

export function removeToast (uuid) {
  return {
    payload: uuid,
    type: REMOVE_TOAST
  }
}
