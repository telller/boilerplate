import Immutable from 'seamless-immutable'
import * as types from './types'

const initialState = Immutable({
  isFetchingCurrentMeeting: false,
  currentMeeting: {},
  chatMessages: [],
})

export default (state = initialState, action) => {
  const actions = {
    [types.GET_MEETING_SUCCESS]: () => ({
      isFetchingCurrentMeeting: false,
      currentMeeting: action.payload.currentMeeting,
    }),
    [types.GET_MEETING_REQUEST]: () => ({ isFetchingCurrentMeeting: true }),
    [types.GET_MEETING_ERROR]: () => ({ isFetchingCurrentMeeting: false }),
  }
  return actions[action.type] ? state.merge(actions[action.type]()) : state
}
