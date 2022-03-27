import { RESOLVE_ERROR } from '../constants';
import { ContactDataType } from '../types';
import instance from './api';

const ContactApi = {

  async updateContact(data: ContactDataType) {
    try {
      return await instance
        .post('/update-contact', data)
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },

  async createNewContact(data: ContactDataType, userId:string) {
    try {
      return await instance
        .post('/create', {data, userId})
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },

  async getContacts(userId:string) {
    try {
      return await instance
        .get(`/contact/?userId=${userId}`)
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },

  async deleteContact(  contactId: string, userId: string) {
    try {
      return await instance
        .delete(`/contact/?contactId=${contactId}&userId=${userId}`)
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },
  
};

export default ContactApi;





