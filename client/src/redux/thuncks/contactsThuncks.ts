import ContactApi from "../../api/ContactApi";
import { ContactDataType, thunkType } from "../../types";
import { actions } from "../reducers/mainReducer";

export const getContactTc = (): thunkType => (dispatch) => {
    ContactApi.getContacts().then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            dispatch(actions.setAlert({message:res.message, type:'success'}))
            dispatch(actions.setContactsData(res.allContacts))
        }
})
};

export const updateContactDataTc = (data: ContactDataType): thunkType => (dispatch) => {
    dispatch(actions.setAlert({message:'Обновление...', type:'info'}))
    ContactApi.updateContact(data).then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            dispatch(getContactTc())
        }
    })
};

export const createNewContactTc = (data: ContactDataType): thunkType => (dispatch) => {
    dispatch(actions.setAlert({message:'Добавление...', type:'info'}))
    ContactApi.createNewContact(data).then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            dispatch(actions.setAlert({message:res.message, type:'info'}))
            dispatch(getContactTc())
        }
    })
};

export const deleteContactTc = (contactId: string): thunkType => (dispatch) => {
    dispatch(actions.setAlert({message:'Удаление...', type:'info'}))
    ContactApi.deleteContact(contactId).then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            dispatch(actions.setAlert({message:res.message, type:'info'}))
            dispatch(getContactTc())
        }
    })
};