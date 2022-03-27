import MainApi from "../../api/mainApi"
import { DataEnterType, thunkType } from "../../types"
import { actions } from "../reducers/mainReducer"
import { getContactTc } from "./contactsThuncks";

export const sendUserDataToEnterTc = (data: DataEnterType, type: string): thunkType => (dispatch) => {
    dispatch(actions.setLoadingStatus(true))
    dispatch(actions.setAlert(null))
    const api = type === "login" ? MainApi.login : MainApi.register
    api(data).then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            console.log(res)
            dispatch(actions.setAlert({message:res.message, type:'success'}))
            dispatch(actions.setUserData(res.user))
            dispatch(getContactTc(res.user._id))
            dispatch(actions.setAuthStatus(true))
        }
        dispatch(actions.setLoadingStatus(false))
    })
};





