import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  userprofileFetchUserProfileById: ['data'],
  userprofileFetchUserProfileByIdDone: ['data'],
  userprofileEditProfile: ['data'],
  userprofileEditProfileDone: ['data'],
  userprofileResetEditProfile: null,
  reset: null
})

export const UserprofileTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isRequest: false,
  status: 0,
  errors: [],
  fullName: '',
  profilePicture: '',
  firstName: '',
  saldo: '',
  lastName: '',
  email: '',
  nickname: '',
  address: '',
  password: '',
  username: ''
})
export const userprofileFetchUserProfileById = (state, { data }) => state.merge({ isRequest: true })
export const userprofileFetchUserProfileByIdDone = (state, { data }) => state.merge({ isRequest: false, profilePicture: null, ...data })
export const userprofileResetEditProfile = (state) => state.merge({ isRequest: false, errors: [], status: 0 })
export const userprofileEditProfile = (state, { data }) => state.merge({ isRequest: true })
export const userprofileEditProfileDone = (state, { data }) => state.merge({ isRequest: true, ...data })
export const reducer = createReducer(INITIAL_STATE, {
  [Types.USERPROFILE_RESET_EDIT_PROFILE]: userprofileResetEditProfile,
  [Types.USERPROFILE_EDIT_PROFILE]: userprofileEditProfile,
  [Types.USERPROFILE_EDIT_PROFILE_DONE]: userprofileEditProfileDone,
  [Types.USERPROFILE_FETCH_USER_PROFILE_BY_ID]: userprofileFetchUserProfileById,
  [Types.USERPROFILE_FETCH_USER_PROFILE_BY_ID_DONE]: userprofileFetchUserProfileByIdDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
