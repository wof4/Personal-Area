import { RESOLVE_ERROR } from '../constants';
import { DataEnterType } from '../types';
import instance from './api';

const MainApi = {
  
  async login(data: DataEnterType) {
    try {
      return await instance
        .post('/login', data)
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },

  async register(data: DataEnterType) {
    try {
      return await instance
        .post('/register', data)
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },

};

export default MainApi;





