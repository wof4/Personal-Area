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

  async createNewContact(data: ContactDataType) {
    try {
      return await instance
        .post('/create', data)
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },

  async getContacts() {
    try {
      return await instance
        .get('/contact')
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },

  async deleteContact(contactId: string) {
    try {
      return await instance
        .delete(`/contact/?contactId=${contactId}`)
        .then((res) => res.data);
    } catch (err) {
      return { message: RESOLVE_ERROR };
    }
  },
  
};

export default ContactApi;





