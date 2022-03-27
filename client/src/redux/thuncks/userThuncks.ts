import { UserDataType } from './../../types';
import UserApi from "../../api/userApi";
import { thunkType } from "../../types";
import { actions } from "../reducers/mainReducer";

export const updateUserDataTc = (data: UserDataType): thunkType => (dispatch) => {
    UserApi.updateUserData(data).then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            dispatch(actions.setAlert({message:res.message, type:'success'}))
            dispatch(actions.setUserData(res.userData))
        }
    })
};

export const deleteUsertTc = (userId:string): thunkType => (dispatch) => {
    UserApi.deleteUser(userId).then((res) => {
        if (res.statusCode !== 200) {
            dispatch(actions.setAlert({message:res.message, type:'error'}))
        } else {
            dispatch(actions.setAlert({message:res.message, type:'success'}))
                    dispatch(actions.setAuthStatus(false))
        }
    })
};
