import ContactApi from "../../api/ContactApi";
import { ContactDataType, thunkType } from "../../types";
import { actions } from "../reducers/mainReducer";

export const getContactTc = (userId:string): thunkType => (dispatch) => {
    ContactApi.getContacts(userId).then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            dispatch(actions.setAlert({message:res.message, type:'success'}))
            dispatch(actions.setContactsData(res.contacts))
        }
})
};

export const updateContactDataTc = (data: ContactDataType, userId:string): thunkType => (dispatch) => {
    dispatch(actions.setAlert({message:'Обновление...', type:'info'}))
    ContactApi.updateContact(data).then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            dispatch(getContactTc(userId))
        }
    })
};

export const createNewContactTc = (data: ContactDataType, userId:string): thunkType => (dispatch) => {
    dispatch(actions.setAlert({message:'Добавление...', type:'info'}))
    ContactApi.createNewContact(data, userId).then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            dispatch(actions.setAlert({message:res.message, type:'info'}))
            dispatch(getContactTc(userId))
        }
    })
};

export const deleteContactTc = (contactId: string, userId:string): thunkType => (dispatch) => {
    dispatch(actions.setAlert({message:'Удаление...', type:'info'}))
    ContactApi.deleteContact(contactId, userId).then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            dispatch(actions.setAlert({message:res.message, type:'info'}))
            dispatch(getContactTc(userId))
        }
    })
};