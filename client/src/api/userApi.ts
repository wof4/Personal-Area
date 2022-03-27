import { RESOLVE_ERROR } from '../constants';
import { UserDataType } from './../types';

import instance from './api';

const UserApi = {

  async getUserData(userId: string, password:string) {
    try {
      return await instance
        .get(`/user/?id=${userId}&password=${password}`)
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },

  async updateUserData(data:UserDataType) {
    try {
      return await instance
        .post(`/user-update`, data)
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },

  async deleteUser( userId: string) {
    try {
      return await instance
        .delete(`/user/?userId=${userId}`)
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },

};

export default UserApi;



