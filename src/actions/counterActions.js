import { COUNTER as Actions  } from '../constants';

export function increase(params = {}) {
  return {
    type: Actions.INCREASE,
    payload: {
      ...params,
    },
  }
}

export function decrease(params = {}) {
  return {
    type: Actions.DECREASE,
    payload: {
      ...params,
    },
  }
}