import * as MeetingService from 'services/meeting.service.js'
// import showError from 'showError'
import * as types from './types'
import { get } from 'lodash'

export const getMeetingById = (id, succCb, errCb) => async dispatch => {
  try {
    dispatch({ type: types.GET_MEETING_REQUEST })
    const res = await MeetingService.getMeetingById(id)
    if (res && res.status === 'success') {
      dispatch({ type: types.GET_MEETING_SUCCESS, payload: { currentMeeting: res.data } })
      succCb && succCb(id)
    }
  } catch (err) {
    dispatch({ type: types.GET_MEETING_ERROR })
    errCb && errCb(id)
    console.error(err)
    // showError(err)
  }
}
