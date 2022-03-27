
import { appStateType } from './types';

export const getAuthData = (state: appStateType) => state.mainReducer.userData;
export const IsAuth = (state: appStateType) => state.mainReducer.isAuth;
export const getContactsData = (state: appStateType) => state.mainReducer.contactsData;
export const getLoadingStatus = (state: appStateType) => state.mainReducer.isLoading;
export const getAlert = (state: appStateType) => state.mainReducer.alert;
export const getSearchString = (state: appStateType) => state.mainReducer.searchString;





