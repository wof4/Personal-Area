import { actionsType, AlertType, ContactDataType, UserDataType } from '../../types';
import {
    SET_USER_DATA, SET_ALERT,
    SET_LOADING_STATUS,
    SET_CONTACTS_DATA,
    SET_AUTH_STATUS,
    SET_SEARCH_STRING
} from '../../constants';

type initialStateType = {
    userData: UserDataType
    contactsData: Array<ContactDataType> | null,
    isLoading: boolean
    alert: AlertType
    isAuth: boolean
    searchString: string
}

const initialState: initialStateType = {
    userData: {
        _id: '',
        name: '',
        password: '',
    },
    contactsData: null,
    isLoading: false,
    alert: null,
    isAuth: false,
    searchString: ''
};

const mainReducer = (state = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, userData: action.payload };
        }
        case SET_CONTACTS_DATA: {
            return { ...state, contactsData: action.payload };
        }
        case SET_ALERT: {
            return { ...state, alert: action.payload };
        }
        case SET_LOADING_STATUS: {
            return { ...state, isLoading: action.payload };
        }
        case SET_AUTH_STATUS: {
            return { ...state, isAuth: action.payload };
        }
        case SET_SEARCH_STRING: {
            return { ...state, searchString: action.payload };
        }
        default: {
            return state;
        }
    }
};

export const actions = {
    setUserData: (payload: UserDataType) => ({ type: SET_USER_DATA, payload } as const),
    setContactsData: (payload: Array<ContactDataType>) => ({ type: SET_CONTACTS_DATA, payload } as const),
    setAlert: (payload: AlertType) => ({ type: SET_ALERT, payload } as const),
    setLoadingStatus: (payload: boolean) => ({ type: SET_LOADING_STATUS, payload } as const),
    setAuthStatus: (payload: boolean) => ({ type: SET_AUTH_STATUS, payload } as const),
    setSearchString: (payload: string) => ({ type: SET_SEARCH_STRING, payload } as const),
};

export default mainReducer;


