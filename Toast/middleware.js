import { addToast } from './actions'

export const notificationMiddleware = store => next => action => {
  if (action.type.match(/CREATE_/g) || action.type.match(/UPDATE_/g) || action.type.match(/DESTROY_/g)) {
    store.dispatch(addToast({ text: action.type }))
  } else if (action.type.match(/_FAIL/g)) {
    store.dispatch(addToast({ text: action.type, color: 'red' }))
  }

  next(action)
}
