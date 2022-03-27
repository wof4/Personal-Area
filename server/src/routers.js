const { Router } = require('express');
const createNewContact = require('./controllers/createNewContact');
const deleteContacts = require('./controllers/deleteContacts');
const deleteUser = require('./controllers/deleteUser');
const getContacts = require('./controllers/getContacts');
const getUserData = require('./controllers/getUserData');
const login = require('./controllers/login');
const Register = require('./controllers/Register');
const UpdateContacts = require('./controllers/UpdateContacts');
const UserUpdate = require('./controllers/UserUpdate');

const apiRouter = new Router();

apiRouter.post('/login', login);
apiRouter.post('/register', Register);
apiRouter.post('/user-update', UserUpdate);
apiRouter.post('/create', createNewContact);
apiRouter.post('/update-contact', UpdateContacts);

apiRouter.get('/contact', getContacts);
apiRouter.get('/user', getUserData);
apiRouter.delete('/user', deleteUser);

apiRouter.delete('/contact', deleteContacts);



exports.apiRouter = apiRouter;
